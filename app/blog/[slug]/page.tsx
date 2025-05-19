"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getBlogPost, getRelatedPosts } from "@/lib/blog"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Get blog post data
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(params.slug, 3)

  return (
    <div className="container mx-auto max-w-4xl py-12 px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link href="/blog" className="inline-flex items-center text-[#0056b3] hover:text-[#004494] mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <div className="mb-6">
          <span className="bg-[#0056b3] text-white text-sm font-medium px-3 py-1 rounded-full">{post.category}</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">{post.title}</h1>

        <div className="flex flex-wrap items-center text-gray-500 mb-8 gap-4 md:gap-6">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg?height=800&width=1200"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="border-t border-gray-200 pt-6 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.authorImage || "/placeholder.svg?height=100&width=100"}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">{post.author}</p>
                <p className="text-sm text-gray-500">{post.authorTitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {relatedPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <RelatedPostCard key={index} post={relatedPost} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

function RelatedPostCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
      <div className="relative h-40 w-full">
        <Image
          src={post.image || "/placeholder.svg?height=300&width=500"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{post.date}</p>
        <Link href={`/blog/${post.slug}`} className="text-[#0056b3] hover:text-[#004494] text-sm font-medium">
          Read More
        </Link>
      </CardContent>
    </Card>
  )
}
