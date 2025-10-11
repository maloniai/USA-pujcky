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
  vietnamRegions,
  getVietnamRegionBySlug,
  getAllVietnamRegionSlugs,
} from '@/data/vietnam-regions'
import { getVietnamCitiesByRegion } from '@/data/vietnam-cities'

interface PageProps {
  params: {
    region: string
  }
}

// Generate static params for all regions
export async function generateStaticParams() {
  return getAllVietnamRegionSlugs()
}

// Generate metadata for each region page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const regionData = getVietnamRegionBySlug(params.region)

  if (!regionData) {
    return {
      title: 'Không Tìm Thấy Vùng',
    }
  }

  const title = `Vay ${regionData.nameVi} - Lãi Suất & Yêu Cầu 2025`
  const description = `So sánh lãi suất vay, yêu cầu và tổ chức cho vay hàng đầu tại ${regionData.nameVi}. Lãi suất TB ${regionData.avgRate}, số tiền vay lên đến ${regionData.maxLoanAmount}. Dân số ${regionData.population}.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://loan-platform.com/vn/regions/${params.region}`,
      siteName: 'Loan AI Portal',
      locale: 'vi_VN',
      type: 'website',
    },
    alternates: {
      canonical: `https://loan-platform.com/vn/regions/${params.region}`,
    },
  }
}

export default function VietnamRegionPage({ params }: PageProps) {
  const regionData = getVietnamRegionBySlug(params.region)

  if (!regionData) {
    notFound()
  }

  // Get cities in this region
  const regionCities = getVietnamCitiesByRegion(params.region)

  // Breadcrumb configuration
  const breadcrumbItems = [
    { name: 'Trang chủ', url: '/', position: 1 },
    { name: 'Việt Nam', url: '/vn', position: 2 },
    { name: 'Tất cả vùng', url: '/vn/regions', position: 3 },
    { name: regionData.nameVi, url: `/vn/regions/${params.region}`, position: 4 },
  ]

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Lãi suất vay tại ${regionData.nameVi} là bao nhiêu?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Lãi suất vay trung bình tại ${regionData.nameVi} dao động ${regionData.avgRate}. Lãi suất tối đa được quy định là 20%/năm cho các tổ chức cho vay được cấp phép theo Quyết định 546/2014 của Ngân hàng Nhà nước Việt Nam.`,
        },
      },
      {
        '@type': 'Question',
        name: `Có thể vay tối đa bao nhiêu tại ${regionData.nameVi}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Số tiền vay tối đa tại ${regionData.nameVi} có thể lên đến ${regionData.maxLoanAmount} tùy thuộc vào hồ sơ tín dụng và thu nhập của bạn. Số tiền vay trung bình là ${regionData.avgLoanAmount}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Điều kiện vay tại ${regionData.nameVi} là gì?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Để vay tại ${regionData.nameVi}, bạn phải từ 18 tuổi trở lên, có CMND/CCCD hợp lệ, chứng minh thu nhập ổn định và cư trú tại Việt Nam. Các tổ chức cho vay sẽ đánh giá hồ sơ tín dụng và khả năng trả nợ của bạn.`,
        },
      },
    ],
  }

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Navigation />
      <StickyApplyButton href="/vn/apply" text="Đăng ký vay" />

      {/* Visual Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <ResponsiveBreadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link
              href="/vn/regions"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold"
            >
              <span aria-hidden>←</span>
              Quay lại tất cả vùng
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-5xl font-bold text-blue-900">Vay Tiêu Dùng {regionData.nameVi}</h1>
            <span className="text-4xl">📍</span>
          </div>
          <p className="text-xl text-gray-700 mb-4 max-w-3xl">{regionData.descriptionVi}</p>
          <div className="flex flex-wrap gap-4 text-lg">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Dân số:</span>{' '}
              <strong className="text-blue-900">{regionData.population}</strong>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Lãi suất TB:</span>{' '}
              <strong className="text-green-600">{regionData.avgRate}</strong>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Vay tối đa:</span>{' '}
              <strong className="text-purple-600">{regionData.maxLoanAmount}</strong>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Vay TB:</span>{' '}
              <strong className="text-blue-600">{regionData.avgLoanAmount}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Quick Stats */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Tổng Quan Vay {regionData.nameVi}
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <p className="text-gray-700 mb-6 leading-relaxed">{regionData.descriptionVi}</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="text-sm text-gray-600 mb-2">Số tiền vay trung bình</div>
                  <div className="text-2xl font-bold text-blue-900">{regionData.avgLoanAmount}</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="text-sm text-gray-600 mb-2">Lãi suất trung bình</div>
                  <div className="text-2xl font-bold text-green-600">{regionData.avgRate}</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-sm text-gray-600 mb-2">Số tiền vay tối đa</div>
                  <div className="text-2xl font-bold text-purple-600">
                    {regionData.maxLoanAmount}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Regulations */}
          <section className="mb-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Quy Định Bảo Vệ Người Vay Tại {regionData.nameVi}
            </h2>
            <p className="text-gray-700 mb-4">
              Các quy định chính bảo vệ người vay khi vay tiền tại {regionData.nameVi}:
            </p>
            <ul className="space-y-3">
              {regionData.regulationsVi.map((regulation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600" aria-hidden>
                    ✓
                  </span>
                  <span className="text-gray-700">{regulation}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              Nguồn: Ngân hàng Nhà nước Việt Nam (NHNN) –{' '}
              <a
                href="https://www.sbv.gov.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                sbv.gov.vn
              </a>
            </p>
          </section>

          {/* Cities in this Region */}
          {regionCities.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Vay Tại Các Thành Phố {regionData.nameVi}
              </h2>
              <p className="text-gray-700 mb-6">
                Khám phá các lựa chọn vay tiêu dùng tại các thành phố lớn của {regionData.nameVi}.
                Mỗi trang thành phố cung cấp thông tin thị trường địa phương, lựa chọn tổ chức cho
                vay và thông tin cụ thể theo thành phố.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/vn/cities/${params.region}/${city.slug}`}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-blue-400"
                  >
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{city.nameVi}</h3>
                    <p className="text-sm text-gray-600 mb-1">{city.name}</p>
                    <div className="text-sm text-gray-600 mb-3">
                      Dân số: {city.population.toLocaleString()}
                    </div>
                    <div className="space-y-1 text-sm mb-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Vay TB:</span>
                        <strong className="text-blue-900">{city.avgLoanAmount}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lãi suất:</span>
                        <strong className="text-green-600">{city.avgRate}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tổ chức:</span>
                        <strong className="text-purple-600">{city.nearbyLenders}+</strong>
                      </div>
                    </div>
                    <div className="text-blue-600 text-sm font-semibold flex items-center gap-2">
                      Xem lựa chọn vay
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

          {/* Popular Cities (if no cities data available) */}
          {regionCities.length === 0 && regionData.popularCities.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Thành Phố Phổ Biến Tại {regionData.nameVi}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {regionData.popularCities.map((city) => (
                  <div
                    key={city}
                    className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
                  >
                    <div className="text-lg font-semibold text-blue-900">{city}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* How to Apply */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Cách Đăng Ký Vay Tại {regionData.nameVi}
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Kiểm tra hồ sơ tín dụng
                    </h3>
                    <p className="text-gray-700">
                      Xem xét báo cáo và điểm tín dụng của bạn. Tại {regionData.nameVi}, các tổ chức
                      cho vay thường yêu cầu hồ sơ tín dụng tốt và thu nhập ổn định để chấp thuận.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">So sánh tổ chức cho vay</h3>
                    <p className="text-gray-700">
                      So sánh lãi suất, điều khoản và phí từ nhiều tổ chức cho vay tại{' '}
                      {regionData.nameVi}. Xem xét cả ngân hàng quốc gia và tổ chức tài chính địa
                      phương.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Chuẩn bị giấy tờ</h3>
                    <p className="text-gray-700">
                      Chuẩn bị chứng minh thu nhập, xác minh việc làm, chứng minh cư trú tại{' '}
                      {regionData.nameVi} và giấy tờ nhận dạng.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Nộp đơn đăng ký</h3>
                    <p className="text-gray-700">
                      Hoàn thành đơn đăng ký trực tuyến hoặc trực tiếp. Hầu hết các tổ chức cho vay
                      cung cấp quyết định nhanh cho cư dân {regionData.nameVi}.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Application Form */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Sẵn Sàng Tìm Khoản Vay Tại {regionData.nameVi}?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                So sánh lãi suất từ tổ chức cho vay hàng đầu phục vụ cư dân {regionData.nameVi}
              </p>
              <Link
                href="/vn/apply"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors mb-4"
              >
                So Sánh Đề Xuất Vay
              </Link>
              <p className="text-sm text-white/80">
                Dịch vụ miễn phí • Không ảnh hưởng điểm tín dụng • Bảo mật 100%
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Câu Hỏi Thường Gặp Về Vay {regionData.nameVi}
            </h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Lãi suất vay tại {regionData.nameVi} là bao nhiêu?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Lãi suất vay trung bình tại {regionData.nameVi} dao động {regionData.avgRate}. Lãi
                  suất tối đa được quy định là 20%/năm cho các tổ chức cho vay được cấp phép theo
                  Quyết định 546/2014 của Ngân hàng Nhà nước Việt Nam. Lãi suất cụ thể phụ thuộc vào
                  hồ sơ tín dụng, thu nhập và chính sách của từng tổ chức cho vay.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Có thể vay tối đa bao nhiêu tại {regionData.nameVi}?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Số tiền vay tối đa tại {regionData.nameVi} có thể lên đến {regionData.maxLoanAmount}{' '}
                  tùy thuộc vào hồ sơ tín dụng và thu nhập của bạn. Số tiền vay trung bình là{' '}
                  {regionData.avgLoanAmount}. Các tổ chức cho vay sẽ đánh giá khả năng trả nợ và tỷ lệ
                  nợ trên thu nhập của bạn để xác định số tiền vay phù hợp.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Điều kiện vay tại {regionData.nameVi} là gì?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Để vay tại {regionData.nameVi}, bạn phải từ 18 tuổi trở lên, có CMND/CCCD hợp lệ,
                  chứng minh thu nhập ổn định và cư trú tại Việt Nam. Các tổ chức cho vay sẽ đánh giá
                  hồ sơ tín dụng, thu nhập hàng tháng, tình trạng việc làm và tỷ lệ nợ hiện tại của
                  bạn. Một số tổ chức có thể yêu cầu chứng minh cư trú tại {regionData.nameVi}.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Mất bao lâu để được duyệt vay tại {regionData.nameVi}?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Thời gian phê duyệt khác nhau tùy theo tổ chức cho vay. Nhiều tổ chức tại{' '}
                  {regionData.nameVi} cung cấp quyết định sơ bộ trong vòng 24-48 giờ. Sau khi được
                  chấp thuận, tiền có thể được giải ngân trong vòng 3-7 ngày làm việc sau khi hoàn tất
                  xác minh giấy tờ. Một số tổ chức cho vay cung cấp giải ngân cùng ngày cho khách hàng
                  đủ điều kiện.
                </p>
              </details>
            </div>
          </section>
        </div>
      </div>

      <ApplicationFormScript />
      <Footer locale="vi" />
    </>
  )
}
