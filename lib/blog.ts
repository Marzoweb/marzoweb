// Mock blog data - in a real application, this would come from a CMS or database
const blogPosts = [
  {
    slug: "essential-business-website-features",
    title: "10 Essential Features Every Business Website Needs in 2023",
    excerpt:
      "Learn about the must-have features for business websites that drive engagement, conversions, and growth in today's competitive digital landscape.",
    content: `
      <p>In today's digital-first world, your website is often the first point of contact between your business and potential customers. A well-designed website can be a powerful tool for attracting, engaging, and converting visitors into loyal customers.</p>
      
      <h2>1. Mobile Responsiveness</h2>
      <p>With over 50% of global web traffic coming from mobile devices, having a mobile-responsive website is no longer optional. Your website should look and function perfectly across all devices, from smartphones to desktops.</p>
      
      <h2>2. Fast Loading Speed</h2>
      <p>Users expect websites to load quickly. In fact, 40% of visitors will abandon a website that takes more than 3 seconds to load. Optimize your images, leverage browser caching, and consider using a content delivery network (CDN) to improve loading times.</p>
      
      <h2>3. Clear Navigation</h2>
      <p>Users should be able to find what they're looking for within a few clicks. Implement a logical navigation structure with clear labels and consider adding a search function for larger websites.</p>
      
      <h2>4. Compelling Call-to-Actions (CTAs)</h2>
      <p>Every page on your website should have a clear purpose and guide users toward taking a specific action. Use compelling CTAs that stand out visually and communicate value.</p>
      
      <h2>5. Contact Information</h2>
      <p>Make it easy for potential customers to reach you. Include your phone number, email address, and physical location (if applicable) in a prominent location on your website.</p>
      
      <h2>6. About Us Page</h2>
      <p>Build trust with your visitors by sharing your company's story, mission, and values. Highlight your team members and showcase your expertise in your industry.</p>
      
      <h2>7. Social Proof</h2>
      <p>Include testimonials, reviews, case studies, and client logos to build credibility and trust with potential customers.</p>
      
      <h2>8. Blog or Resource Section</h2>
      <p>Regularly publishing valuable content helps establish your authority in your industry, improves your search engine rankings, and keeps visitors coming back to your website.</p>
      
      <h2>9. Security Features</h2>
      <p>Protect your website and your visitors' data with an SSL certificate, secure payment processing, and regular security updates.</p>
      
      <h2>10. Analytics Integration</h2>
      <p>Implement tools like Google Analytics to track your website's performance, understand user behavior, and make data-driven decisions to improve your online presence.</p>
      
      <h2>Conclusion</h2>
      <p>By incorporating these essential features into your business website, you'll create a powerful online presence that attracts, engages, and converts visitors into customers. Remember, your website is an investment in your business's future, so it's worth taking the time to get it right.</p>
    `,
    category: "Business",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=600&width=1200",
    author: "Alex Morgan",
    authorTitle: "Web Strategist",
    authorImage: "/placeholder.svg?height=100&width=100",
  },
  {
    slug: "color-palette-guide",
    title: "How to Choose the Right Color Palette for Your Brand's Website",
    excerpt:
      "A comprehensive guide to selecting colors that communicate your brand values and resonate with your audience.",
    content: `
      <p>Colors play a crucial role in how your brand is perceived. The right color palette can evoke specific emotions, communicate your brand values, and create a memorable impression on your audience.</p>
      
      <h2>Understanding Color Psychology</h2>
      <p>Different colors evoke different emotions and associations. For example, blue often represents trust and reliability, while red can signify passion or urgency. Before selecting your color palette, consider what emotions you want your brand to evoke.</p>
      
      <h2>Start with Your Brand Identity</h2>
      <p>Your color palette should align with your brand's personality and values. Are you playful and creative, or professional and trustworthy? Your colors should reflect these qualities.</p>
      
      <h2>Consider Your Target Audience</h2>
      <p>Different demographics may respond differently to various colors. Research your target audience's preferences and cultural associations with colors to ensure your palette resonates with them.</p>
      
      <h2>Analyze Your Competitors</h2>
      <p>Look at what colors your competitors are using. You might want to use similar colors to fit within industry expectations, or choose different colors to stand out.</p>
      
      <h2>Creating a Balanced Palette</h2>
      <p>A typical color palette includes:</p>
      <ul>
        <li>Primary color: Your main brand color</li>
        <li>Secondary colors: Complementary colors that work well with your primary color</li>
        <li>Accent colors: Used sparingly for calls-to-action or to highlight important elements</li>
        <li>Neutral colors: For text, backgrounds, and balance</li>
      </ul>
      
      <h2>Testing Your Palette</h2>
      <p>Before finalizing your color palette, test it in various contexts: on different devices, in print materials, and with different audience segments. Ensure it maintains its impact and readability across all mediums.</p>
      
      <h2>Conclusion</h2>
      <p>Choosing the right color palette is a strategic decision that can significantly impact your brand's perception and website's effectiveness. Take the time to research, test, and refine your colors to create a palette that truly represents your brand and resonates with your audience.</p>
    `,
    category: "Design",
    date: "April 28, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=600&width=1200",
    author: "Emma Rodriguez",
    authorTitle: "Creative Director",
    authorImage: "/placeholder.svg?height=100&width=100",
  },
  {
    slug: "website-speed-optimization",
    title: "Optimizing Website Load Speed: Best Practices",
    excerpt: "Learn how to dramatically improve your website's performance with these proven optimization techniques.",
    content: `
      <p>Website speed is a critical factor in user experience and search engine rankings. A slow-loading website can lead to higher bounce rates, lower conversion rates, and poor SEO performance.</p>
      
      <h2>Why Website Speed Matters</h2>
      <p>Studies show that 40% of users abandon websites that take more than 3 seconds to load. Additionally, Google uses page speed as a ranking factor for both desktop and mobile searches.</p>
      
      <h2>Key Optimization Techniques</h2>
      
      <h3>1. Optimize Images</h3>
      <p>Large, unoptimized images are often the biggest culprits of slow-loading websites. Compress your images, use modern formats like WebP, and implement lazy loading to improve performance.</p>
      
      <h3>2. Minify CSS, JavaScript, and HTML</h3>
      <p>Remove unnecessary characters, spaces, and comments from your code to reduce file sizes and improve loading times.</p>
      
      <h3>3. Leverage Browser Caching</h3>
      <p>Set up browser caching to store frequently accessed resources on users' devices, reducing the need to reload the entire page on subsequent visits.</p>
      
      <h3>4. Use a Content Delivery Network (CDN)</h3>
      <p>CDNs distribute your website's static content across multiple servers worldwide, reducing the distance between users and your server and improving load times.</p>
      
      <h3>5. Implement Critical CSS</h3>
      <p>Identify and inline the CSS necessary for rendering above-the-fold content, allowing the page to display quickly while the rest of the CSS loads.</p>
      
      <h3>6. Reduce Server Response Time</h3>
      <p>Optimize your server configuration, use a high-quality hosting provider, and consider implementing server-side caching to reduce response times.</p>
      
      <h2>Measuring Performance</h2>
      <p>Use tools like Google PageSpeed Insights, GTmetrix, and WebPageTest to measure your website's performance and identify specific areas for improvement.</p>
      
      <h2>Conclusion</h2>
      <p>Optimizing your website's load speed is an ongoing process that requires regular monitoring and adjustments. By implementing these best practices, you can create a faster, more user-friendly website that performs well in search rankings and provides a better experience for your visitors.</p>
    `,
    category: "Web Development",
    date: "April 14, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?height=600&width=1200",
    author: "Michael Chen",
    authorTitle: "Performance Engineer",
    authorImage: "/placeholder.svg?height=100&width=100",
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3) {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit)
}

export function getAllBlogPosts() {
  return blogPosts
}
