/**
 * Vietnam Cities Data
 * Major cities across 3 regions (Northern, Central, Southern Vietnam)
 * Data includes local economy, regulations, and loan information
 */

export interface VietnamCityData {
  name: string
  nameVi: string // Vietnamese name
  region: string
  regionVi: string // Vietnamese region name
  slug: string
  population: string
  coordinates: {
    lat: number
    lng: number
  }
  medianIncome: string
  medianIncomeVND: string // In Vietnamese Dong
  averageLoanAmount: string
  averageLoanAmountVND: string
  popularLoanTypes: string[]
  popularLoanTypesVi: string[]
  localEconomy: string
  localEconomyVi: string
  keyIndustries: string[]
  keyIndustriesVi: string[]
  nearbyLenders: number
  avgInterestRate: string
  typicalLoanRange: string
  typicalLoanRangeVND: string
  regulatoryNotes: string[]
  regulatoryNotesVi: string[]
}

export const vietnamCities: VietnamCityData[] = [
  // Northern Vietnam - Miền Bắc
  {
    name: 'Hanoi',
    nameVi: 'Hà Nội',
    region: 'Northern Vietnam',
    regionVi: 'Miền Bắc',
    slug: 'hanoi',
    population: '8.4M',
    coordinates: {
      lat: 21.0285,
      lng: 105.8542,
    },
    medianIncome: '$6,500/year',
    medianIncomeVND: '150 triệu đồng/năm',
    averageLoanAmount: '$4,500',
    averageLoanAmountVND: '105 triệu đồng',
    popularLoanTypes: ['Personal loans', 'Consumer loans', 'Motorcycle financing', 'Education loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay tín chấp', 'Vay mua xe máy', 'Vay học tập'],
    localEconomy:
      'Hanoi is Vietnam\'s capital and second-largest city, with a diverse economy centered on government, education, finance, and technology. Growing middle class with increasing credit demand.',
    localEconomyVi:
      'Hà Nội là thủ đô và thành phố lớn thứ hai của Việt Nam, với nền kinh tế đa dạng tập trung vào chính phủ, giáo dục, tài chính và công nghệ. Tầng lớp trung lưu đang tăng trưởng với nhu cầu tín dụng ngày càng cao.',
    keyIndustries: ['Government', 'Finance', 'Education', 'Technology', 'Tourism'],
    keyIndustriesVi: ['Chính phủ', 'Tài chính', 'Giáo dục', 'Công nghệ', 'Du lịch'],
    nearbyLenders: 85,
    avgInterestRate: '12-24% annually',
    typicalLoanRange: '$500 - $15,000',
    typicalLoanRangeVND: '12 triệu - 350 triệu đồng',
    regulatoryNotes: [
      'Maximum interest rate capped by State Bank of Vietnam',
      'Borrowers must be 18-65 years old',
      'Proof of income required for loans over 100 million VND',
      'Credit bureau check through CIC (Credit Information Center)',
      'Licensed lenders must register with State Bank',
    ],
    regulatoryNotesVi: [
      'Lãi suất tối đa được giới hạn bởi Ngân hàng Nhà nước Việt Nam',
      'Người vay phải từ 18-65 tuổi',
      'Yêu cầu chứng minh thu nhập cho khoản vay trên 100 triệu đồng',
      'Kiểm tra tín dụng qua CIC (Trung tâm Thông tin Tín dụng)',
      'Tổ chức cho vay phải đăng ký với Ngân hàng Nhà nước',
    ],
  },
  {
    name: 'Hai Phong',
    nameVi: 'Hải Phòng',
    region: 'Northern Vietnam',
    regionVi: 'Miền Bắc',
    slug: 'hai-phong',
    population: '2.4M',
    coordinates: {
      lat: 20.8449,
      lng: 106.6881,
    },
    medianIncome: '$5,800/year',
    medianIncomeVND: '135 triệu đồng/năm',
    averageLoanAmount: '$3,800',
    averageLoanAmountVND: '88 triệu đồng',
    popularLoanTypes: ['Personal loans', 'Business loans', 'Motorcycle financing', 'Home improvement'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay kinh doanh', 'Vay mua xe máy', 'Vay sửa nhà'],
    localEconomy:
      'Hai Phong is a major port city and industrial center in Northern Vietnam. Strong manufacturing, logistics, and trade sectors drive local credit demand.',
    localEconomyVi:
      'Hải Phòng là thành phố cảng lớn và trung tâm công nghiệp ở Miền Bắc Việt Nam. Các ngành sản xuất, logistics và thương mại mạnh thúc đẩy nhu cầu tín dụng địa phương.',
    keyIndustries: ['Shipping', 'Manufacturing', 'Logistics', 'Trade', 'Tourism'],
    keyIndustriesVi: ['Vận tải biển', 'Sản xuất', 'Logistics', 'Thương mại', 'Du lịch'],
    nearbyLenders: 58,
    avgInterestRate: '13-25% annually',
    typicalLoanRange: '$500 - $12,000',
    typicalLoanRangeVND: '12 triệu - 280 triệu đồng',
    regulatoryNotes: [
      'Port workers may qualify for special loan programs',
      'Industrial zone employees have targeted products',
      'Credit unions available for factory workers',
      'Maximum debt-to-income ratio applies',
      'Co-borrowers accepted for larger amounts',
    ],
    regulatoryNotesVi: [
      'Công nhân cảng có thể đủ điều kiện nhận các chương trình vay đặc biệt',
      'Nhân viên khu công nghiệp có sản phẩm vay mục tiêu',
      'Quỹ tín dụng có sẵn cho công nhân nhà máy',
      'Áp dụng tỷ lệ nợ trên thu nhập tối đa',
      'Chấp nhận người đồng vay cho số tiền lớn hơn',
    ],
  },
  {
    name: 'Quang Ninh',
    nameVi: 'Quảng Ninh',
    region: 'Northern Vietnam',
    regionVi: 'Miền Bắc',
    slug: 'quang-ninh',
    population: '1.3M',
    coordinates: {
      lat: 21.0064,
      lng: 107.2925,
    },
    medianIncome: '$6,200/year',
    medianIncomeVND: '144 triệu đồng/năm',
    averageLoanAmount: '$4,200',
    averageLoanAmountVND: '98 triệu đồng',
    popularLoanTypes: ['Tourism business loans', 'Personal loans', 'Vehicle financing', 'Home loans'],
    popularLoanTypesVi: ['Vay kinh doanh du lịch', 'Vay tiêu dùng', 'Vay mua xe', 'Vay mua nhà'],
    localEconomy:
      'Quang Ninh (including Ha Long Bay) is a major tourism destination with coal mining and maritime industries. Seasonal tourism creates unique credit patterns.',
    localEconomyVi:
      'Quảng Ninh (bao gồm Vịnh Hạ Long) là điểm đến du lịch lớn với khai thác than và công nghiệp hàng hải. Du lịch theo mùa tạo ra các mô hình tín dụng độc đáo.',
    keyIndustries: ['Tourism', 'Coal mining', 'Shipping', 'Hospitality', 'Real estate'],
    keyIndustriesVi: ['Du lịch', 'Khai thác than', 'Vận tải biển', 'Khách sạn', 'Bất động sản'],
    nearbyLenders: 42,
    avgInterestRate: '12-24% annually',
    typicalLoanRange: '$500 - $14,000',
    typicalLoanRangeVND: '12 triệu - 320 triệu đồng',
    regulatoryNotes: [
      'Tourism business loans have special requirements',
      'Seasonal income considered for tourism workers',
      'Mining sector employees may access corporate programs',
      'UNESCO site proximity affects real estate lending',
      'Foreign tourist-facing businesses have additional rules',
    ],
    regulatoryNotesVi: [
      'Vay kinh doanh du lịch có yêu cầu đặc biệt',
      'Thu nhập theo mùa được xem xét cho nhân viên du lịch',
      'Nhân viên ngành khai thác mỏ có thể tiếp cận các chương trình doanh nghiệp',
      'Vị trí gần di sản UNESCO ảnh hưởng đến cho vay bất động sản',
      'Doanh nghiệp phục vụ khách du lịch nước ngoài có quy định bổ sung',
    ],
  },

  // Central Vietnam - Miền Trung
  {
    name: 'Da Nang',
    nameVi: 'Đà Nẵng',
    region: 'Central Vietnam',
    regionVi: 'Miền Trung',
    slug: 'da-nang',
    population: '1.2M',
    coordinates: {
      lat: 16.0544,
      lng: 108.2022,
    },
    medianIncome: '$6,800/year',
    medianIncomeVND: '158 triệu đồng/năm',
    averageLoanAmount: '$5,200',
    averageLoanAmountVND: '121 triệu đồng',
    popularLoanTypes: ['Personal loans', 'Tourism loans', 'Real estate loans', 'Business loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay du lịch', 'Vay bất động sản', 'Vay kinh doanh'],
    localEconomy:
      'Da Nang is a rapidly growing coastal city with thriving tourism, technology, and manufacturing sectors. Modern infrastructure attracts both domestic and foreign investment.',
    localEconomyVi:
      'Đà Nẵng là thành phố ven biển đang phát triển nhanh chóng với các ngành du lịch, công nghệ và sản xuất phát triển mạnh. Cơ sở hạ tầng hiện đại thu hút cả đầu tư trong nước và nước ngoài.',
    keyIndustries: ['Tourism', 'Technology', 'Manufacturing', 'Real estate', 'Services'],
    keyIndustriesVi: ['Du lịch', 'Công nghệ', 'Sản xuất', 'Bất động sản', 'Dịch vụ'],
    nearbyLenders: 67,
    avgInterestRate: '11-23% annually',
    typicalLoanRange: '$800 - $18,000',
    typicalLoanRangeVND: '18 triệu - 420 triệu đồng',
    regulatoryNotes: [
      'Tech sector employees may qualify for preferential rates',
      'Smart city initiative creates special loan programs',
      'Beach resort area has tourism-specific products',
      'Foreign investment zones offer corporate lending',
      'Green building loans available for eco-projects',
    ],
    regulatoryNotesVi: [
      'Nhân viên ngành công nghệ có thể đủ điều kiện nhận lãi suất ưu đãi',
      'Sáng kiến thành phố thông minh tạo ra các chương trình vay đặc biệt',
      'Khu vực resort bãi biển có sản phẩm vay đặc trưng du lịch',
      'Khu vực đầu tư nước ngoài cung cấp cho vay doanh nghiệp',
      'Vay xây dựng xanh có sẵn cho các dự án sinh thái',
    ],
  },
  {
    name: 'Hue',
    nameVi: 'Huế',
    region: 'Central Vietnam',
    regionVi: 'Miền Trung',
    slug: 'hue',
    population: '455K',
    coordinates: {
      lat: 16.4637,
      lng: 107.5909,
    },
    medianIncome: '$5,200/year',
    medianIncomeVND: '121 triệu đồng/năm',
    averageLoanAmount: '$3,200',
    averageLoanAmountVND: '74 triệu đồng',
    popularLoanTypes: ['Personal loans', 'Education loans', 'Small business loans', 'Home improvement'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay học tập', 'Vay kinh doanh nhỏ', 'Vay sửa nhà'],
    localEconomy:
      'Hue, the former imperial capital, has an economy based on education, tourism, and cultural preservation. Many students and heritage-related businesses seek financing.',
    localEconomyVi:
      'Huế, cố đô của Việt Nam, có nền kinh tế dựa trên giáo dục, du lịch và bảo tồn văn hóa. Nhiều sinh viên và doanh nghiệp liên quan đến di sản tìm kiếm tài trợ.',
    keyIndustries: ['Education', 'Tourism', 'Cultural preservation', 'Agriculture', 'Handicrafts'],
    keyIndustriesVi: ['Giáo dục', 'Du lịch', 'Bảo tồn văn hóa', 'Nông nghiệp', 'Thủ công mỹ nghệ'],
    nearbyLenders: 38,
    avgInterestRate: '13-26% annually',
    typicalLoanRange: '$400 - $10,000',
    typicalLoanRangeVND: '10 triệu - 230 triệu đồng',
    regulatoryNotes: [
      'Student loans available through universities',
      'Heritage business preservation loans exist',
      'Cultural workers may access special programs',
      'Agricultural loans for rural communes nearby',
      'Handicraft artisans eligible for microloans',
    ],
    regulatoryNotesVi: [
      'Vay sinh viên có sẵn thông qua các trường đại học',
      'Tồn tại các khoản vay bảo tồn doanh nghiệp di sản',
      'Công nhân văn hóa có thể tiếp cận các chương trình đặc biệt',
      'Vay nông nghiệp cho các xã nông thôn gần đó',
      'Nghệ nhân thủ công đủ điều kiện nhận vay vi mô',
    ],
  },
  {
    name: 'Quang Nam',
    nameVi: 'Quảng Nam',
    region: 'Central Vietnam',
    regionVi: 'Miền Trung',
    slug: 'quang-nam',
    population: '1.5M',
    coordinates: {
      lat: 15.5394,
      lng: 108.0191,
    },
    medianIncome: '$4,800/year',
    medianIncomeVND: '112 triệu đồng/năm',
    averageLoanAmount: '$2,900',
    averageLoanAmountVND: '68 triệu đồng',
    popularLoanTypes: ['Agricultural loans', 'Personal loans', 'Tourism loans', 'Motorcycle financing'],
    popularLoanTypesVi: ['Vay nông nghiệp', 'Vay tiêu dùng', 'Vay du lịch', 'Vay mua xe máy'],
    localEconomy:
      'Quang Nam (home to Hoi An ancient town) combines agriculture, tourism, and emerging manufacturing. Rural credit and tourism financing are key.',
    localEconomyVi:
      'Quảng Nam (nơi có phố cổ Hội An) kết hợp nông nghiệp, du lịch và sản xuất mới nổi. Tín dụng nông thôn và tài trợ du lịch là chìa khóa.',
    keyIndustries: ['Agriculture', 'Tourism', 'Manufacturing', 'Textiles', 'Fishing'],
    keyIndustriesVi: ['Nông nghiệp', 'Du lịch', 'Sản xuất', 'Dệt may', 'Đánh bắt cá'],
    nearbyLenders: 45,
    avgInterestRate: '14-27% annually',
    typicalLoanRange: '$300 - $8,000',
    typicalLoanRangeVND: '7 triệu - 185 triệu đồng',
    regulatoryNotes: [
      'Hoi An tourism businesses have special access',
      'Agricultural cooperatives offer member loans',
      'UNESCO heritage site rules apply to businesses',
      'Fishing communities access maritime loans',
      'Rural development bank programs available',
    ],
    regulatoryNotesVi: [
      'Doanh nghiệp du lịch Hội An có quyền truy cập đặc biệt',
      'Hợp tác xã nông nghiệp cung cấp vay cho thành viên',
      'Quy định di sản UNESCO áp dụng cho doanh nghiệp',
      'Cộng đồng đánh bắt cá tiếp cận vay hàng hải',
      'Có sẵn các chương trình ngân hàng phát triển nông thôn',
    ],
  },

  // Southern Vietnam - Miền Nam
  {
    name: 'Ho Chi Minh City',
    nameVi: 'Thành phố Hồ Chí Minh',
    region: 'Southern Vietnam',
    regionVi: 'Miền Nam',
    slug: 'ho-chi-minh',
    population: '9.3M',
    coordinates: {
      lat: 10.8231,
      lng: 106.6297,
    },
    medianIncome: '$7,500/year',
    medianIncomeVND: '175 triệu đồng/năm',
    averageLoanAmount: '$6,200',
    averageLoanAmountVND: '144 triệu đồng',
    popularLoanTypes: ['Personal loans', 'Business loans', 'Real estate loans', 'Vehicle financing'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay kinh doanh', 'Vay bất động sản', 'Vay mua xe'],
    localEconomy:
      'Ho Chi Minh City (formerly Saigon) is Vietnam\'s economic powerhouse and largest city. Finance, technology, manufacturing, and trade drive high credit demand and sophisticated products.',
    localEconomyVi:
      'Thành phố Hồ Chí Minh (trước đây là Sài Gòn) là trung tâm kinh tế và thành phố lớn nhất Việt Nam. Tài chính, công nghệ, sản xuất và thương mại thúc đẩy nhu cầu tín dụng cao và các sản phẩm phức tạp.',
    keyIndustries: ['Finance', 'Technology', 'Manufacturing', 'Trade', 'Real estate'],
    keyIndustriesVi: ['Tài chính', 'Công nghệ', 'Sản xuất', 'Thương mại', 'Bất động sản'],
    nearbyLenders: 120,
    avgInterestRate: '10-22% annually',
    typicalLoanRange: '$1,000 - $25,000',
    typicalLoanRangeVND: '23 triệu - 580 triệu đồng',
    regulatoryNotes: [
      'Largest selection of lenders and products',
      'International bank branches available',
      'Fintech lending platforms most active here',
      'Corporate salary advance programs common',
      'Highest credit limits in the country',
    ],
    regulatoryNotesVi: [
      'Lựa chọn lớn nhất của các tổ chức cho vay và sản phẩm',
      'Chi nhánh ngân hàng quốc tế có sẵn',
      'Nền tảng cho vay fintech hoạt động tích cực nhất ở đây',
      'Các chương trình ứng lương doanh nghiệp phổ biến',
      'Hạn mức tín dụng cao nhất trong cả nước',
    ],
  },
  {
    name: 'Binh Duong',
    nameVi: 'Bình Dương',
    region: 'Southern Vietnam',
    regionVi: 'Miền Nam',
    slug: 'binh-duong',
    population: '2.7M',
    coordinates: {
      lat: 11.3254,
      lng: 106.4770,
    },
    medianIncome: '$6,000/year',
    medianIncomeVND: '140 triệu đồng/năm',
    averageLoanAmount: '$4,800',
    averageLoanAmountVND: '112 triệu đồng',
    popularLoanTypes: ['Personal loans', 'Motorcycle financing', 'Home improvement', 'Education loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay mua xe máy', 'Vay sửa nhà', 'Vay học tập'],
    localEconomy:
      'Binh Duong is a major industrial province adjacent to Ho Chi Minh City. Manufacturing, industrial parks, and export zones create steady employment and credit needs.',
    localEconomyVi:
      'Bình Dương là tỉnh công nghiệp lớn giáp với Thành phố Hồ Chí Minh. Sản xuất, khu công nghiệp và khu chế xuất tạo việc làm ổn định và nhu cầu tín dụng.',
    keyIndustries: ['Manufacturing', 'Textiles', 'Electronics', 'Food processing', 'Furniture'],
    keyIndustriesVi: ['Sản xuất', 'Dệt may', 'Điện tử', 'Chế biến thực phẩm', 'Đồ gỗ'],
    nearbyLenders: 72,
    avgInterestRate: '11-24% annually',
    typicalLoanRange: '$500 - $15,000',
    typicalLoanRangeVND: '12 triệu - 350 triệu đồng',
    regulatoryNotes: [
      'Factory worker loan programs widespread',
      'Industrial zone enterprises offer employee credit',
      'Proximity to HCMC provides access to metro lenders',
      'Export zone workers may access foreign bank products',
      'Migrant worker remittances considered for credit',
    ],
    regulatoryNotesVi: [
      'Các chương trình vay cho công nhân nhà máy phổ biến rộng rãi',
      'Các doanh nghiệp khu công nghiệp cung cấp tín dụng cho nhân viên',
      'Gần TP.HCM cung cấp quyền truy cập vào các tổ chức cho vay metro',
      'Công nhân khu chế xuất có thể tiếp cận sản phẩm ngân hàng nước ngoài',
      'Kiều hối của công nhân nhập cư được xem xét cho tín dụng',
    ],
  },
  {
    name: 'Dong Nai',
    nameVi: 'Đồng Nai',
    region: 'Southern Vietnam',
    regionVi: 'Miền Nam',
    slug: 'dong-nai',
    population: '3.2M',
    coordinates: {
      lat: 10.9460,
      lng: 106.8340,
    },
    medianIncome: '$5,600/year',
    medianIncomeVND: '130 triệu đồng/năm',
    averageLoanAmount: '$4,200',
    averageLoanAmountVND: '98 triệu đồng',
    popularLoanTypes: ['Personal loans', 'Agricultural loans', 'Business loans', 'Vehicle financing'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay nông nghiệp', 'Vay kinh doanh', 'Vay mua xe'],
    localEconomy:
      'Dong Nai combines industrial development with traditional agriculture. Industrial parks, coffee plantations, and rubber production create diverse credit needs.',
    localEconomyVi:
      'Đồng Nai kết hợp phát triển công nghiệp với nông nghiệp truyền thống. Các khu công nghiệp, đồn điền cà phê và sản xuất cao su tạo ra nhu cầu tín dụng đa dạng.',
    keyIndustries: ['Manufacturing', 'Agriculture', 'Rubber production', 'Coffee', 'Logistics'],
    keyIndustriesVi: ['Sản xuất', 'Nông nghiệp', 'Sản xuất cao su', 'Cà phê', 'Logistics'],
    nearbyLenders: 54,
    avgInterestRate: '12-25% annually',
    typicalLoanRange: '$400 - $12,000',
    typicalLoanRangeVND: '9 triệu - 280 triệu đồng',
    regulatoryNotes: [
      'Agricultural cooperatives provide member financing',
      'Coffee farmers access seasonal crop loans',
      'Rubber plantation workers have targeted products',
      'Industrial workers eligible for payroll advances',
      'Land use rights can serve as collateral',
    ],
    regulatoryNotesVi: [
      'Hợp tác xã nông nghiệp cung cấp tài trợ cho thành viên',
      'Nông dân trồng cà phê tiếp cận các khoản vay mùa vụ',
      'Công nhân đồn điền cao su có sản phẩm vay mục tiêu',
      'Công nhân công nghiệp đủ điều kiện nhận ứng lương',
      'Quyền sử dụng đất có thể dùng làm tài sản thế chấp',
    ],
  },
  {
    name: 'Can Tho',
    nameVi: 'Cần Thơ',
    region: 'Southern Vietnam',
    regionVi: 'Miền Nam',
    slug: 'can-tho',
    population: '1.3M',
    coordinates: {
      lat: 10.0452,
      lng: 105.7469,
    },
    medianIncome: '$5,400/year',
    medianIncomeVND: '126 triệu đồng/năm',
    averageLoanAmount: '$3,600',
    averageLoanAmountVND: '84 triệu đồng',
    popularLoanTypes: ['Agricultural loans', 'Personal loans', 'Fishing loans', 'Small business loans'],
    popularLoanTypesVi: ['Vay nông nghiệp', 'Vay tiêu dùng', 'Vay đánh bắt cá', 'Vay kinh doanh nhỏ'],
    localEconomy:
      'Can Tho is the largest city in the Mekong Delta, Vietnam\'s rice bowl. Agriculture, aquaculture, and river trade dominate the economy with seasonal credit patterns.',
    localEconomyVi:
      'Cần Thơ là thành phố lớn nhất ở Đồng bằng sông Cửu Long, vựa lúa của Việt Nam. Nông nghiệp, nuôi trồng thủy sản và thương mại sông chiếm ưu thế trong nền kinh tế với các mô hình tín dụng theo mùa.',
    keyIndustries: ['Agriculture', 'Aquaculture', 'Rice production', 'River trade', 'Food processing'],
    keyIndustriesVi: ['Nông nghiệp', 'Nuôi trồng thủy sản', 'Sản xuất lúa gạo', 'Thương mại sông', 'Chế biến thực phẩm'],
    nearbyLenders: 48,
    avgInterestRate: '13-26% annually',
    typicalLoanRange: '$300 - $10,000',
    typicalLoanRangeVND: '7 triệu - 230 triệu đồng',
    regulatoryNotes: [
      'Mekong Delta special agricultural loan programs',
      'Seasonal loans synchronized with harvest cycles',
      'Aquaculture farmers access specialized financing',
      'Floating market traders have unique credit products',
      'Government rice subsidy programs affect lending',
    ],
    regulatoryNotesVi: [
      'Chương trình vay nông nghiệp đặc biệt cho Đồng bằng sông Cửu Long',
      'Các khoản vay theo mùa đồng bộ với chu kỳ thu hoạch',
      'Nông dân nuôi trồng thủy sản tiếp cận tài trợ chuyên biệt',
      'Người buôn bán chợ nổi có sản phẩm tín dụng độc đáo',
      'Các chương trình trợ cấp gạo của chính phủ ảnh hưởng đến cho vay',
    ],
  },
  {
    name: 'Vung Tau',
    nameVi: 'Vũng Tàu',
    region: 'Southern Vietnam',
    regionVi: 'Miền Nam',
    slug: 'vung-tau',
    population: '490K',
    coordinates: {
      lat: 10.3460,
      lng: 107.0843,
    },
    medianIncome: '$6,500/year',
    medianIncomeVND: '151 triệu đồng/năm',
    averageLoanAmount: '$4,700',
    averageLoanAmountVND: '109 triệu đồng',
    popularLoanTypes: ['Personal loans', 'Tourism loans', 'Fishing loans', 'Real estate loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay du lịch', 'Vay đánh bắt cá', 'Vay bất động sản'],
    localEconomy:
      'Vung Tau is a coastal city with oil and gas industry, fishing, and beach tourism. Energy sector salaries and tourism seasonality shape credit market.',
    localEconomyVi:
      'Vũng Tàu là thành phố ven biển với ngành dầu khí, đánh bắt cá và du lịch bãi biển. Mức lương ngành năng lượng và tính mùa vụ của du lịch định hình thị trường tín dụng.',
    keyIndustries: ['Oil and gas', 'Tourism', 'Fishing', 'Shipping', 'Real estate'],
    keyIndustriesVi: ['Dầu khí', 'Du lịch', 'Đánh bắt cá', 'Vận tải biển', 'Bất động sản'],
    nearbyLenders: 52,
    avgInterestRate: '11-23% annually',
    typicalLoanRange: '$500 - $16,000',
    typicalLoanRangeVND: '12 triệu - 370 triệu đồng',
    regulatoryNotes: [
      'Oil and gas workers access corporate lending programs',
      'Tourism businesses face seasonal approval criteria',
      'Fishing community has maritime-specific loans',
      'Beach resort development creates construction lending',
      'Foreign workers in petroleum sector have special products',
    ],
    regulatoryNotesVi: [
      'Công nhân dầu khí tiếp cận các chương trình cho vay doanh nghiệp',
      'Doanh nghiệp du lịch đối mặt với tiêu chí phê duyệt theo mùa',
      'Cộng đồng đánh bắt cá có các khoản vay đặc thù hàng hải',
      'Phát triển khu nghỉ dưỡng bãi biển tạo ra cho vay xây dựng',
      'Công nhân nước ngoài trong ngành dầu khí có sản phẩm đặc biệt',
    ],
  },
]

export default vietnamCities
