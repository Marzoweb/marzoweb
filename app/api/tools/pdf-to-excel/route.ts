import { NextRequest, NextResponse } from "next/server"
import * as XLSX from "xlsx"

// pdf-parse v1.1.1 export is the function itself
// Import directly from lib to avoid index.js side-effects (trying to read test file)
const pdfParse = require("pdf-parse/lib/pdf-parse.js")

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()
        const file = formData.get("file") as File

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 })
        }

        // Validate file type
        if (!file.type.includes("pdf")) {
            return NextResponse.json({ error: "File must be a PDF" }, { status: 400 })
        }

        // Convert file to buffer
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        // Extract text from PDF
        const data = await pdfParse(buffer)
        const text = data.text

        if (!text.trim()) {
            return NextResponse.json({ error: "No text found in PDF" }, { status: 404 })
        }

        // Processing Logic: Try to create a table from the text
        // 1. Split by newlines to get rows
        const lines = text.split('\n').filter((line: string) => line.trim() !== '')

        // 2. Split by multiple spaces or tabs to get columns (heuristic)
        const tableData = lines.map((line: string) => {
            // Split by 2 or more spaces, or tabs
            return line.trim().split(/\s{2,}|\t/)
        })

        // Create Excel workbook
        const wb = XLSX.utils.book_new()
        const ws = XLSX.utils.aoa_to_sheet(tableData)
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1")

        // Generate buffer
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "buffer" })

        // Return as downloadable file
        return new NextResponse(excelBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "Content-Disposition": `attachment; filename="converted_data_pdf.xlsx"`,
            },
        })

    } catch (error) {
        console.error("PDF Conversion error:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
