import Link from 'next/link'
import { Metadata } from 'next/app'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import StickyApplyButton from '@/components/sticky-apply-button'
import { vietnamRegions } from '@/data/vietnam-regions'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
  title: 'Vay Theo Vùng Việt Nam - So Sánh Lãi Suất 2025',
  description:
    'Xem quy định vay, lãi suất trung bình và tổ chức cho vay theo từng vùng tại Việt Nam. Từ Hà Nội đến TP. Hồ Chí Minh.',
  alternates: {
    canonical: 'https://loan-platform.com/vn/regions',
  },
}

export default function VietnamRegionsPage() {
  const breadcrumbItems = [
    { name: 'Trang chủ', url: '/', position: 1 },
    { name: 'Việt Nam', url: '/vn', position: 2 },
    { name: 'Vùng', url: '/vn/regions', position: 3 },
  ]

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
            Vay Tiêu Dùng Theo Vùng Việt Nam
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Khám phá quy định vay, mức lãi suất trung bình và tổ chức cho vay có sẵn tại các vùng
            chính của Việt Nam. Mỗi vùng có chính sách cho vay riêng và đặc điểm thị trường địa
            phương.
          </p>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <section className="mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vietnamRegions.map((region) => (
                <Link
                  key={region.slug}
                  href={`/vn/regions/${region.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900 mb-1">{region.nameVi}</h2>
                      <p className="text-sm text-gray-600">{region.name}</p>
                    </div>
                    <span className="text-3xl">📍</span>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">{region.descriptionVi}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Dân số:</span>
                      <strong className="text-blue-900">{region.population}</strong>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Lãi suất TB:</span>
                      <strong className="text-green-600">{region.avgRate}</strong>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Vay tối đa:</span>
                      <strong className="text-purple-600">{region.maxLoanAmount}</strong>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-blue-600 text-sm font-semibold flex items-center gap-2">
                      Xem chi tiết vùng
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          <section className="bg-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Hiểu Về Quy Định Vay Việt Nam
            </h2>
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-700">
                Tất cả các vùng tại Việt Nam đều tuân thủ các quy định chung do Ngân hàng Nhà nước
                Việt Nam (NHNN) ban hành. Tuy nhiên, mỗi vùng có thể có các chương trình cho vay đặc
                thù và mật độ tổ chức cho vay khác nhau:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>
                  <strong>Lãi suất tối đa:</strong> 20%/năm cho tổ chức được cấp phép (Quyết định
                  546/2014 của NHNN)
                </li>
                <li>
                  <strong>Yêu cầu tuổi:</strong> Người vay phải từ 18 tuổi trở lên
                </li>
                <li>
                  <strong>Giấy tờ:</strong> CMND/CCCD hợp lệ và chứng minh thu nhập
                </li>
                <li>
                  <strong>Bảo vệ người tiêu dùng:</strong> Theo Luật Tổ chức tín dụng 2010 (sửa đổi
                  2024)
                </li>
                <li>
                  <strong>Công khai phí:</strong> Tổ chức cho vay phải công khai tất cả phí trước khi
                  vay
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Sẵn Sàng So Sánh Lãi Suất Vay?</h2>
            <p className="text-xl mb-6 opacity-90">
              Kết nối với tổ chức cho vay được cấp phép tại vùng của bạn
            </p>
            <Link
              href="/vn/apply"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Đăng Ký Ngay - Miễn Phí
            </Link>
            <p className="mt-4 text-sm text-white/80">
              Không ảnh hưởng đến điểm tín dụng • Dịch vụ miễn phí 100%
            </p>
          </section>
        </div>
      </div>

      <Footer locale="vi" />
    </>
  )
}
