import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPostsEN } from '@/data/blog-posts'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ArticleStructuredData from '@/components/article-structured-data'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPostsEN.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPostsEN.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Loan AI Portal Blog`,
    description: post.description,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPostsEN.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <ArticleStructuredData
        title={post.title}
        description={post.description}
        author={post.author}
        date={post.date}
        url={`https://loan-platform.com/blog/${post.slug}`}
        keywords={post.tags}
        category={post.category}
      />
      <Navigation />
      <main className="flex-1 min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              {post.title}
            </h1>

            <p className="text-xl text-gray-700 mb-6">
              {post.description}
            </p>

            <div className="flex items-center text-gray-600">
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => {
              // Check if paragraph is a heading
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                const headingText = paragraph.replace(/\*\*/g, '')
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-blue-900">
                    {headingText}
                  </h2>
                )
              }
              
              // Regular paragraph
              return (
                <p key={index} className="mb-4 text-gray-800 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-3 text-blue-900">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-6">
              Apply for a personal loan and get a 2-minute pre-qualification and rate check with our AI-powered platform.
            </p>
            <Link 
              href="/apply"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </Link>
            <LeadGenDisclosure className="mt-2 text-sm text-gray-600" />
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">More Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPostsEN
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <span className="text-sm text-blue-600 font-semibold">{relatedPost.category}</span>
                    <h4 className="text-lg font-bold mt-2 mb-2 text-gray-900">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.description}
                    </p>
                    <span className="text-sm text-gray-500 mt-2 inline-block">{relatedPost.readTime}</span>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
