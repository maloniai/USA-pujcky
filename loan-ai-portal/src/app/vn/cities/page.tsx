import Link from 'next/link'
import { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import StickyApplyButton from '@/components/sticky-apply-button'
import { vietnamCities } from '@/data/vietnam-cities'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
  title: 'Vay Theo Thành Phố Việt Nam - So Sánh Lãi Suất 2025',
  description:
    'Tìm tổ chức cho vay và lãi suất vay tốt nhất theo thành phố tại Việt Nam. Từ Hà Nội, TP. HCM đến Đà Nẵng và 15+ thành phố khác.',
  alternates: {
    canonical: 'https://loan-platform.com/vn/cities',
  },
}

export default function VietnamCitiesPage() {
  const breadcrumbItems = [
    { name: 'Trang chủ', url: '/', position: 1 },
    { name: 'Việt Nam', url: '/vn', position: 2 },
    { name: 'Thành phố', url: '/vn/cities', position: 3 },
  ]

  // Group cities by region
  const citiesByRegion = vietnamCities.reduce(
    (acc, city) => {
      if (!acc[city.region]) {
        acc[city.region] = {
          regionName: city.regionNameVi,
          regionSlug: city.region,
          cities: [],
        }
      }
      acc[city.region].cities.push(city)
      return acc
    },
    {} as Record<
      string,
      { regionName: string; regionSlug: string; cities: typeof vietnamCities }
    >
  )

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation />
      <StickyApplyButton href="/vn/apply" text="Đăng ký vay" />

      <div className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <ResponsiveBreadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link
              href="/vn"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold"
            >
              <span aria-hidden>←</span>
              Quay lại Việt Nam
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Vay Tiêu Dùng Theo Thành Phố Việt Nam
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Tìm kiếm tổ chức cho vay địa phương, lãi suất cạnh tranh và thông tin thị trường cụ thể
            cho thành phố của bạn. Chúng tôi phục vụ 15+ thành phố lớn trên khắp Việt Nam.
          </p>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {Object.values(citiesByRegion).map(({ regionName, regionSlug, cities }) => (
            <section key={regionSlug} className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-blue-900">Thành phố tại {regionName}</h2>
                <Link
                  href={`/vn/regions/${regionSlug}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                >
                  Xem tổng quan vùng →
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/vn/cities/${regionSlug}/${city.slug}`}
                    className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-1">{city.nameVi}</h3>
                        <p className="text-sm text-gray-600">{city.name}</p>
                      </div>
                      <span className="text-2xl">🏙️</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                      {city.descriptionVi}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Dân số:</span>
                        <strong className="text-blue-900">
                          {city.population.toLocaleString()}
                        </strong>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Vay TB:</span>
                        <strong className="text-green-600">{city.avgLoanAmount}</strong>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tổ chức:</span>
                        <strong className="text-purple-600">{city.nearbyLenders}+</strong>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-blue-600 text-sm font-semibold flex items-center gap-2">
                        Xem lựa chọn vay
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <section className="bg-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Tại Sao Chọn Theo Thành Phố?
            </h2>
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-700 mb-4">
                Mỗi thành phố tại Việt Nam có đặc điểm riêng về thị trường cho vay:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Mật độ tổ chức cho vay:</strong> Thành phố lớn như TP. HCM và Hà Nội có
                  nhiều tổ chức cho vay hơn, dẫn đến lãi suất cạnh tranh hơn
                </li>
                <li>
                  <strong>Lãi suất cạnh tranh:</strong> Nhiều tổ chức cạnh tranh giúp bạn có được lãi
                  suất tốt hơn
                </li>
                <li>
                  <strong>Dịch vụ địa phương:</strong> Hiểu rõ chi phí sinh hoạt và nhu cầu tài chính
                  cụ thể của từng thành phố
                </li>
                <li>
                  <strong>Quy trình nhanh:</strong> Tổ chức cho vay địa phương thường có quy trình
                  duyệt và giải ngân nhanh hơn
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Không Tìm Thấy Thành Phố Của Bạn?</h2>
            <p className="text-xl mb-6 opacity-90">
              Chúng tôi vẫn có thể kết nối bạn với tổ chức cho vay phù hợp
            </p>
            <Link
              href="/vn/apply"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Đăng Ký Ngay - Miễn Phí
            </Link>
            <p className="mt-4 text-sm text-white/80">
              Phục vụ tất cả các tỉnh/thành phố Việt Nam • Miễn phí 100%
            </p>
          </section>
        </div>
      </div>

      <Footer locale="vi" />
    </>
  )
}
