/**
 * Vietnam Regions Data
 * Defines provinces/cities and their loan information
 */

export interface VietnamRegion {
  name: string
  nameVi: string // Vietnamese name
  slug: string
  description: string
  descriptionVi: string
  population: string
  avgLoanAmount: string
  avgRate: string
  maxLoanAmount: string
  popularCities: string[]
  regulations: string[]
  regulationsVi: string[]
}

export const vietnamRegions: VietnamRegion[] = [
  {
    name: 'Hanoi',
    nameVi: 'Hà Nội',
    slug: 'hanoi',
    description: 'Capital city with diverse loan options from banks and financial institutions. Strong regulatory oversight.',
    descriptionVi: 'Thủ đô với nhiều lựa chọn vay từ ngân hàng và tổ chức tài chính. Giám sát quy định chặt chẽ.',
    population: '8.4 million',
    avgLoanAmount: '₫150,000,000',
    avgRate: '12-18% per year',
    maxLoanAmount: '₫500,000,000',
    popularCities: ['Ba Đình', 'Hoàn Kiếm', 'Hai Bà Trưng', 'Đống Đa', 'Cầu Giấy'],
    regulations: [
      'Maximum APR: 20% for licensed institutions per SBV Decision 546/2014',
      'Borrowers must be 18+ with valid ID and proof of income',
      'Licensed lenders must disclose all fees upfront',
      'Consumer protection under Law on Credit Institutions 2010',
      'Right to early repayment with regulated penalties',
    ],
    regulationsVi: [
      'Lãi suất tối đa: 20%/năm cho tổ chức được cấp phép theo Quyết định 546/2014 của NHNN',
      'Người vay phải từ 18 tuổi trở lên với CMND/CCCD và chứng minh thu nhập',
      'Tổ chức cho vay phải công khai mọi phí trước',
      'Bảo vệ người tiêu dùng theo Luật Tổ chức tín dụng 2010',
      'Quyền trả nợ trước hạn với phí được quy định',
    ],
  },
  {
    name: 'Ho Chi Minh City',
    nameVi: 'Thành phố Hồ Chí Minh',
    slug: 'ho-chi-minh-city',
    description: 'Economic hub with the most lenders and competitive rates. High concentration of international banks.',
    descriptionVi: 'Trung tâm kinh tế với nhiều tổ chức cho vay nhất và lãi suất cạnh tranh. Nhiều ngân hàng quốc tế.',
    population: '9.3 million',
    avgLoanAmount: '₫180,000,000',
    avgRate: '11-17% per year',
    maxLoanAmount: '₫1,000,000,000',
    popularCities: ['District 1', 'District 3', 'Bình Thạnh', 'Phú Nhuận', 'Tân Bình'],
    regulations: [
      'Maximum APR: 20% for licensed institutions per SBV Decision 546/2014',
      'Borrowers must be 18+ with valid ID and proof of income',
      'Licensed lenders must disclose all fees upfront',
      'Consumer protection under Law on Credit Institutions 2010',
      'Debt-to-income ratio requirements apply',
    ],
    regulationsVi: [
      'Lãi suất tối đa: 20%/năm cho tổ chức được cấp phép theo Quyết định 546/2014 của NHNN',
      'Người vay phải từ 18 tuổi trở lên với CMND/CCCD và chứng minh thu nhập',
      'Tổ chức cho vay phải công khai mọi phí trước',
      'Bảo vệ người tiêu dùng theo Luật Tổ chức tín dụng 2010',
      'Áp dụng tỷ lệ nợ trên thu nhập',
    ],
  },
  {
    name: 'Da Nang',
    nameVi: 'Đà Nẵng',
    slug: 'da-nang',
    description: 'Central Vietnam\'s major port city with growing financial services sector.',
    descriptionVi: 'Thành phố cảng lớn miền Trung với ngành dịch vụ tài chính đang phát triển.',
    population: '1.2 million',
    avgLoanAmount: '₫100,000,000',
    avgRate: '13-19% per year',
    maxLoanAmount: '₫300,000,000',
    popularCities: ['Hải Châu', 'Thanh Khê', 'Sơn Trà', 'Ngũ Hành Sơn', 'Cẩm Lệ'],
    regulations: [
      'Maximum APR: 20% for licensed institutions per SBV Decision 546/2014',
      'Borrowers must be 18+ with valid ID and proof of income',
      'Licensed lenders must disclose all fees upfront',
      'Consumer protection under Law on Credit Institutions 2010',
      'Local residency proof may be required',
    ],
    regulationsVi: [
      'Lãi suất tối đa: 20%/năm cho tổ chức được cấp phép theo Quyết định 546/2014 của NHNN',
      'Người vay phải từ 18 tuổi trở lên với CMND/CCCD và chứng minh thu nhập',
      'Tổ chức cho vay phải công khai mọi phí trước',
      'Bảo vệ người tiêu dùng theo Luật Tổ chức tín dụng 2010',
      'Có thể yêu cầu chứng minh cư trú tại địa phương',
    ],
  },
  {
    name: 'Hai Phong',
    nameVi: 'Hải Phòng',
    slug: 'hai-phong',
    description: 'Major northern port city with access to regional and national lenders.',
    descriptionVi: 'Thành phố cảng lớn phía Bắc với tiếp cận đến tổ chức cho vay khu vực và quốc gia.',
    population: '2.1 million',
    avgLoanAmount: '₫90,000,000',
    avgRate: '13-19% per year',
    maxLoanAmount: '₫250,000,000',
    popularCities: ['Hồng Bàng', 'Lê Chân', 'Ngô Quyền', 'Kiến An', 'Hải An'],
    regulations: [
      'Maximum APR: 20% for licensed institutions per SBV Decision 546/2014',
      'Borrowers must be 18+ with valid ID and proof of income',
      'Licensed lenders must disclose all fees upfront',
      'Consumer protection under Law on Credit Institutions 2010',
      'Credit bureau checks required for larger loans',
    ],
    regulationsVi: [
      'Lãi suất tối đa: 20%/năm cho tổ chức được cấp phép theo Quyết định 546/2014 của NHNN',
      'Người vay phải từ 18 tuổi trở lên với CMND/CCCD và chứng minh thu nhập',
      'Tổ chức cho vay phải công khai mọi phí trước',
      'Bảo vệ người tiêu dùng theo Luật Tổ chức tín dụng 2010',
      'Kiểm tra tín dụng yêu cầu cho khoản vay lớn',
    ],
  },
  {
    name: 'Can Tho',
    nameVi: 'Cần Thơ',
    slug: 'can-tho',
    description: 'Mekong Delta hub with agricultural loan programs and consumer lending.',
    descriptionVi: 'Trung tâm đồng bằng sông Cửu Long với chương trình vay nông nghiệp và cho vay tiêu dùng.',
    population: '1.3 million',
    avgLoanAmount: '₫80,000,000',
    avgRate: '14-20% per year',
    maxLoanAmount: '₫200,000,000',
    popularCities: ['Ninh Kiều', 'Cái Răng', 'Bình Thủy', 'Ô Môn', 'Thốt Nốt'],
    regulations: [
      'Maximum APR: 20% for licensed institutions per SBV Decision 546/2014',
      'Borrowers must be 18+ with valid ID and proof of income',
      'Licensed lenders must disclose all fees upfront',
      'Consumer protection under Law on Credit Institutions 2010',
      'Special agricultural loan programs available',
    ],
    regulationsVi: [
      'Lãi suất tối đa: 20%/năm cho tổ chức được cấp phép theo Quyết định 546/2014 của NHNN',
      'Người vay phải từ 18 tuổi trở lên với CMND/CCCD và chứng minh thu nhập',
      'Tổ chức cho vay phải công khai mọi phí trước',
      'Bảo vệ người tiêu dùng theo Luật Tổ chức tín dụng 2010',
      'Có chương trình vay nông nghiệp đặc biệt',
    ],
  },
]

export function getVietnamRegionBySlug(slug: string): VietnamRegion | undefined {
  return vietnamRegions.find((region) => region.slug === slug)
}

export function getAllVietnamRegionSlugs(): Array<{ region: string }> {
  return vietnamRegions.map((region) => ({ region: region.slug }))
}
