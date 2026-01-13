import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog'

export const baseUrl = 'https://marzoweb.com'

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllBlogPosts()

    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    const routes = [
        '',
        '/services',
        '/templates',
        '/blog',
        '/portfolio',
        '/realisation',
        '/contact',
        '/virtual-tour',
        '/templates-viewer',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return [...routes, ...blogUrls]
}
