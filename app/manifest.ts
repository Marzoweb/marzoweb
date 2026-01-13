import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'MARZOWEB',
        short_name: 'MARZOWEB',
        description: 'Expert Web Agency in Morocco',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0056b3',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
