"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllBlogPosts } from "@/lib/blog"

export default function BlogPage() {
  const posts = getAllBlogPosts()

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="container mx-auto max-w-6xl py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Blog & Insights</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Web development tips, best practices, and insights to help your business succeed online.
        </p>
      </motion.div>

      {/* Filter Categories */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Tabs defaultValue="all" className="w-full md:w-auto">
          <TabsList className="w-full md:w-auto bg-gray-100">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white">
              All Posts
            </TabsTrigger>
            <TabsTrigger value="web-dev" className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white">
              Web Development
            </TabsTrigger>
            <TabsTrigger value="design" className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white">
              Design
            </TabsTrigger>
            <TabsTrigger value="business" className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white">
              Business
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Featured Post */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="overflow-hidden border-0 shadow-soft hover:shadow-md transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-auto">
              <Image src="/placeholder.svg?height=600&width=800" alt={posts[0].title} fill className="object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="text-sm text-[#0056b3] font-semibold mb-2">FEATURED POST</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{posts[0].title}</h2>
              <p className="text-gray-600 mb-4">{posts[0].excerpt}</p>
              <div className="text-sm text-gray-500 mb-6">
                {posts[0].date} · {posts[0].readTime}
              </div>
              <Link href={`/blog/${posts[0].slug}`}>
                <Button className="w-full md:w-auto bg-[#0056b3] hover:bg-[#004494] shadow-soft">Read Article</Button>
              </Link>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {posts.slice(1).map((post, index) => (
          <motion.div key={post.slug} variants={fadeInUp}>
            <BlogCard
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
              image={post.image}
              slug={post.slug}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex gap-2">
          <Button variant="outline" className="border-[#0056b3] text-[#0056b3]">
            Previous
          </Button>
          <Button className="bg-[#0056b3] hover:bg-[#004494] shadow-soft">Next</Button>
        </div>
      </motion.div>
    </div>
  )
}

function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  slug,
}: {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  slug: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-200 hover:translate-y-[-5px]">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#0056b3] text-white text-xs font-medium px-2.5 py-1 rounded">{category}</span>
        </div>
      </div>
      <CardHeader className="pt-6">
        <h3 className="text-xl font-bold line-clamp-2 text-gray-800">{title}</h3>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-gray-600 line-clamp-3 mb-4">{excerpt}</p>
        <div className="text-sm text-gray-500">
          {date} · {readTime}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${slug}`} className="text-[#0056b3] hover:text-[#004494] font-medium">
          Read More
        </Link>
      </CardFooter>
    </Card>
  )
}
