import { Metadata } from 'next'
import Link from 'next/link'
import { blogPostsEN } from '@/data/blog-posts'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

export const metadata: Metadata = {
  title: 'Personal Loan Blog & Financial Advice | Loan AI Portal',
  description: 'Expert guides, tips, and advice on personal loans, credit scores, debt consolidation, and financial planning. Stay informed with our comprehensive blog articles.',
}

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema config="blog" />
      <Navigation />
      <main className="flex-1 min-h-screen bg-gray-50">{/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Personal Loan Blog & Financial Advice
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-blue-100">
              Expert guides, tips, and strategies to help you make informed financial decisions
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPostsEN.map((post) => (
              <article 
                key={post.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
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
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 text-blue-900 hover:text-blue-700">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{post.readTime}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                    >
                      Read More →
                    </Link>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Ready to Apply for a Loan?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Get matched with the best personal loan offers. Quick approval, competitive rates.
            </p>
            <Link 
              href="/apply"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </Link>
            <LeadGenDisclosure className="mt-2 text-sm text-gray-600" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
