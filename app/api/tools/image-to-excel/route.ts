import { NextRequest, NextResponse } from "next/server"
import { createWorker } from "tesseract.js"
import * as XLSX from "xlsx"
import path from "path"

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()
        const file = formData.get("file") as File

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 })
        }

        // Convert file to buffer
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        // Initialize Tesseract worker (v7 syntax)
        // Explicitly set worker path to node_modules to avoid Next.js bundling issues
        const workerPath = path.join(process.cwd(), "node_modules", "tesseract.js", "src", "worker-script", "node", "index.js")
        // Check if I should use dist/worker.min.js or src/worker-script/node/index.js
        // Tesseract v5 used dist/worker.min.js. v7/6 uses different structure.
        // Let's try simplified approach first, if that fails we use specific path.
        // Actually, the error `Cannot find module ... .next\worker-script\node\index.js` means it's looking for `index.js`.

        const worker = await createWorker('eng', 1, {
            workerPath: path.join(process.cwd(), "node_modules/tesseract.js/src/worker-script/node/index.js")
        })

        // Recognize text
        const { data: { text } } = await worker.recognize(buffer)

        await worker.terminate()

        if (!text.trim()) {
            return NextResponse.json({ error: "No text found in image" }, { status: 404 })
        }

        // Processing Logic: Try to create a table from the text
        // 1. Split by newlines to get rows
        const lines = text.split('\n').filter(line => line.trim() !== '')

        // 2. Split by multiple spaces or tabs to get columns (heuristic)
        const data = lines.map(line => {
            // Split by 2 or more spaces, or tabs
            return line.trim().split(/\s{2,}|\t/)
        })

        // Create Excel workbook
        const wb = XLSX.utils.book_new()
        const ws = XLSX.utils.aoa_to_sheet(data)
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1")

        // Generate buffer
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "buffer" })

        // Return as downloadable file
        return new NextResponse(excelBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "Content-Disposition": `attachment; filename="converted_data_ocr.xlsx"`,
            },
        })

    } catch (error) {
        console.error("OCR Conversion error:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
