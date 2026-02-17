import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface BlogLayoutProps {
  children: React.ReactNode
  params: {
    id: string
  }
}

async function getBlogPost(id: string) {
  try {
    // In a real app, fetch from database or static file
    // For now, we'll fetch from the public API
    const response = await fetch('https://chisomo-misomali.vercel.app/api/blogs', {
      cache: 'revalidate',
      next: { revalidate: 3600 }, // Revalidate every hour
    })
    const data = await response.json()
    return data.blogs?.find((blog: any) => blog.id === id)
  } catch (error) {
    return null
  }
}

export async function generateMetadata({
  params,
}: Omit<BlogLayoutProps, 'children'>): Promise<Metadata> {
  const blog = await getBlogPost(params.id)

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  const baseUrl = 'https://chisomo-misomali.vercel.app'
  const blogUrl = `${baseUrl}/blog/${params.id}`

  return {
    title: `${blog.title} | Chisomo Misomali`,
    description: blog.excerpt,
    keywords: [blog.category, 'blog', 'article', blog.title],
    authors: [{ name: 'Chisomo Misomali' }],
    creator: 'Chisomo Misomali',
    alternates: {
      canonical: blogUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      url: blogUrl,
      siteName: 'Chisomo Misomali Portfolio',
      locale: 'en_US',
      publishedTime: blog.date,
      authors: ['Chisomo Misomali'],
      tags: [blog.category],
      images: [
        {
          url: blog.image ? `${baseUrl}${blog.image}` : `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: blog.title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image ? `${baseUrl}${blog.image}` : `${baseUrl}/og-image.jpg`],
      creator: '@ChisomotheAI',
    },
  }
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return children
}
