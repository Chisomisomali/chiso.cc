'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { BlogPost } from '@/lib/blogs'

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await fetch('/api/blogs')
        const data = await response.json()
        const sortedBlogs = (data.blogs || []).sort(
          (a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        setBlogPosts(sortedBlogs)
      } catch (error) {
        console.error('Failed to load blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Chisomo's Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Stories about home labbing, cloud infrastructure, personal reflections, and technical adventures.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {loading ? (
              <div className="col-span-2 text-center py-12">
                <p className="text-muted-foreground">Loading blogs...</p>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="col-span-2 text-center py-12">
                <p className="text-muted-foreground">No blogs published yet.</p>
              </div>
            ) : (
              blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full cursor-pointer backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10 hover:border-primary/50">
                    {/* Image */}
                    <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                      {post.image && (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime} min read</span>
                      </div>

                      <h2 className="text-xl font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              More posts coming soon! Stay tuned for updates on my latest projects and reflections.
            </p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
