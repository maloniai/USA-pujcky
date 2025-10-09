'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import FAQSchema from '@/components/faq-schema'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'

const contactFaqs = [
  {
    q: 'How do I apply for a loan?',
    a: 'You can begin your application from our homepage or by selecting the “Apply Now” option in the navigation. The process takes roughly two minutes to complete.',
  },
  {
    q: 'Is your service really free?',
    a: 'Yes. Our AI-powered loan matching service is 100% free for borrowers with no application or matching fees.',
  },
  {
    q: 'How long does approval take?',
    a: 'After you apply, our AI connects you with lenders in under 60 seconds. Most borrowers receive approval decisions within a day and can get funding in one to three business days.',
  },
  {
    q: 'What if I have bad credit?',
    a: 'We partner with lenders who work with every credit profile. Our AI identifies lenders most likely to approve your application even if your credit score needs improvement.',
  },
]

export default function ContactPage() {
  const [showEmail, setShowEmail] = useState(false)
  
  // Anti-spam email obfuscation
  const emailPart1 = 'maloni'
  const emailPart2 = 'outlook'
  const emailPart3 = 'com'
  const fullEmail = `${emailPart1}@${emailPart2}.${emailPart3}`

  return (
    <>
      <FAQSchema faqs={contactFaqs} />
      <BreadcrumbSchema config="contact" />
      <Navigation />
      
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our loan matching service? We're here to help. 
              Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Get In Touch
            </h2>
            
            <div className="space-y-6">
              {/* Email Section */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-600 mb-3">
                    For general inquiries, support, or partnership opportunities, 
                    please send us an email.
                  </p>
                  {!showEmail ? (
                    <button
                      onClick={() => setShowEmail(true)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Show Email Address
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <a
                        href={`mailto:${fullEmail}`}
                        className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
                      >
                        {fullEmail}
                      </a>
                      <p className="text-sm text-gray-500">
                        Click to open in your email client
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⏱️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Response Time
                  </h3>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24-48 hours during 
                    business days (Monday-Friday, 9 AM - 5 PM EST).
                  </p>
                </div>
              </div>

              {/* Support Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🕐</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Business Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-6">
              Before reaching out, you might find your answer in our frequently asked questions:
            </p>
            
            <div className="space-y-4">
              <details className="bg-gray-50 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  How do I apply for a loan?
                </summary>
                <p className="mt-2 text-gray-700">
                  You can start your loan application by visiting our homepage or clicking 
                  the "Apply Now" button in the navigation. The process takes just 2 minutes.
                </p>
              </details>

              <details className="bg-gray-50 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  Is your service really free?
                </summary>
                <p className="mt-2 text-gray-700">
                  Yes! Our loan matching service is 100% free for borrowers. There are no 
                  application fees, matching fees, or hidden costs.
                </p>
              </details>

              <details className="bg-gray-50 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  How long does approval take?
                </summary>
                <p className="mt-2 text-gray-700">
                  Our AI matches you with lenders in under 60 seconds. Most borrowers receive 
                  approval decisions within 24 hours and funding in 1-3 business days.
                </p>
              </details>

              <details className="bg-gray-50 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer text-gray-900">
                  What if I have bad credit?
                </summary>
                <p className="mt-2 text-gray-700">
                  We work with lenders who accept all credit profiles. Our AI matches you with 
                  lenders most likely to approve your application regardless of your credit score.
                </p>
              </details>
            </div>
          </div>

          {/* Contact Information Box */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Right Away?
            </h2>
            <p className="text-lg mb-6">
              For immediate assistance with your loan application, visit our help center 
              or start your application and our AI will guide you through the process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/apply"
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Application
              </a>
              <a
                href="/about"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More About Us
              </a>
            </div>
            <LeadGenDisclosure align="center" className="mt-2 text-sm text-white/80" />
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
