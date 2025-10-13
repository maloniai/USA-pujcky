import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
  title: 'Đăng Ký Vay Tiền Online - Miễn Phí & Bảo Mật | Loan AI Portal',
  description:
    'Điền form đơn giản để kết nối với tổ chức cho vay được cấp phép tại Việt Nam. Không ảnh hưởng điểm tín dụng. Miễn phí 100%.',
  openGraph: {
    title: 'Đăng Ký Vay Tiền Online - Miễn Phí & Bảo Mật',
    description:
      'Điền form đơn giản để kết nối với tổ chức cho vay được cấp phép tại Việt Nam.',
    url: 'https://loan-platform.com/vn/apply',
    siteName: 'Loan AI Portal',
    locale: 'vi_VN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loan-platform.com/vn/apply',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function VietnamApplyPage() {
  const breadcrumbItems = [
    { name: 'Trang chủ', url: '/', position: 1 },
    { name: 'Việt Nam', url: '/vn', position: 2 },
    { name: 'Đăng ký vay', url: '/vn/apply', position: 3 },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Đăng Ký Vay Tiền Online Việt Nam',
            description:
              'Điền form đơn giản để kết nối với tổ chức cho vay được cấp phép tại Việt Nam',
            url: 'https://loan-platform.com/vn/apply',
            inLanguage: 'vi',
            isPartOf: {
              '@type': 'WebSite',
              name: 'Loan AI Portal',
              url: 'https://loan-platform.com',
            },
          }),
        }}
      />

      <Navigation />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <ResponsiveBreadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Link
              href="/vn"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold"
            >
              <span aria-hidden>←</span>
              Quay lại Việt Nam
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Đăng Ký Vay Tiền Online Tại Việt Nam
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            Hoàn thành form đơn giản dưới đây để kết nối với tổ chức cho vay được cấp phép phù hợp
            với nhu cầu của bạn. Miễn phí và bảo mật 100%.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <strong>Không ảnh hưởng điểm tín dụng</strong>
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <strong>Dịch vụ miễn phí 100%</strong>
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <strong>Bảo mật ngân hàng</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-3">🔒 Cam Kết Bảo Mật</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Thông tin của bạn được bảo vệ bằng mã hóa SSL 256-bit chuẩn ngân hàng. Chúng tôi chỉ
              chia sẻ thông tin với các tổ chức cho vay được cấp phép mà bạn đồng ý kết nối. Không
              bán hoặc chia sẻ dữ liệu cho bên thứ ba không liên quan.
            </p>
          </div>

          {/* Affiliate Form Script */}
          <div
            className="application-form-container bg-white rounded-xl border border-gray-200 p-8 shadow-lg"
            id="loan-application-form"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Form Đăng Ký Vay Tiền
            </h2>
            
            {/* DoAff Affiliate Script */}
            <script
              type="text/javascript"
              src="https://www.doaff.net/publisherScript.js?c=jjo"
              async
            />
            
            <noscript>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <p className="text-gray-800 mb-4">
                  Form đăng ký yêu cầu JavaScript được bật. Vui lòng bật JavaScript trong trình duyệt
                  của bạn để tiếp tục.
                </p>
                <p className="text-gray-600 text-sm">
                  Hoặc liên hệ trực tiếp: <strong>+84 28 1234 5678</strong>
                </p>
              </div>
            </noscript>
          </div>

          {/* Disclosure */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6 text-sm text-gray-600">
            <h3 className="font-bold text-gray-900 mb-3">Thông báo quan trọng:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  <strong>Dịch vụ kết nối:</strong> Loan AI Portal là dịch vụ kết nối, không phải tổ
                  chức cho vay trực tiếp. Chúng tôi kết nối bạn với mạng lưới tổ chức cho vay được
                  cấp phép.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  <strong>Không đảm bảo chấp thuận:</strong> Việc nộp đơn không đảm bảo bạn sẽ được
                  chấp thuận. Quyết định cuối cùng thuộc về tổ chức cho vay dựa trên hồ sơ tín dụng
                  và tiêu chí của họ.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  <strong>Lãi suất thay đổi:</strong> Lãi suất và điều khoản cụ thể phụ thuộc vào tổ
                  chức cho vay, hồ sơ tín dụng và số tiền vay của bạn. Lãi suất tối đa là 20%/năm theo
                  Quyết định 546/2014 của NHNN.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  <strong>Bồi thường:</strong> Chúng tôi nhận được khoản bồi thường từ các tổ chức cho
                  vay khi bạn kết nối qua dịch vụ của chúng tôi. Dịch vụ này hoàn toàn miễn phí đối
                  với người vay.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  <strong>Bảo vệ dữ liệu:</strong> Dữ liệu của bạn được xử lý theo{' '}
                  <Link href="/privacy" className="text-blue-600 hover:underline font-semibold">
                    Chính sách Bảo mật
                  </Link>{' '}
                  của chúng tôi và các quy định về bảo vệ dữ liệu cá nhân của Việt Nam.
                </span>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Duyệt Nhanh</h3>
              <p className="text-gray-600 text-sm">
                Nhận quyết định sơ bộ trong vòng 24-48 giờ từ các tổ chức cho vay
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">An Toàn</h3>
              <p className="text-gray-600 text-sm">
                Mã hóa SSL 256-bit và tuân thủ quy định bảo vệ dữ liệu của Việt Nam
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hỗ Trợ 24/7</h3>
              <p className="text-gray-600 text-sm">
                Đội ngũ hỗ trợ sẵn sàng giải đáp mọi thắc mắc của bạn
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cần Trợ Giúp?</h3>
            <p className="text-gray-700 mb-4">
              Đội ngũ hỗ trợ của chúng tôi sẵn sàng giúp bạn trong suốt quá trình đăng ký.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="tel:+842812345678"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Gọi: +84 28 1234 5678
              </a>
              <a
                href="mailto:info@loan-platform.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email: info@loan-platform.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer locale="vi" />
    </>
  )
}
