import Link from 'next/link'
import { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ApplicationFormScript from '@/components/application-form-script'
import StickyApplyButton from '@/components/sticky-apply-button'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vay Tiền Online Việt Nam - So Sánh Lãi Suất 2025',
  description:
    'So sánh lãi suất vay tiêu dùng từ các tổ chức tài chính được cấp phép tại Việt Nam. Hỗ trợ AI, duyệt nhanh, lãi suất từ 10%/năm. Phục vụ 5 vùng và 15+ thành phố.',
  openGraph: {
    title: 'Vay Tiền Online Việt Nam - So Sánh Lãi Suất 2025',
    description:
      'So sánh lãi suất vay tiêu dùng từ các tổ chức tài chính được cấp phép tại Việt Nam.',
    url: 'https://loan-platform.com/vn',
    siteName: 'Loan AI Portal',
    locale: 'vi_VN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loan-platform.com/vn',
  },
}

export default function VietnamHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FinancialService',
            name: 'Loan AI Portal Vietnam',
            description:
              'So sánh và tìm kiếm khoản vay tiêu dùng tốt nhất tại Việt Nam với công nghệ AI',
            url: 'https://loan-platform.com/vn',
            areaServed: {
              '@type': 'Country',
              name: 'Vietnam',
            },
            availableLanguage: 'vi',
            serviceType: 'Personal Loan Matching',
            provider: {
              '@type': 'FinancialService',
              name: 'Loan AI Portal',
            },
          }),
        }}
      />
      <Navigation />
      <StickyApplyButton href="/vn/apply" text="Đăng ký vay" />
      
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-b border-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              🇻🇳 Chương trình Việt Nam
            </p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">
              So Sánh Vay Tiêu Dùng Thông Minh Cho Mọi Vùng
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-700 md:text-xl">
              Xem xét quy định vay 2025, mức lãi suất chuẩn và khả năng cho vay trên 5 vùng chính.
              Truy cập trực tiếp vào hướng dẫn chi tiết theo vùng và thành phố, hoặc trao đổi với
              chuyên gia tư vấn vay của chúng tôi để nhận đề xuất phù hợp.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/vn/regions"
                className="group rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
              >
                <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                  🏛️
                </span>
                <h2 className="text-xl font-semibold text-blue-900">Quy định vay theo vùng</h2>
                <p className="mt-2 text-sm text-gray-600">
                  So sánh mức lãi suất tối đa, số tiền vay tối đa và hướng dẫn tuân thủ ở mọi vùng.
                </p>
              </Link>
              <Link
                href="/vn/cities"
                className="group rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
              >
                <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                  🌆
                </span>
                <h2 className="text-xl font-semibold text-blue-900">Thông tin thành phố</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Truy cập danh sách tổ chức cho vay địa phương, điều chỉnh chi phí sinh hoạt và
                  bảo vệ người vay tại 15+ thành phố lớn.
                </p>
              </Link>
              <Link
                href="/vn/apply"
                className="group rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
              >
                <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                  📝
                </span>
                <h2 className="text-xl font-semibold text-blue-900">Đăng ký vay ngay</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Điền form đơn giản để kết nối với tổ chức cho vay phù hợp. Miễn phí và bảo mật.
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* How to use */}
        <div className="mx-auto max-w-6xl px-4 py-16">
          <section className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-blue-900">
                Cách sử dụng trung tâm này
              </h2>
              <ol className="mt-4 space-y-4 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-blue-100 text-center text-sm font-semibold text-blue-700">
                    1
                  </span>
                  <span>
                    Bắt đầu với <strong>quy định theo vùng</strong> để hiểu về bảo vệ người vay và
                    ngưỡng lãi suất.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-blue-100 text-center text-sm font-semibold text-blue-700">
                    2
                  </span>
                  <span>
                    Tìm hiểu <strong>hồ sơ thành phố</strong> để biết khả năng cho vay, điều chỉnh
                    chi phí sinh hoạt và ưu đãi địa phương.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-blue-100 text-center text-sm font-semibold text-blue-700">
                    3
                  </span>
                  <span>
                    Sử dụng <strong>form đăng ký</strong> để kết nối với tổ chức cho vay được cấp
                    phép phù hợp với hồ sơ của bạn.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-blue-100 text-center text-sm font-semibold text-blue-700">
                    4
                  </span>
                  <span>
                    Sử dụng AI chat ở góc màn hình để có câu trả lời nhanh về xu hướng lãi suất, phạm
                    vi cho vay hoặc danh sách tài liệu.
                  </span>
                </li>
              </ol>
            </div>
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-inner">
              <h2 className="text-xl font-semibold text-blue-900">Cần trao đổi trực tiếp?</h2>
              <p className="mt-2 text-sm text-blue-900/80">
                Hướng dẫn viên cho vay có mặt 8 giờ sáng – 8 giờ tối hàng ngày tại{' '}
                <strong>+84 28 1234 5678</strong> hoặc qua trung tâm chat của chúng tôi.
              </p>
              <p className="mt-4 text-sm text-blue-900/70">
                Ưu tiên email? Viết đến{' '}
                <a href="mailto:info@loan-platform.com" className="underline decoration-blue-400">
                  info@loan-platform.com
                </a>{' '}
                cho các câu hỏi chung hoặc{' '}
                <a
                  href="mailto:compliance@loan-platform.com"
                  className="underline decoration-blue-400"
                >
                  compliance@loan-platform.com
                </a>{' '}
                cho vấn đề tuân thủ.
              </p>
              <Link
                href="/vn/contact"
                className="mt-6 inline-flex items-center justify-center rounded-lg border border-blue-300 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
              >
                Mở trung tâm hỗ trợ
              </Link>
            </div>
          </section>
        </div>

        {/* Main Content */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Vay Tiêu Dùng Nhanh Với Hỗ Trợ AI
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-4 font-medium">
                Nhận thẩm định trước trong 2 phút và kiểm tra lãi suất với nền tảng AI tiên tiến của
                chúng tôi. So sánh đề xuất từ các tổ chức cho vay được cấp phép tại Việt Nam.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                Cho dù bạn cần vay hợp nhất nợ, tiền mặt khẩn cấp hay tài chính cải tạo nhà, công
                nghệ AI của chúng tôi kết nối bạn với tổ chức cho vay tốt nhất cho hồ sơ tín dụng
                của bạn.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-gray-600 mb-8">
                <span className="flex items-center gap-1">
                  <span className="text-2xl">⚡</span>
                  <strong>Thẩm định 2 phút</strong>
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-2xl">💰</span>
                  <strong>₫10tr - ₫500tr</strong>
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-2xl">📊</span>
                  <strong>Mọi hồ sơ tín dụng</strong>
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-2xl">🔒</span>
                  <strong>Bảo mật ngân hàng</strong>
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-2xl">🤝</span>
                  <strong>Tổ chức được cấp phép</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Cách Hoạt Động Của Nền Tảng Vay AI
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">1. Đơn Nhanh</h3>
                <p className="text-gray-700">
                  Hoàn thành đơn đăng ký bảo mật trực tuyến chỉ trong 2 phút. Cung cấp thông tin cơ
                  bản về thu nhập, việc làm và số tiền vay mong muốn mà không cần giấy tờ.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">2. Ghép Đôi AI</h3>
                <p className="text-gray-700">
                  AI của chúng tôi phân tích hơn 200 điểm dữ liệu để kết nối bạn với tổ chức cho vay
                  có khả năng chấp thuận cao nhất cho hồ sơ của bạn, cân bằng lãi suất, thời hạn và
                  tốc độ giải ngân.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💵</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">3. Nhận Tiền</h3>
                <p className="text-gray-700">
                  Xem xét đề xuất cá nhân, chọn lãi suất tốt nhất và nhận tiền nhanh chóng sau khi
                  hoàn tất xác minh cuối cùng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
              Tại Sao Chọn Loan AI Portal?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="text-3xl">⚡</span>
                    Quy Trình Nhanh
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Hoàn thành đơn đăng ký vay trong 2 phút với quy trình đơn giản. Nhận đề xuất
                    thẩm định trước từ nhiều tổ chức cho vay.
                  </p>
                  <Link href="/vn/apply">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Đăng ký ngay - Miễn phí
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="text-3xl">🤖</span>
                    Ghép Đôi AI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Công nghệ AI độc quyền của chúng tôi phân tích hơn 200 điểm dữ liệu để kết nối
                    bạn với đề xuất vay tốt nhất, cải thiện tỷ lệ chấp thuận và giúp bạn có lãi suất
                    tốt hơn.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="text-3xl">🗺️</span>
                    Thông Tin Theo Vùng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Truy cập yêu cầu vay toàn diện, quy định lãi suất và tổ chức cho vay có sẵn đặc
                    thù cho vùng của bạn. Xem giới hạn vay, phạm vi lãi suất và bảo vệ người tiêu
                    dùng.
                  </p>
                  <Link href="/vn/regions">
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      Duyệt Vùng
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4 pb-16">
            <div className="application-section max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
                Kiểm Tra Lãi Suất Vay Trong 2 Phút
              </h2>
              <p className="text-center text-gray-700 mb-4 max-w-3xl mx-auto text-lg">
                Kết nối với đề xuất vay tiêu dùng tốt nhất từ mạng lưới tổ chức cho vay được cấp
                phép của chúng tôi. <strong>Không ảnh hưởng đến điểm tín dụng</strong> khi kiểm tra
                lãi suất.
              </p>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Cho dù bạn cần vay hợp nhất nợ, vay khẩn cấp, tài chính cải tạo nhà hay tiền mặt cho
                mọi mục đích, AI của chúng tôi tìm ra lựa chọn tốt nhất cho bạn.
              </p>
              <ApplicationFormScript />
              <p className="mt-4 text-xs text-gray-500 text-center max-w-3xl mx-auto">
                Loan AI Portal kết nối yêu cầu của bạn một cách bảo mật với các tổ chức cho vay đối
                tác được cấp phép. Chúng tôi là dịch vụ kết nối, không phải tổ chức cho vay trực
                tiếp. Dữ liệu của bạn được bảo vệ theo{' '}
                <Link
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Chính sách Bảo mật
                </Link>{' '}
                của chúng tôi.
              </p>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="bg-white">
          <div className="container mx-auto px-4 pb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
              Các Loại Vay Có Sẵn
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">💳 Vay Hợp Nhất Nợ</h3>
                <p className="text-gray-600 text-sm">
                  Gộp nhiều khoản nợ lãi suất cao thành một khoản thanh toán với lãi suất thấp hơn.
                  Tiết kiệm tiền lãi và đơn giản hóa tài chính. Lãi suất thông thường: 12-20%/năm.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🏠 Vay Sửa Chữa Nhà</h3>
                <p className="text-gray-600 text-sm">
                  Tài trợ cải tạo, sửa chữa hoặc nâng cấp mà không cần thế chấp. Số tiền vay lên đến
                  ₫500 triệu. Không yêu cầu tài sản thế chấp cho người vay đủ điều kiện.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🚨 Vay Khẩn Cấp</h3>
                <p className="text-gray-600 text-sm">
                  Tài trợ nhanh cho chi phí bất ngờ như hóa đơn y tế, sửa xe hoặc nhu cầu khẩn cấp.
                  Quyết định nhanh có sẵn với các tổ chức cho vay tham gia.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🏥 Vay Chi Phí Y Tế</h3>
                <p className="text-gray-600 text-sm">
                  Chi trả chi phí chăm sóc sức khỏe, thủ thuật nha khoa hoặc điều trị y tế. Điều
                  khoản thanh toán linh hoạt từ 12-60 tháng. Không có phí trả trước hoặc phí ẩn.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">💍 Vay Đám Cưới</h3>
                <p className="text-gray-600 text-sm">
                  Tài trợ ngày đặc biệt của bạn mà không cần dùng hết tiết kiệm. Lãi suất cạnh tranh
                  cho người vay đủ điều kiện. Vay từ ₫30 triệu đến ₫300 triệu.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🎓 Vay Học Tập</h3>
                <p className="text-gray-600 text-sm">
                  Tài trợ khóa học, chứng chỉ hoặc phát triển nghề nghiệp. Đầu tư vào tương lai của
                  bạn với lựa chọn hoàn trả linh hoạt. Xem xét mọi loại hồ sơ tín dụng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl text-center text-blue-900 mb-8">Câu Hỏi Thường Gặp</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Nhận câu trả lời ngay cho các câu hỏi phổ biến nhất về vay tiêu dùng, lãi suất, yêu
              cầu chấp thuận và quy trình ghép đôi AI của chúng tôi.
            </p>
            <div className="max-w-4xl mx-auto space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Điều kiện để vay tiền là gì?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Người vay phải từ 18 tuổi trở lên với CMND/CCCD hợp lệ và chứng minh thu nhập. Các
                  tổ chức cho vay được cấp phép sẽ đánh giá hồ sơ tín dụng, thu nhập ổn định và tỷ
                  lệ nợ trên thu nhập. Quy trình AI của chúng tôi giúp kết nối bạn với tổ chức cho
                  vay phù hợp nhất với hồ sơ của bạn.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Lãi suất vay thường là bao nhiêu?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Lãi suất thông thường dao động từ 10% đến 20%/năm tùy thuộc vào hồ sơ tín dụng và
                  tổ chức cho vay. Lãi suất tối đa được Ngân hàng Nhà nước Việt Nam quy định là
                  20%/năm cho các tổ chức được cấp phép theo Quyết định 546/2014.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Tôi có thể vay tối đa bao nhiêu tiền?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Số tiền vay tối đa phụ thuộc vào thu nhập, hồ sơ tín dụng và chính sách của tổ
                  chức cho vay. Thông thường dao động từ ₫10 triệu đến ₫500 triệu. Tại các thành phố
                  lớn như TP. Hồ Chí Minh và Hà Nội, một số tổ chức có thể cho vay lên đến ₫1 tỷ cho
                  khách hàng đủ điều kiện.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Mất bao lâu để nhận được tiền vay?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Thời gian giải ngân khác nhau tùy theo tổ chức cho vay. Một số cung cấp giải ngân
                  cùng ngày hoặc trong vòng 24-48 giờ sau khi hoàn tất xác minh. Hầu hết cung cấp
                  giải ngân trong vòng 3-7 ngày làm việc qua chuyển khoản trực tiếp.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Có tính phí khi sử dụng dịch vụ ghép đôi của bạn không?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Dịch vụ của chúng tôi hoàn toàn miễn phí cho người vay. Các tổ chức cho vay riêng
                  lẻ có thể tính phí phát sinh hoặc phí trả chậm; tất cả các khoản phí được công bố
                  trước khi bạn chấp nhận bất kỳ đề xuất nào.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  Tôi cần chuẩn bị những giấy tờ gì?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Ghép đôi ban đầu chỉ yêu cầu thông tin cơ bản. Nếu bạn tiếp tục với tổ chức cho
                  vay, bạn thường sẽ cần CMND/CCCD, chứng minh thu nhập, chứng minh địa chỉ, số bảo
                  hiểm xã hội và chi tiết tài khoản ngân hàng. Người làm tự do có thể cần tài liệu bổ
                  sung.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Regulations */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
              Bảo Vệ Người Vay Việt Nam
            </h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              Quy định chính của Ngân hàng Nhà nước Việt Nam bảo vệ người vay khỏi lãi suất cao và
              thực hành cho vay không công bằng.
            </p>
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-md">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600" aria-hidden>
                    ✓
                  </span>
                  <span className="text-gray-700">
                    <strong>Lãi suất tối đa:</strong> 20%/năm cho tổ chức được cấp phép theo Quyết
                    định 546/2014 của NHNN
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600" aria-hidden>
                    ✓
                  </span>
                  <span className="text-gray-700">
                    <strong>Yêu cầu người vay:</strong> Phải từ 18 tuổi trở lên với CMND/CCCD hợp lệ
                    và chứng minh thu nhập
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600" aria-hidden>
                    ✓
                  </span>
                  <span className="text-gray-700">
                    <strong>Công khai phí:</strong> Tổ chức cho vay được cấp phép phải công khai mọi
                    phí trước
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600" aria-hidden>
                    ✓
                  </span>
                  <span className="text-gray-700">
                    <strong>Bảo vệ người tiêu dùng:</strong> Theo Luật Tổ chức tín dụng 2010 và sửa
                    đổi 2024
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600" aria-hidden>
                    ✓
                  </span>
                  <span className="text-gray-700">
                    <strong>Quyền trả nợ trước hạn:</strong> Với phí được quy định rõ ràng
                  </span>
                </li>
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
            </div>
          </div>
        </section>
      </main>
      <Footer locale="vi" />
    </>
  )
}
