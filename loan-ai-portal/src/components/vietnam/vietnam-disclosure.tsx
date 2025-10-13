export default function VietnamDisclosure() {
  return (
    <section className="container mx-auto px-4 py-12 bg-yellow-50 border-t-4 border-yellow-400">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>⚠️</span>
            <span>Công Bố Quan Trọng & Ví Dụ Đại Diện</span>
          </h3>
          
          <div className="space-y-6 text-gray-700">
            {/* Affiliate Disclosure */}
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">Công Bố Về Liên Kết</h4>
              <p className="text-sm leading-relaxed">
                LoansAI Việt Nam là nền tảng so sánh độc lập. Chúng tôi có thể nhận hoa hồng từ các tổ chức 
                cho vay khi bạn hoàn thành khoản vay thông qua nền tảng của chúng tôi. Các quan hệ đối tác này 
                không ảnh hưởng đến tính khách quan của các so sánh của chúng tôi và giúp chúng tôi cung cấp 
                dịch vụ miễn phí cho người dùng. Chúng tôi không phải là tổ chức cho vay và không đưa ra 
                quyết định cho vay.
              </p>
            </div>

            {/* Representative Example */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-3 text-gray-900">Ví Dụ Đại Diện</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Khoản vay:</strong> 100.000.000 VND (100 triệu đồng)
                </p>
                <p>
                  <strong>Thời hạn:</strong> 12 tháng (1 năm)
                </p>
                <p>
                  <strong>Lãi suất:</strong> 15% mỗi năm
                </p>
                <p>
                  <strong>Trả hàng tháng:</strong> Khoảng 9.025.000 VND
                </p>
                <p>
                  <strong>Tổng số tiền phải trả:</strong> Khoảng 108.300.000 VND
                </p>
                <p>
                  <strong>Tổng chi phí tín dụng:</strong> Khoảng 8.300.000 VND
                </p>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                Đây chỉ là ví dụ minh họa. Lãi suất thực tế, phí và điều khoản có thể khác nhau tùy thuộc vào 
                tổ chức cho vay, hồ sơ tín dụng của bạn, số tiền vay và thời hạn. Lãi suất dao động từ 10-27% 
                mỗi năm. Một số tổ chức có thể tính thêm phí xử lý, phí quản lý hồ sơ hoặc bảo hiểm.
              </p>
            </div>

            {/* Important Notes */}
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">Lưu Ý Quan Trọng</h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  Tất cả các khoản vay phải tuân thủ quy định của Ngân hàng Nhà nước Việt Nam (NHNN).
                </li>
                <li>
                  Chỉ vay những gì bạn có khả năng trả. Vay vượt khả năng có thể dẫn đến nợ xấu và 
                  ảnh hưởng đến điểm tín dụng của bạn.
                </li>
                <li>
                  Đọc kỹ tất cả các điều khoản và điều kiện trước khi ký hợp đồng vay. Hỏi tổ chức 
                  cho vay về bất kỳ điều gì bạn không hiểu.
                </li>
                <li>
                  Kiểm tra xem tổ chức cho vay có được NHNN cấp phép hay không. Tránh xa các tổ chức 
                  cho vay không được cấp phép hoặc "tín dụng đen".
                </li>
                <li>
                  Bạn có quyền trả nợ trước hạn. Kiểm tra xem có phí trả nợ trước hạn hay không 
                  (tối đa 1-3% theo quy định).
                </li>
                <li>
                  Thông tin cá nhân của bạn được bảo vệ theo Luật An ninh mạng và các quy định về 
                  bảo vệ dữ liệu cá nhân của Việt Nam.
                </li>
                <li>
                  Nếu bạn gặp khó khăn trong việc trả nợ, hãy liên hệ với tổ chức cho vay ngay lập tức 
                  để thảo luận về các lựa chọn. Đừng tránh né hoặc bỏ trốn.
                </li>
              </ul>
            </div>

            {/* Credit Check Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-900">Kiểm Tra Tín Dụng</h4>
              <p className="text-sm leading-relaxed">
                Khi bạn đăng ký vay, tổ chức cho vay sẽ kiểm tra lịch sử tín dụng của bạn thông qua 
                Trung tâm Thông tin Tín dụng (CIC) của Ngân hàng Nhà nước. Điều này giúp họ đánh giá 
                khả năng trả nợ của bạn. Lịch sử tín dụng tốt có thể giúp bạn nhận được lãi suất thấp hơn 
                và hạn mức cao hơn. Nợ xấu hoặc thanh toán trễ sẽ ảnh hưởng tiêu cực đến khả năng vay 
                và điều kiện vay của bạn.
              </p>
            </div>

            {/* Responsible Borrowing */}
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">Vay Vốn Có Trách Nhiệm</h4>
              <p className="text-sm leading-relaxed mb-3">
                Trước khi vay, hãy tự hỏi:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Tôi thực sự cần khoản vay này không?</li>
                <li>Tôi có khả năng trả nợ hàng tháng không?</li>
                <li>Tôi đã so sánh các lựa chọn khác chưa?</li>
                <li>Tôi có hiểu rõ tất cả các chi phí và điều khoản không?</li>
                <li>Tôi có kế hoạch trả nợ rõ ràng không?</li>
              </ul>
              <p className="text-sm mt-3 text-gray-600">
                Vay vốn có trách nhiệm giúp bạn xây dựng lịch sử tín dụng tốt và tránh rơi vào vòng xoáy nợ nần.
              </p>
            </div>

            {/* Contact for Help */}
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-900">Cần Hỗ Trợ?</h4>
              <p className="text-sm leading-relaxed">
                Nếu bạn có câu hỏi về sản phẩm vay, quy trình hoặc quyền lợi của mình, vui lòng liên hệ:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                <li>Tổ chức cho vay của bạn trực tiếp</li>
                <li>Ngân hàng Nhà nước Việt Nam (NHNN): <a href="https://www.sbv.gov.vn" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.sbv.gov.vn</a></li>
                <li>Trung tâm Thông tin Tín dụng (CIC): <a href="https://www.cic.org.vn" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.cic.org.vn</a></li>
                <li>Đội ngũ hỗ trợ LoansAI: <a href="/vn/contact" className="text-blue-600 hover:underline">Liên hệ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
