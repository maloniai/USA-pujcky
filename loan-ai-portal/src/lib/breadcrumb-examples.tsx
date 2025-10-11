/**
 * Breadcrumb Implementation Examples
 * Shows how to add breadcrumb schema and visual breadcrumbs to pages
 */

import { BreadcrumbSchema, breadcrumbConfigs } from '@/components/breadcrumb-schema'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'

/**
 * EXAMPLE 1: State Page with Breadcrumbs
 * Usage: /states/california
 */
export function StatePageExample() {
  const stateName = 'California'
  const stateSlug = 'california'
  
  const breadcrumbItems = breadcrumbConfigs.statePage(stateName, stateSlug)

  return (
    <div>
      {/* SEO: Structured data for search engines */}
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Visual breadcrumbs for users */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ResponsiveBreadcrumbs items={breadcrumbItems} />
      </div>

      {/* Page content */}
      <h1>Personal Loans in {stateName}</h1>
      {/* ... rest of page ... */}
    </div>
  )
}

/**
 * EXAMPLE 2: City Page with Breadcrumbs
 * Usage: /states/california/los-angeles
 */
export function CityPageExample() {
  const stateName = 'California'
  const stateSlug = 'california'
  const cityName = 'Los Angeles'
  const citySlug = 'los-angeles'
  
  const breadcrumbItems = breadcrumbConfigs.cityPage(stateName, stateSlug, cityName, citySlug)

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ResponsiveBreadcrumbs items={breadcrumbItems} />
      </div>

      <h1>Personal Loans in {cityName}, {stateName}</h1>
      {/* ... rest of page ... */}
    </div>
  )
}

/**
 * EXAMPLE 3: About Page with Breadcrumbs
 */
export function AboutPageWithBreadcrumbs() {
  const breadcrumbItems = breadcrumbConfigs.aboutPage()

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ResponsiveBreadcrumbs items={breadcrumbItems} />
      </div>

      <h1>About Us</h1>
      {/* ... rest of page ... */}
    </div>
  )
}

/**
 * EXAMPLE 4: Blog Post with Breadcrumbs
 */
export function BlogPostExample() {
  const postTitle = 'How to Improve Your Credit Score'
  const postSlug = 'improve-credit-score'
  
  const breadcrumbItems = breadcrumbConfigs.blogPost(postTitle, postSlug)

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto px-4 py-4">
        <ResponsiveBreadcrumbs items={breadcrumbItems} />
      </div>

      <article>
        <h1>{postTitle}</h1>
        {/* ... rest of article ... */}
      </article>
    </div>
  )
}

/**
 * EXAMPLE 5: Custom Breadcrumbs
 * For pages with unique breadcrumb requirements
 */
export function CustomBreadcrumbsExample() {
  const customBreadcrumbs = [
    { name: 'Home', url: '/', position: 1 },
    { name: 'Resources', url: '/resources', position: 2 },
    { name: 'Calculators', url: '/resources/calculators', position: 3 },
    { name: 'Loan Calculator', url: '/resources/calculators/loan', position: 4 },
  ]

  return (
    <div>
      <BreadcrumbSchema items={customBreadcrumbs} />
      
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ResponsiveBreadcrumbs items={customBreadcrumbs} />
      </div>

      <h1>Personal Loan Calculator</h1>
      {/* ... rest of page ... */}
    </div>
  )
}

/**
 * EXAMPLE 6: Dynamic State Page
 * For dynamically generated state pages
 */
export function DynamicStatePageExample({ params }: { params: { state: string } }) {
  // In real implementation, you'd fetch state data
  const stateData = {
    name: 'California',
    slug: params.state,
  }
  
  const breadcrumbItems = breadcrumbConfigs.statePage(stateData.name, stateData.slug)

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <ResponsiveBreadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-900">
          Personal Loans in {stateData.name}
        </h1>
        {/* ... rest of page ... */}
      </div>
    </div>
  )
}

/**
 * Best Practices:
 * 
 * 1. ✅ Always include BreadcrumbSchema for SEO
 * 2. ✅ Add visual breadcrumbs for user navigation
 * 3. ✅ Use ResponsiveBreadcrumbs for mobile optimization
 * 4. ✅ Keep breadcrumb text concise and descriptive
 * 5. ✅ Match breadcrumb URLs to actual page routes
 * 6. ✅ Place breadcrumbs near the top of the page
 * 7. ✅ Use consistent styling across all pages
 * 8. ✅ Include "USA" keywords in state/city names
 */
