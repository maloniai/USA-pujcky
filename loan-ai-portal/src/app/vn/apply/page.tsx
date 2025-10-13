import type { Metadata } from 'next'
import VietnamNavigation from '@/components/vietnam/vietnam-navigation'
import VietnamFooter from '@/components/vietnam/vietnam-footer'
import VietnamDisclosure from '@/components/vietnam/vietnam-disclosure'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Đăng Ký Vay Tiêu Dùng – So Sánh Lãi Suất Tốt Nhất | LoansAI Việt Nam',
  description: 'Đăng ký vay tiêu dùng nhanh chóng và an toàn. So sánh lãi suất từ hơn 40 tổ chức tín dụng được NHNN cấp phép. Phê duyệt nhanh, minh bạch hoàn toàn.',
  keywords: 'đăng ký vay, vay tiêu dùng online, vay nhanh, so sánh lãi suất, vay tín chấp việt nam',
  openGraph: {
    title: 'Đăng Ký Vay Tiêu Dùng – So Sánh Lãi Suất Tốt Nhất',
    description: 'Đăng ký vay tiêu dùng an toàn với các tổ chức được NHNN cấp phép. Phê duyệt nhanh, lãi suất cạnh tranh.',
    url: 'https://loansai.com/vn/apply',
    siteName: 'LoansAI Việt Nam',
    locale: 'vi_VN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/vn/apply',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function VietnamApplyPage() {
  // Schema.org structured data for application page
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Đăng Ký Vay Tiêu Dùng Việt Nam',
    description: 'Nộp đơn đăng ký vay tiêu dùng và so sánh ưu đãi từ các tổ chức tín dụng được cấp phép',
    url: 'https://loansai.com/vn/apply',
    inLanguage: 'vi',
    isPartOf: {
      '@type': 'WebSite',
      name: 'LoansAI Việt Nam',
      url: 'https://loansai.com/vn'
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Việt Nam',
        item: 'https://loansai.com/vn'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Đăng ký vay',
        item: 'https://loansai.com/vn/apply'
      }
    ]
  }

  return (
    <>
      {/* Structured Data */}
      <Script id="schema-webpage" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      {/* Affiliate Script from doaff.net */}
      <Script 
        id="affiliate-script"
        src="https://www.doaff.net/publisherScript.js?c=jjo"
        strategy="lazyOnload"
      />

      <VietnamNavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✅ Bảo mật & Miễn phí
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Đăng Ký Vay Tiêu Dùng
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              So sánh ưu đãi từ hơn 40 tổ chức tín dụng được NHNN cấp phép. 
              Miễn phí, nhanh chóng và an toàn.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Quy Trình Đăng Ký Đơn Giản
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">1. Điền thông tin</h3>
                <p className="text-sm text-gray-600">
                  Hoàn tất biểu mẫu đơn giản với thông tin cá nhân và tài chính của bạn
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">2. AI phân tích</h3>
                <p className="text-sm text-gray-600">
                  Hệ thống AI của chúng tôi tìm các tổ chức cho vay phù hợp nhất với bạn
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">3. So sánh ưu đãi</h3>
                <p className="text-sm text-gray-600">
                  Xem và so sánh các ưu đãi vay được cá nhân hóa với lãi suất và điều khoản
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">4. Nhận tiền vay</h3>
                <p className="text-sm text-gray-600">
                  Chọn ưu đãi tốt nhất, hoàn tất hồ sơ và nhận tiền trong 24-72 giờ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl">
                  Bắt Đầu Đăng Ký Ngay
                </CardTitle>
                <p className="text-blue-100 text-sm mt-2">
                  Hoàn thành trong 3-5 phút • Miễn phí 100% • Không ảnh hưởng điểm tín dụng (kiểm tra sơ bộ)
                </p>
              </CardHeader>
              <CardContent className="p-8">
                {/* Application form will be rendered by the affiliate script */}
                <div id="loan-application-form" className="min-h-[400px]">
                  {/* The affiliate script will inject the form here */}
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Đang tải biểu mẫu đăng ký...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Tại Sao Đăng Ký Qua LoansAI?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-3xl">🔒</span>
                    <span>Bảo mật cao</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Dữ liệu của bạn được mã hóa cấp ngân hàng và tuân thủ các quy định về bảo vệ 
                    dữ liệu cá nhân của Việt Nam. Chúng tôi không bao giờ bán thông tin của bạn.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-3xl">⚡</span>
                    <span>Nhanh chóng</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Hoàn tất đăng ký trong 3-5 phút. Nhận kết quả sơ bộ ngay lập tức. 
                    Phê duyệt cuối cùng và giải ngân trong 24-72 giờ.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-3xl">💰</span>
                    <span>Miễn phí hoàn toàn</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Không có phí để sử dụng dịch vụ của chúng tôi. Không có chi phí ẩn. 
                    Bạn chỉ trả cho tổ chức cho vay khi nhận khoản vay.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-3xl">🎯</span>
                    <span>So sánh thông minh</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    AI của chúng tôi phân tích hơn 40 tổ chức cho vay để tìm các ưu đãi tốt nhất 
                    phù hợp với hồ sơ của bạn.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-3xl">✅</span>
                    <span>Được cấp phép</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Tất cả các tổ chức cho vay đều được Ngân hàng Nhà nước Việt Nam cấp phép 
                    và quản lý. An toàn và đáng tin cậy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-3xl">🇻🇳</span>
                    <span>Hỗ trợ tiếng Việt</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Toàn bộ quy trình bằng tiếng Việt. Đội ngũ hỗ trợ khách hàng nói tiếng Việt 
                    sẵn sàng giúp đỡ bạn.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Điều Kiện Cơ Bản Để Đăng Ký
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Yêu Cầu Chung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Công dân Việt Nam hoặc cư trú hợp pháp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Tuổi từ 18-65 tuổi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Có thu nhập ổn định (lương, kinh doanh, tự do)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Có CMND/CCCD còn hiệu lực</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Có tài khoản ngân hàng tại Việt Nam</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Giấy Tờ Cần Thiết</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">📄</span>
                      <span>CMND/CCCD (scan hoặc ảnh chụp)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">📄</span>
                      <span>Giấy xác nhận thu nhập hoặc phiếu lương</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">📄</span>
                      <span>Sao kê tài khoản 3-6 tháng gần nhất</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">📄</span>
                      <span>Hộ khẩu hoặc giấy tờ xác nhận nơi ở (tùy chọn)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">📄</span>
                      <span>Giấy phép kinh doanh (nếu tự kinh doanh)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>💡</span>
                <span>Mẹo để tăng cơ hội được duyệt</span>
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Cung cấp thông tin chính xác và đầy đủ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Có lịch sử tín dụng tốt (không nợ xấu)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Thu nhập đủ để đáp ứng khoản trả hàng tháng</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Giữ tỷ lệ nợ trên thu nhập dưới 40-50%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Cân nhắc có người đồng vay nếu cần số tiền lớn</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Câu Hỏi Thường Gặp Về Đăng Ký
            </h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-lg shadow-md cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 p-6 list-none">
                  <span>Đăng ký có ảnh hưởng đến điểm tín dụng không?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Bước đầu tiên chúng tôi chỉ thực hiện kiểm tra "soft check" không ảnh hưởng đến điểm tín dụng của bạn. 
                    Chỉ khi bạn quyết định chọn một tổ chức cho vay cụ thể và tiếp tục với đơn đăng ký chính thức, 
                    tổ chức đó mới thực hiện "hard check" có thể ảnh hưởng nhẹ đến điểm tín dụng.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-md cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 p-6 list-none">
                  <span>Tôi có phải trả phí gì không?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Không, sử dụng LoansAI hoàn toàn miễn phí. Chúng tôi không tính phí đăng ký, so sánh hoặc 
                    kết nối bạn với các tổ chức cho vay. Chúng tôi được tổ chức cho vay trả hoa hồng nếu bạn 
                    hoàn thành khoản vay, nhưng điều này không ảnh hưởng đến lãi suất hoặc điều khoản bạn nhận được.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-md cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 p-6 list-none">
                  <span>Mất bao lâu để nhận được kết quả?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Sau khi hoàn tất biểu mẫu đăng ký, bạn sẽ nhận được kết quả sơ bộ trong vài phút. 
                    Các ưu đãi vay được cá nhân hóa sẽ hiển thị ngay trên màn hình. Nếu bạn chọn tiếp tục 
                    với một tổ chức cho vay cụ thể, quy trình phê duyệt chính thức thường mất 24-72 giờ, 
                    tùy thuộc vào tổ chức và mức độ phức tạp của hồ sơ.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-md cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 p-6 list-none">
                  <span>Thông tin của tôi có an toàn không?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Tuyệt đối an toàn. Chúng tôi sử dụng mã hóa SSL 256-bit chuẩn ngân hàng để bảo vệ dữ liệu của bạn. 
                    Thông tin cá nhân chỉ được chia sẻ với các tổ chức cho vay bạn chọn và tuân thủ nghiêm ngặt 
                    các quy định về bảo vệ dữ liệu cá nhân của Việt Nam. Chúng tôi không bao giờ bán hoặc chia sẻ 
                    thông tin của bạn với bên thứ ba không liên quan.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-lg shadow-md cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 p-6 list-none">
                  <span>Tôi có bắt buộc phải chấp nhận ưu đãi không?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Không, hoàn toàn không có nghĩa vụ. Sau khi xem các ưu đãi vay được so sánh, bạn có thể 
                    tự do chọn ưu đãi nào bạn muốn theo đuổi, hoặc không chọn ưu đãi nào cả. Không có áp lực, 
                    không có phí hủy, không có cam kết.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Được Tin Tưởng & Quản Lý
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-3">🏦</div>
                <h3 className="font-semibold text-gray-900 mb-2">Ngân Hàng Nhà Nước</h3>
                <p className="text-sm text-gray-600">
                  Tất cả tổ chức cho vay được NHNN cấp phép và giám sát
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-semibold text-gray-900 mb-2">Mã Hóa SSL</h3>
                <p className="text-sm text-gray-600">
                  Bảo mật cấp ngân hàng với mã hóa 256-bit
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🇻🇳</div>
                <h3 className="font-semibold text-gray-900 mb-2">Tuân Thủ Pháp Luật</h3>
                <p className="text-sm text-gray-600">
                  Tuân thủ đầy đủ các quy định tài chính Việt Nam
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <VietnamDisclosure />
      </main>

      <VietnamFooter />
    </>
  )
}
