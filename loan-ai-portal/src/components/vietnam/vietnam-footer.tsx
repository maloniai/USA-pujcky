import Link from 'next/link'

export default function VietnamFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Về LoansAI Việt Nam</h3>
            <p className="text-sm mb-4">
              Nền tảng so sánh vay tiêu dùng cho cư dân Việt Nam. 
              Kết nối người vay với các tổ chức tín dụng được NHNN cấp phép.
            </p>
            <p className="text-xs text-gray-400">
              © 2025 LoansAI. Bản quyền được bảo lưu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/vn" className="hover:text-blue-400 transition">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/vn/regions" className="hover:text-blue-400 transition">
                  Khu vực
                </Link>
              </li>
              <li>
                <Link href="/vn/cities" className="hover:text-blue-400 transition">
                  Thành phố
                </Link>
              </li>
              <li>
                <Link href="/vn/apply" className="hover:text-blue-400 transition">
                  Đăng ký vay
                </Link>
              </li>
              <li>
                <Link href="/vn/faq" className="hover:text-blue-400 transition">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Thông tin pháp lý</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/vn/privacy" className="hover:text-blue-400 transition">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/vn/terms" className="hover:text-blue-400 transition">
                  Điều khoản và điều kiện
                </Link>
              </li>
              <li>
                <Link href="/vn/disclosures" className="hover:text-blue-400 transition">
                  Công bố và tuân thủ
                </Link>
              </li>
              <li>
                <Link href="/vn/cookie-policy" className="hover:text-blue-400 transition">
                  Chính sách cookie
                </Link>
              </li>
              <li>
                <Link href="/vn/data-protection" className="hover:text-blue-400 transition">
                  Bảo vệ dữ liệu cá nhân
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Nguồn lực</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/vn/contact" className="hover:text-blue-400 transition">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link href="/vn/about" className="hover:text-blue-400 transition">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.sbv.gov.vn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  NHNN (Cơ quan quản lý) ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://www.cic.org.vn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  CIC (Thông tin Tín dụng) ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span>ℹ️</span>
              Công bố quan trọng về quan hệ đối tác liên kết
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              LoansAI là nền tảng so sánh độc lập có thể nhận được khoản bồi thường từ các tổ chức cho vay 
              mà chúng tôi hợp tác. Những quan hệ đối tác này giúp chúng tôi duy trì dịch vụ miễn phí cho 
              người dùng. Chúng tôi không phải là tổ chức cho vay và không đưa ra quyết định cho vay. 
              Các so sánh của chúng tôi khách quan và dựa trên tiêu chí minh bạch.
            </p>
            <p className="text-xs text-gray-400">
              <strong>Ví dụ đại diện:</strong> Với khoản vay 100 triệu đồng trong 12 tháng với lãi suất 
              15% mỗi năm, tổng số tiền phải trả sẽ khoảng 108,5 triệu đồng, với khoản trả hàng tháng 
              khoảng 9 triệu đồng. Lãi suất thực tế có thể dao động từ 10% đến 27% mỗi năm tùy thuộc vào 
              tổ chức cho vay, số tiền và thời hạn vay. Tất cả các khoản vay phải được phê duyệt và 
              tuân theo điều kiện của tổ chức cho vay. Luôn đọc kỹ các điều khoản và điều kiện trước khi 
              ký hợp đồng.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            🇻🇳 Dịch vụ dành riêng cho cư dân Việt Nam | Được quản lý bởi NHNN | Tuân thủ Luật Bảo vệ Dữ liệu
          </p>
          <p className="mt-2">
            LoansAI không phải là tổ chức cho vay. Chúng tôi là dịch vụ so sánh kết nối bạn với các 
            tổ chức cho vay được cấp phép. Tất cả các đơn đăng ký phải được xác minh và phê duyệt bởi 
            tổ chức cho vay.
          </p>
        </div>
      </div>
    </footer>
  )
}
