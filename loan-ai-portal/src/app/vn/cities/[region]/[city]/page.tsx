import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import StickyApplyButton from '@/components/sticky-apply-button'
import ApplicationFormScript from '@/components/application-form-script'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import {
  getVietnamCityBySlug,
  getAllVietnamCitySlugs,
  getNearbyVietnamCities,
} from '@/data/vietnam-cities'
import { getVietnamRegionBySlug } from '@/data/vietnam-regions'

interface PageProps {
  params: {
    region: string
    city: string
  }
}

// Generate static params for all cities
export async function generateStaticParams() {
  return getAllVietnamCitySlugs()
}

// Generate metadata for each city
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getVietnamCityBySlug(params.city)

  if (!city) {
    return {
      title: 'Không Tìm Thấy Thành Phố',
      description: 'Không tìm thấy trang thành phố được yêu cầu.',
    }
  }

  const title = `Vay Tiền ${city.nameVi} - Duyệt Nhanh | Loan AI Portal`
  const description = `Vay tiêu dùng tại ${city.nameVi}, ${city.regionNameVi}. ${city.nearbyLenders}+ tổ chức cho vay, số tiền vay TB ${city.avgLoanAmount}, lãi suất từ ${city.avgRate}. Duyệt nhanh cho cư dân ${city.nameVi}.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://loan-platform.com/vn/cities/${params.region}/${params.city}`,
      siteName: 'Loan AI Portal',
      locale: 'vi_VN',
      type: 'website',
    },
    alternates: {
      canonical: `https://loan-platform.com/vn/cities/${params.region}/${params.city}`,
    },
  }
}

export default function VietnamCityPage({ params }: PageProps) {
  const city = getVietnamCityBySlug(params.city)

  if (!city) {
    notFound()
  }

  const parentRegion = getVietnamRegionBySlug(params.region)

  if (!parentRegion) {
    notFound()
  }

  const nearbyCities = getNearbyVietnamCities(params.city, 6)

  // JSON-LD Schema for Local Business + Financial Service
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/FinancialService',
    name: `Loan AI Portal - ${city.nameVi}`,
    description: `Dịch vụ kết nối vay tiêu dùng với hỗ trợ AI cho cư dân ${city.nameVi}, ${city.regionNameVi}`,
    image: 'https://loan-platform.com/logo.png',
    telephone: '+84 28 1234 5678',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.nameVi,
      addressRegion: city.regionNameVi,
      addressCountry: 'VN',
    },
    areaServed: {
      '@type': 'City',
      name: city.nameVi,
      addressRegion: city.regionNameVi,
      addressCountry: 'VN',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lng,
      },
    },
    url: `https://loan-platform.com/vn/cities/${params.region}/${params.city}`,
    priceRange: '₫10,000,000 - ₫500,000,000',
    currenciesAccepted: 'VND',
    paymentAccepted: 'Chuyển khoản ngân hàng',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Vay tiêu dùng tại ${city.nameVi}`,
      itemListElement: city.popularLoanTypesVi.map((type, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: type,
          description: `${type} cho cư dân ${city.nameVi}`,
        },
        position: index + 1,
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Có bao nhiêu tổ chức cho vay tại ${city.nameVi}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Có hơn ${city.nearbyLenders} tổ chức cho vay được cấp phép phục vụ tại ${city.nameVi}. Bao gồm ngân hàng quốc gia, ngân hàng địa phương và các tổ chức tài chính phi ngân hàng.`,
        },
      },
      {
        '@type': 'Question',
        name: `Lãi suất vay tại ${city.nameVi} là bao nhiêu?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Lãi suất vay trung bình tại ${city.nameVi} dao động ${city.avgRate}. Lãi suất cụ thể phụ thuộc vào hồ sơ tín dụng, thu nhập và số tiền vay của bạn.`,
        },
      },
      {
        '@type': 'Question',
        name: `Số tiền vay trung bình tại ${city.nameVi} là bao nhiêu?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Số tiền vay trung bình tại ${city.nameVi} là ${city.avgLoanAmount}. Số tiền cụ thể phụ thuộc vào thu nhập, hồ sơ tín dụng và mục đích vay của bạn.`,
        },
      },
    ],
  }

  const breadcrumbItems = [
    { name: 'Trang chủ', url: '/', position: 1 },
    { name: 'Việt Nam', url: '/vn', position: 2 },
    { name: 'Thành phố', url: '/vn/cities', position: 3 },
    { name: parentRegion.nameVi, url: `/vn/regions/${params.region}`, position: 4 },
    { name: city.nameVi, url: `/vn/cities/${params.region}/${params.city}`, position: 5 },
  ]

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Navigation />
      <StickyApplyButton href="/vn/apply" text="Đăng ký vay" />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ResponsiveBreadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href={`/vn/regions/${params.region}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <span aria-hidden>←</span>
              Quay lại {parentRegion.nameVi}
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Vay Tiền Tại {city.nameVi}</h1>
            <p className="text-xl mb-2 opacity-90">{city.name}</p>
            <p className="text-lg mb-6 opacity-80 max-w-3xl mx-auto">{city.descriptionVi}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <div className="text-sm opacity-80">Tổ chức cho vay</div>
                <div className="text-2xl font-bold">{city.nearbyLenders}+</div>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <div className="text-sm opacity-80">Vay trung bình</div>
                <div className="text-2xl font-bold">{city.avgLoanAmount}</div>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <div className="text-sm opacity-80">Lãi suất</div>
                <div className="text-2xl font-bold">{city.avgRate}</div>
              </div>
            </div>
            <Link
              href="/vn/apply"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              So Sánh Lãi Suất Ngay
            </Link>
            <p className="mt-4 text-sm text-white/80">
              Không ảnh hưởng điểm tín dụng • Miễn phí 100%
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Vay Tiêu Dùng Tại {city.nameVi} – Hướng Dẫn 2025
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">{city.descriptionVi}</p>
              <p className="text-gray-700 leading-relaxed">
                Với dân số {city.population.toLocaleString()} người, {city.nameVi} có {city.nearbyLenders}+ tổ
                chức cho vay được cấp phép cung cấp các sản phẩm vay đa dạng. Lãi suất trung bình
                dao động {city.avgRate}, cạnh tranh trong khu vực {parentRegion.nameVi}.
              </p>
            </div>
          </section>

          {/* Loan Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Các Loại Vay Phổ Biến Tại {city.nameVi}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.popularLoanTypesVi.map((loanType, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-3">
                    {index === 0 && '💳'}
                    {index === 1 && '🏠'}
                    {index === 2 && '💰'}
                    {index === 3 && '🚨'}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{loanType}</h3>
                  <p className="text-gray-600 text-sm">
                    {loanType} được nhiều tổ chức tại {city.nameVi} cung cấp với lãi suất cạnh tranh
                    và điều khoản linh hoạt.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Regulations */}
          <section className="mb-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Quy Định Vay Địa Phương Tại {city.nameVi}
            </h2>
            <p className="text-gray-700 mb-4">
              Các quy định chính bảo vệ người vay khi vay tiền tại {city.nameVi}, {parentRegion.nameVi}:
            </p>
            <ul className="space-y-3">
              {parentRegion.regulationsVi.map((regulation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600" aria-hidden>
                    ✓
                  </span>
                  <span className="text-gray-700">{regulation}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* How to Apply */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Cách Đăng Ký Vay Tại {city.nameVi}
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Kiểm tra hồ sơ</h3>
                <p className="text-gray-600 text-sm">
                  Chuẩn bị CMND/CCCD, chứng minh thu nhập và hồ sơ tín dụng
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">So sánh lãi suất</h3>
                <p className="text-gray-600 text-sm">
                  So sánh đề xuất từ {city.nearbyLenders}+ tổ chức tại {city.nameVi}
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Nộp đơn</h3>
                <p className="text-gray-600 text-sm">
                  Hoàn thành đơn đăng ký trực tuyến trong 2 phút
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Nhận tiền</h3>
                <p className="text-gray-600 text-sm">
                  Nhận tiền sau khi được chấp thuận và xác minh
                </p>
              </div>
            </div>
          </section>

          {/* Nearby Cities */}
          {nearbyCities.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Vay Tại Các Thành Phố Lân Cận
              </h2>
              <p className="text-gray-700 mb-6">
                Khám phá lựa chọn vay tại các thành phố gần {city.nameVi}:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearbyCities.map((nearbyCity) => (
                  <Link
                    key={nearbyCity.slug}
                    href={`/vn/cities/${nearbyCity.region}/${nearbyCity.slug}`}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-blue-400"
                  >
                    <h3 className="text-lg font-bold text-blue-900 mb-1">{nearbyCity.nameVi}</h3>
                    <p className="text-sm text-gray-600 mb-3">{nearbyCity.regionNameVi}</p>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lãi suất:</span>
                        <strong className="text-green-600">{nearbyCity.avgRate}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tổ chức:</span>
                        <strong className="text-purple-600">{nearbyCity.nearbyLenders}+</strong>
                      </div>
                    </div>
                    <div className="mt-4 text-blue-600 text-sm font-semibold flex items-center gap-2">
                      Xem chi tiết
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Câu Hỏi Thường Gặp Về Vay Tại {city.nameVi}
            </h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Có bao nhiêu tổ chức cho vay tại {city.nameVi}?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Có hơn {city.nearbyLenders} tổ chức cho vay được cấp phép phục vụ tại {city.nameVi}. Bao
                  gồm ngân hàng quốc gia, ngân hàng địa phương và các tổ chức tài chính phi ngân hàng.
                  Sự cạnh tranh này giúp người vay có được lãi suất và điều khoản tốt hơn.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Lãi suất vay tại {city.nameVi} là bao nhiêu?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Lãi suất vay trung bình tại {city.nameVi} dao động {city.avgRate}. Lãi suất cụ thể phụ
                  thuộc vào hồ sơ tín dụng, thu nhập và số tiền vay của bạn. Người vay có hồ sơ tín
                  dụng tốt và thu nhập ổn định thường nhận được lãi suất thấp hơn.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Số tiền vay trung bình tại {city.nameVi} là bao nhiêu?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Số tiền vay trung bình tại {city.nameVi} là {city.avgLoanAmount}. Số tiền cụ thể phụ
                  thuộc vào thu nhập, hồ sơ tín dụng và mục đích vay của bạn. Các tổ chức cho vay tại{' '}
                  {city.nameVi} có thể cung cấp từ ₫10 triệu đến {parentRegion.maxLoanAmount} cho
                  khách hàng đủ điều kiện.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Mất bao lâu để được duyệt vay tại {city.nameVi}?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Thời gian phê duyệt tại {city.nameVi} thường là 24-48 giờ cho quyết định sơ bộ. Sau khi
                  được chấp thuận, tiền có thể được giải ngân trong vòng 3-7 ngày làm việc. Một số tổ
                  chức cho vay tại {city.nameVi} cung cấp giải ngân nhanh trong 24 giờ cho khách hàng
                  đủ điều kiện.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Tôi cần chuẩn bị những giấy tờ gì để vay tại {city.nameVi}?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Để vay tại {city.nameVi}, bạn cần: CMND/CCCD hợp lệ, chứng minh thu nhập (bảng lương,
                  sao kê ngân hàng), chứng minh cư trú tại {city.nameVi} hoặc {parentRegion.nameVi}, số
                  bảo hiểm xã hội và chi tiết tài khoản ngân hàng. Người làm tự do có thể cần thêm giấy
                  phép kinh doanh hoặc chứng minh thu nhập khác.
                </p>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Sẵn Sàng Đăng Ký Vay Tại {city.nameVi}?</h2>
            <p className="text-xl mb-6 opacity-90">
              Kết nối với {city.nearbyLenders}+ tổ chức cho vay được cấp phép tại {city.nameVi}
            </p>
            <Link
              href="/vn/apply"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors mb-4"
            >
              Đăng Ký Ngay - Miễn Phí
            </Link>
            <p className="text-sm text-white/80">
              Không ảnh hưởng điểm tín dụng • Dịch vụ miễn phí 100% • Bảo mật an toàn
            </p>
          </section>
        </div>
      </div>

      <ApplicationFormScript />
      <Footer locale="vi" />
    </>
  )
}
