import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import VietnamNavigation from '@/components/vietnam/vietnam-navigation'
import VietnamFooter from '@/components/vietnam/vietnam-footer'
import VietnamDisclosure from '@/components/vietnam/vietnam-disclosure'
import VietnamFAQ from '@/components/vietnam/vietnam-faq'
import StickyApplyButton from '@/components/vietnam/sticky-apply-button'
import { vietnamCities } from '@/data/cities/countries/vietnam'
import { CollectionPageSchema } from '@/components/seo/collection-page-schema'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Vay Tiêu Dùng Việt Nam 2025 – So Sánh Lãi Suất Ngân Hàng',
  description: 'So sánh vay tiêu dùng từ các tổ chức tín dụng được Ngân hàng Nhà nước cấp phép. Lãi suất cạnh tranh, phê duyệt nhanh, minh bạch hoàn toàn. Tìm ưu đãi tốt nhất tại Việt Nam.',
  keywords: 'vay tiêu dùng, vay tín chấp, vay ngân hàng, so sánh lãi suất, vay nhanh, vay online việt nam, NHNN',
  openGraph: {
    title: 'Vay Tiêu Dùng Việt Nam – So Sánh Ưu Đãi Tổ Chức Tín Dụng',
    description: 'Nền tảng so sánh vay tiêu dùng tại Việt Nam. Tổ chức tín dụng được cấp phép, minh bạch hoàn toàn, hỗ trợ tiếng Việt.',
    url: 'https://loansai.com/vn',
    siteName: 'LoansAI Việt Nam',
    locale: 'vi_VN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/vn',
  },
}

const faqItems = [
  {
    question: 'Lãi suất vay tiêu dùng ở Việt Nam là bao nhiêu?',
    answer: 'Lãi suất vay tiêu dùng dao động từ 10-27% mỗi năm tùy thuộc vào tổ chức cho vay, số tiền vay, thời hạn và hồ sơ tín dụng của bạn. Ngân hàng thương mại thường có lãi suất thấp hơn (10-18%/năm) so với công ty tài chính (18-27%/năm). Ngân hàng Nhà nước quy định trần lãi suất để bảo vệ người vay. Các ngân hàng lớn như Vietcombank, VietinBank, BIDV thường cung cấp lãi suất ưu đãi cho khách hàng có thu nhập ổn định và lịch sử tín dụng tốt.'
  },
  {
    question: 'Tôi có thể nhận tiền vay sau bao lâu khi được duyệt?',
    answer: 'Thời gian giải ngân phụ thuộc vào tổ chức cho vay và loại hình vay. Vay online qua ứng dụng ngân hàng có thể được duyệt trong 24-48 giờ và tiền được chuyển trực tiếp vào tài khoản. Vay tại ngân hàng truyền thống mất 3-7 ngày làm việc. Một số công ty tài chính như FE Credit, Home Credit có thể giải ngân trong ngày nếu hồ sơ đầy đủ. Hồ sơ hoàn chỉnh và chính xác sẽ giúp rút ngắn thời gian xử lý.'
  },
  {
    question: 'Tôi cần chuẩn bị giấy tờ gì để vay tiêu dùng?',
    answer: 'Giấy tờ thường cần bao gồm: CMND/CCCD còn hiệu lực, giấy xác nhận thu nhập (phiếu lương, hợp đồng lao động), sao kê tài khoản ngân hàng 3-6 tháng gần nhất, hộ khẩu hoặc tạm trú, và đơn đề nghị vay. Nếu vay số tiền lớn trên 100 triệu đồng, ngân hàng có thể yêu cầu tài sản đảm bảo hoặc người đồng vay. Người tự do, kinh doanh cần có giấy phép kinh doanh và báo cáo tài chính. Mỗi ngân hàng có yêu cầu cụ thể nên nên kiểm tra trước khi nộp hồ sơ.'
  },
  {
    question: 'Tôi có thể vay được không nếu có lịch sử tín dụng xấu?',
    answer: 'Có thể, nhưng khó khăn hơn và điều kiện không thuận lợi. Trung tâm Thông tin Tín dụng (CIC) của Ngân hàng Nhà nước lưu trữ lịch sử tín dụng của bạn. Nếu bạn có nợ xấu nhóm 3-5 hoặc bị đưa vào danh sách đen, hầu hết ngân hàng sẽ từ chối. Tuy nhiên, một số công ty tài chính chấp nhận cho vay với lãi suất cao hơn và hạn mức thấp hơn. Cách tốt nhất là thanh toán hết nợ cũ, cải thiện điểm tín dụng bằng cách trả đúng hạn và duy trì hành vi tài chính có trách nhiệm ít nhất 6-12 tháng trước khi vay mới.'
  },
  {
    question: 'Quyền lợi của tôi khi vay tiêu dùng tại Việt Nam là gì?',
    answer: 'Bạn có quyền: nhận thông tin đầy đủ, rõ ràng về lãi suất, phí và điều khoản trước khi ký; được giải thích bằng tiếng Việt; trả nợ trước hạn (có thể bị tính phí tối đa 1-3% số dư gốc còn lại tùy theo quy định của từng ngân hàng); khiếu nại nếu có hành vi thu nợ không đúng pháp luật; bảo mật thông tin cá nhân theo Luật An ninh mạng và Nghị định về Bảo vệ dữ liệu cá nhân. Mọi khoản vay phải tuân thủ quy định của Ngân hàng Nhà nước về trần lãi suất và các điều kiện bảo vệ người tiêu dùng.'
  }
]

export default function VietnamHubPage() {
  // Featured cities from 3 regions
  const featuredCities = vietnamCities.slice(0, 9)

  // Group cities by region
  const citiesByRegion = vietnamCities.reduce((acc, city) => {
    if (!acc[city.regionVi]) {
      acc[city.regionVi] = []
    }
    acc[city.regionVi].push(city)
    return acc
  }, {} as Record<string, typeof vietnamCities>)

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI Việt Nam - So Sánh Vay Tiêu Dùng',
    description: 'Nền tảng so sánh vay tiêu dùng tại Việt Nam với các tổ chức tín dụng được Ngân hàng Nhà nước cấp phép',
    url: 'https://loansai.com/vn',
    areaServed: {
      '@type': 'Country',
      name: 'Việt Nam'
    },
    availableLanguage: 'vi',
    serviceType: 'So Sánh Vay Tiêu Dùng',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI',
      logo: 'https://loansai.com/logo.png'
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
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Vay Tiêu Dùng Việt Nam',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Vay Tín Chấp',
          description: 'Vay không cần tài sản đảm bảo, dựa trên thu nhập và lịch sử tín dụng'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Vay Mua Xe Máy',
          description: 'Trả góp xe máy với lãi suất ưu đãi từ các ngân hàng và công ty tài chính'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'FinancialProduct',
          name: 'Vay Học Tập',
          description: 'Hỗ trợ tài chính cho học sinh, sinh viên theo đuổi giáo dục'
        }
      }
    ]
  }

  return (
    <>
      {/* CollectionPage Schema for Hub */}
      <CollectionPageSchema
        name="Vay Tiêu Dùng Việt Nam - Tất Cả Tỉnh Thành"
        description="So sánh vay tiêu dùng tại tất cả các tỉnh thành Việt Nam. Tổ chức tín dụng được Ngân hàng Nhà nước cấp phép."
        url="https://loansai.com/vn"
        items={vietnamCities.slice(0, 20).map(city => ({
          name: city.name,
          url: `https://loansai.com/vn/cities/${city.slug}`,
          description: `Vay tiêu dùng tại ${city.name}`
        }))}
        breadcrumbs={[
          { name: 'Trang chủ', url: 'https://loansai.com' },
          { name: 'Việt Nam', url: 'https://loansai.com/vn' }
        ]}
      />
      
      {/* Structured Data */}
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-offer-catalog" type="application/ld+json">
        {JSON.stringify(offerCatalogSchema)}
      </Script>

      <VietnamNavigation />
      <StickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇻🇳 Được cấp phép và quản lý bởi NHNN
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Vay Tiêu Dùng Tại Việt Nam
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              So sánh ưu đãi vay từ hơn 40 tổ chức tín dụng được Ngân hàng Nhà nước cấp phép. 
              Minh bạch hoàn toàn, lãi suất cạnh tranh, phê duyệt nhanh chóng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/vn/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Đăng Ký Vay Ngay
                  </span>
                </Button>
              </Link>
              <Link href="/vn/regions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Khám Phá Các Khu Vực
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">98M+</div>
                <div className="text-sm text-gray-600">Dân số phục vụ</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">63</div>
                <div className="text-sm text-gray-600">Tỉnh thành</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
                <div className="text-sm text-gray-600">Tổ chức cho vay</div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tổng Quan Về Vay Tiêu Dùng Việt Nam
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Thị trường cho vay tiêu dùng tại Việt Nam đang phát triển mạnh mẽ với sự tham gia của các ngân hàng thương mại, 
                công ty tài chính và tổ chức tín dụng được Ngân hàng Nhà nước Việt Nam cấp phép. Người vay có thể tiếp cận 
                các sản phẩm vay đa dạng từ vay tín chấp, vay mua xe máy, vay học tập đến vay kinh doanh với lãi suất 
                cạnh tranh từ 10-27% mỗi năm.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                LoansAI Việt Nam giúp bạn so sánh các ưu đãi vay từ hơn 40 tổ chức cho vay uy tín, tất cả đều được 
                giám sát bởi Ngân hàng Nhà nước. Nền tảng của chúng tôi cung cấp thông tin minh bạch về lãi suất, 
                phí, điều kiện vay và quy trình phê duyệt, giúp bạn đưa ra quyết định tài chính thông minh.
              </p>
            </div>
          </div>
        </section>

        {/* Regulatory Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Quy Định Về Vay Tiêu Dùng Tại Việt Nam
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>⚖️</span>
                  <span>Các Quy Định Chính Cần Biết</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Trần lãi suất:</strong> Ngân hàng Nhà nước quy định trần lãi suất cho vay để bảo vệ người vay. 
                      Hiện tại, lãi suất cho vay tiêu dùng dao động 10-27%/năm tùy loại hình tổ chức.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Độ tuổi vay:</strong> Người vay phải từ 18-65 tuổi, có năng lực hành vi dân sự đầy đủ.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Chứng minh thu nhập:</strong> Bắt buộc với khoản vay trên 100 triệu đồng, khuyến khích cho mọi khoản vay.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Kiểm tra tín dụng:</strong> Tất cả tổ chức cho vay phải tra cứu lịch sử tín dụng qua 
                      Trung tâm Thông tin Tín dụng (CIC) của Ngân hàng Nhà nước.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Cấp phép:</strong> Tổ chức cho vay phải đăng ký và được cấp phép hoạt động bởi Ngân hàng Nhà nước.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Bảo vệ người tiêu dùng:</strong> Luật Bảo vệ quyền lợi người tiêu dùng và các văn bản pháp luật 
                      liên quan bảo vệ người vay khỏi các hành vi thu nợ bất hợp pháp và lừa đảo.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Trả nợ trước hạn:</strong> Người vay có quyền trả nợ trước hạn, phí trả nợ trước hạn 
                      không quá 1-3% số dư gốc còn lại tùy quy định từng ngân hàng.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Minh bạch thông tin:</strong> Tổ chức cho vay phải công khai rõ ràng về lãi suất, phí, 
                      điều khoản và điều kiện trước khi ký hợp đồng.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Cities by Region */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Thành Phố Nổi Bật Theo Khu Vực
            </h2>
            
            {Object.entries(citiesByRegion).map(([region, cities]) => (
              <div key={region} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="text-blue-600">📍</span>
                  {region}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/vn/cities/${city.region.toLowerCase().replace(/\s+/g, '-')}/${city.slug}`}
                      className="group"
                    >
                      <Card className="hover:shadow-lg transition-shadow h-full">
                        <CardHeader>
                          <CardTitle className="text-xl group-hover:text-blue-600">
                            {city.nameVi}
                          </CardTitle>
                          <p className="text-sm text-gray-500">{city.population} dân</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {city.localEconomyVi.substring(0, 120)}...
                          </p>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Tổ chức cho vay:</span>
                              <span className="font-semibold">{city.nearbyLenders}+</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Lãi suất:</span>
                              <span className="font-semibold">{city.avgInterestRate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Vay trung bình:</span>
                              <span className="font-semibold">{city.averageLoanAmountVND}</span>
                            </div>
                          </div>
                          <Button variant="link" className="mt-4 p-0 h-auto text-blue-600">
                            Xem chi tiết →
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Tại Sao Chọn LoansAI Việt Nam?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AI So Sánh Thông Minh
                </h3>
                <p className="text-gray-600">
                  Công nghệ AI phân tích hồ sơ của bạn và tìm các tổ chức cho vay phù hợp nhất 
                  với lãi suất cạnh tranh và khả năng phê duyệt cao.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🇻🇳</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Chuyên Môn Địa Phương
                </h3>
                <p className="text-gray-600">
                  Chúng tôi hiểu thị trường Việt Nam, hợp tác với các tổ chức uy tín được NHNN 
                  cấp phép, cung cấp thông tin phù hợp với quy định địa phương.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Minh Bạch Hoàn Toàn
                </h3>
                <p className="text-gray-600">
                  So sánh lãi suất, phí, điều khoản song song. Không có chi phí ẩn, không có bất ngờ. 
                  Chỉ thông tin rõ ràng, trung thực.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Các Loại Vay Phổ Biến Tại Việt Nam
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>💳</span>
                    <span>Vay Tín Chấp</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Vay không cần tài sản đảm bảo, dựa trên thu nhập và lịch sử tín dụng. 
                    Số tiền: 10-500 triệu đồng.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🏍️</span>
                    <span>Vay Mua Xe Máy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Trả góp xe máy với lãi suất ưu đãi từ các ngân hàng và công ty tài chính. 
                    Vay đến 80% giá trị xe.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>📚</span>
                    <span>Vay Học Tập</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Hỗ trợ tài chính cho học sinh, sinh viên theo đuổi giáo dục, có chính sách 
                    ưu đãi lãi suất và gia hạn.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🏢</span>
                    <span>Vay Kinh Doanh</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Vốn lưu động cho doanh nghiệp nhỏ, hộ kinh doanh cá thể. 
                    Số tiền linh hoạt, thời hạn dài.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <VietnamFAQ faqItems={faqItems} />

        {/* Top Lenders */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Các Tổ Chức Cho Vay Nổi Bật
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ngân Hàng Thương Mại</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Vietcombank - Lãi suất 10-16%/năm</li>
                    <li>• VietinBank - Vay tín chấp đến 500 triệu</li>
                    <li>• BIDV - Ưu đãi công chức, viên chức</li>
                    <li>• ACB - Phê duyệt nhanh 24 giờ</li>
                    <li>• Techcombank - Vay online tiện lợi</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Công Ty Tài Chính</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• FE Credit - Vay nhanh đến 500 triệu</li>
                    <li>• Home Credit - Trả góp điện thoại, xe máy</li>
                    <li>• Mirae Asset - Lãi suất cạnh tranh</li>
                    <li>• HD Saison - Vay online 24/7</li>
                    <li>• Prudential Finance - Ưu đãi khách hàng bảo hiểm</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regulator Info */}
        <section className="container mx-auto px-4 py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Giám Sát Bởi Ngân Hàng Nhà Nước Việt Nam
            </h2>
            <p className="text-gray-700 mb-6">
              Tất cả các tổ chức cho vay trên nền tảng của chúng tôi đều được cấp phép và giám sát bởi 
              Ngân hàng Nhà nước Việt Nam (NHNN). Để biết thêm thông tin về quy định và quyền lợi của bạn, 
              vui lòng truy cập:
            </p>
            <a
              href="https://www.sbv.gov.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <span>Ngân hàng Nhà nước Việt Nam</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sẵn Sàng Tìm Khoản Vay Phù Hợp?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              So sánh lãi suất từ hơn 40 tổ chức cho vay được cấp phép. 
              Miễn phí, nhanh chóng, minh bạch.
            </p>
            <Link href="/vn/apply">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-6">
                Bắt Đầu Ngay - Miễn Phí
              </Button>
            </Link>
          </div>
        </section>

        {/* Disclosure */}
        <VietnamDisclosure />
      </main>

      <VietnamFooter />
    </>
  )
}
