/**
 * Vietnam Cities Data
 * Defines cities/districts with loan information
 */

export interface VietnamCity {
  name: string
  nameVi: string
  slug: string
  region: string // Parent region slug
  regionName: string
  regionNameVi: string
  description: string
  descriptionVi: string
  population: number
  avgLoanAmount: string
  avgRate: string
  nearbyLenders: number
  popularLoanTypes: string[]
  popularLoanTypesVi: string[]
  coordinates: {
    lat: number
    lng: number
  }
}

export const vietnamCities: VietnamCity[] = [
  // Hanoi districts
  {
    name: 'Ba Dinh District',
    nameVi: 'Quận Ba Đình',
    slug: 'ba-dinh',
    region: 'hanoi',
    regionName: 'Hanoi',
    regionNameVi: 'Hà Nội',
    description: 'Central district with government offices and financial institutions. Premium loan options available.',
    descriptionVi: 'Quận trung tâm với văn phòng chính phủ và tổ chức tài chính. Có nhiều lựa chọn vay cao cấp.',
    population: 222000,
    avgLoanAmount: '₫180,000,000',
    avgRate: '11-17% per year',
    nearbyLenders: 45,
    popularLoanTypes: ['Personal Loans', 'Home Improvement', 'Debt Consolidation', 'Emergency Loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Sửa chữa nhà', 'Hợp nhất nợ', 'Vay khẩn cấp'],
    coordinates: { lat: 21.0341, lng: 105.8198 },
  },
  {
    name: 'Hoan Kiem District',
    nameVi: 'Quận Hoàn Kiếm',
    slug: 'hoan-kiem',
    region: 'hanoi',
    regionName: 'Hanoi',
    regionNameVi: 'Hà Nội',
    description: 'Historic center with numerous banks and lending institutions. High lender density.',
    descriptionVi: 'Trung tâm lịch sử với nhiều ngân hàng và tổ chức cho vay. Mật độ tổ chức cao.',
    population: 165000,
    avgLoanAmount: '₫170,000,000',
    avgRate: '11-18% per year',
    nearbyLenders: 52,
    popularLoanTypes: ['Personal Loans', 'Business Loans', 'Education Loans', 'Medical Loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay kinh doanh', 'Vay học tập', 'Vay y tế'],
    coordinates: { lat: 21.0285, lng: 105.8542 },
  },
  {
    name: 'Cau Giay District',
    nameVi: 'Quận Cầu Giấy',
    slug: 'cau-giay',
    region: 'hanoi',
    regionName: 'Hanoi',
    regionNameVi: 'Hà Nội',
    description: 'Modern district with tech companies and young professionals. Competitive lending market.',
    descriptionVi: 'Quận hiện đại với công ty công nghệ và chuyên gia trẻ. Thị trường cho vay cạnh tranh.',
    population: 280000,
    avgLoanAmount: '₫150,000,000',
    avgRate: '12-18% per year',
    nearbyLenders: 38,
    popularLoanTypes: ['Personal Loans', 'Vehicle Loans', 'Home Improvement', 'Wedding Loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay xe', 'Sửa chữa nhà', 'Vay cưới'],
    coordinates: { lat: 21.0333, lng: 105.7947 },
  },
  
  // Ho Chi Minh City districts
  {
    name: 'District 1',
    nameVi: 'Quận 1',
    slug: 'district-1',
    region: 'ho-chi-minh-city',
    regionName: 'Ho Chi Minh City',
    regionNameVi: 'Thành phố Hồ Chí Minh',
    description: 'Downtown financial district with international banks and lowest rates in Vietnam.',
    descriptionVi: 'Khu tài chính trung tâm với ngân hàng quốc tế và lãi suất thấp nhất Việt Nam.',
    population: 204000,
    avgLoanAmount: '₫220,000,000',
    avgRate: '10-16% per year',
    nearbyLenders: 68,
    popularLoanTypes: ['Personal Loans', 'Business Loans', 'Luxury Loans', 'Investment Loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay kinh doanh', 'Vay cao cấp', 'Vay đầu tư'],
    coordinates: { lat: 10.7769, lng: 106.7009 },
  },
  {
    name: 'District 3',
    nameVi: 'Quận 3',
    slug: 'district-3',
    region: 'ho-chi-minh-city',
    regionName: 'Ho Chi Minh City',
    regionNameVi: 'Thành phố Hồ Chí Minh',
    description: 'Residential and commercial area with diverse loan products for all income levels.',
    descriptionVi: 'Khu dân cư và thương mại với sản phẩm vay đa dạng cho mọi mức thu nhập.',
    population: 190000,
    avgLoanAmount: '₫180,000,000',
    avgRate: '11-17% per year',
    nearbyLenders: 54,
    popularLoanTypes: ['Personal Loans', 'Home Improvement', 'Debt Consolidation', 'Education Loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Sửa chữa nhà', 'Hợp nhất nợ', 'Vay học tập'],
    coordinates: { lat: 10.7836, lng: 106.6879 },
  },
  {
    name: 'Binh Thanh District',
    nameVi: 'Quận Bình Thạnh',
    slug: 'binh-thanh',
    region: 'ho-chi-minh-city',
    regionName: 'Ho Chi Minh City',
    regionNameVi: 'Thành phố Hồ Chí Minh',
    description: 'Growing district with increasing number of lenders. Good options for working families.',
    descriptionVi: 'Quận đang phát triển với số lượng tổ chức cho vay tăng. Lựa chọn tốt cho gia đình lao động.',
    population: 465000,
    avgLoanAmount: '₫160,000,000',
    avgRate: '12-18% per year',
    nearbyLenders: 42,
    popularLoanTypes: ['Personal Loans', 'Vehicle Loans', 'Emergency Loans', 'Medical Loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay xe', 'Vay khẩn cấp', 'Vay y tế'],
    coordinates: { lat: 10.8055, lng: 106.7122 },
  },
  {
    name: 'Tan Binh District',
    nameVi: 'Quận Tân Bình',
    slug: 'tan-binh',
    region: 'ho-chi-minh-city',
    regionName: 'Ho Chi Minh City',
    regionNameVi: 'Thành phố Hồ Chí Minh',
    description: 'Airport district with business and personal loan options. Fast approval times.',
    descriptionVi: 'Quận sân bay với lựa chọn vay kinh doanh và cá nhân. Thời gian duyệt nhanh.',
    population: 426000,
    avgLoanAmount: '₫170,000,000',
    avgRate: '11-17% per year',
    nearbyLenders: 48,
    popularLoanTypes: ['Personal Loans', 'Business Loans', 'Home Improvement', 'Vehicle Loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay kinh doanh', 'Sửa chữa nhà', 'Vay xe'],
    coordinates: { lat: 10.8008, lng: 106.6525 },
  },

  // Da Nang districts
  {
    name: 'Hai Chau District',
    nameVi: 'Quận Hải Châu',
    slug: 'hai-chau',
    region: 'da-nang',
    regionName: 'Da Nang',
    regionNameVi: 'Đà Nẵng',
    description: 'Central district with major banks and competitive rates. Tourism sector lending available.',
    descriptionVi: 'Quận trung tâm với ngân hàng lớn và lãi suất cạnh tranh. Có cho vay lĩnh vực du lịch.',
    population: 210000,
    avgLoanAmount: '₫120,000,000',
    avgRate: '12-18% per year',
    nearbyLenders: 32,
    popularLoanTypes: ['Personal Loans', 'Business Loans', 'Tourism Loans', 'Home Improvement'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay kinh doanh', 'Vay du lịch', 'Sửa chữa nhà'],
    coordinates: { lat: 16.0544, lng: 108.2022 },
  },
  {
    name: 'Thanh Khe District',
    nameVi: 'Quận Thanh Khê',
    slug: 'thanh-khe',
    region: 'da-nang',
    regionName: 'Da Nang',
    regionNameVi: 'Đà Nẵng',
    description: 'Residential district with family-focused loan products and flexible terms.',
    descriptionVi: 'Quận dân cư với sản phẩm vay hướng đến gia đình và điều khoản linh hoạt.',
    population: 180000,
    avgLoanAmount: '₫100,000,000',
    avgRate: '13-19% per year',
    nearbyLenders: 28,
    popularLoanTypes: ['Personal Loans', 'Education Loans', 'Vehicle Loans', 'Medical Loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay học tập', 'Vay xe', 'Vay y tế'],
    coordinates: { lat: 16.0607, lng: 108.1851 },
  },

  // Hai Phong districts
  {
    name: 'Hong Bang District',
    nameVi: 'Quận Hồng Bàng',
    slug: 'hong-bang',
    region: 'hai-phong',
    regionName: 'Hai Phong',
    regionNameVi: 'Hải Phòng',
    description: 'Historic port district with established banking presence and competitive rates.',
    descriptionVi: 'Quận cảng lịch sử với các ngân hàng lâu đời và lãi suất cạnh tranh.',
    population: 120000,
    avgLoanAmount: '₫95,000,000',
    avgRate: '13-19% per year',
    nearbyLenders: 25,
    popularLoanTypes: ['Personal Loans', 'Business Loans', 'Vehicle Loans', 'Emergency Loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay kinh doanh', 'Vay xe', 'Vay khẩn cấp'],
    coordinates: { lat: 20.8608, lng: 106.6779 },
  },
  {
    name: 'Le Chan District',
    nameVi: 'Quận Lê Chân',
    slug: 'le-chan',
    region: 'hai-phong',
    regionName: 'Hai Phong',
    regionNameVi: 'Hải Phòng',
    description: 'Commercial center with diverse lending options for businesses and individuals.',
    descriptionVi: 'Trung tâm thương mại với lựa chọn cho vay đa dạng cho doanh nghiệp và cá nhân.',
    population: 250000,
    avgLoanAmount: '₫90,000,000',
    avgRate: '13-19% per year',
    nearbyLenders: 30,
    popularLoanTypes: ['Personal Loans', 'Business Loans', 'Home Improvement', 'Debt Consolidation'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay kinh doanh', 'Sửa chữa nhà', 'Hợp nhất nợ'],
    coordinates: { lat: 20.8469, lng: 106.6856 },
  },

  // Can Tho districts
  {
    name: 'Ninh Kieu District',
    nameVi: 'Quận Ninh Kiều',
    slug: 'ninh-kieu',
    region: 'can-tho',
    regionName: 'Can Tho',
    regionNameVi: 'Cần Thơ',
    description: 'City center with agricultural and consumer lending. Special programs for farmers.',
    descriptionVi: 'Trung tâm thành phố với cho vay nông nghiệp và tiêu dùng. Chương trình đặc biệt cho nông dân.',
    population: 210000,
    avgLoanAmount: '₫85,000,000',
    avgRate: '14-20% per year',
    nearbyLenders: 22,
    popularLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Business Loans', 'Vehicle Loans'],
    popularLoanTypesVi: ['Vay tiêu dùng', 'Vay nông nghiệp', 'Vay kinh doanh', 'Vay xe'],
    coordinates: { lat: 10.0452, lng: 105.7469 },
  },
  {
    name: 'Cai Rang District',
    nameVi: 'Quận Cái Răng',
    slug: 'cai-rang',
    region: 'can-tho',
    regionName: 'Can Tho',
    regionNameVi: 'Cần Thơ',
    description: 'Riverside district with agricultural and business loan programs. Growing market.',
    descriptionVi: 'Quận ven sông với chương trình vay nông nghiệp và kinh doanh. Thị trường đang phát triển.',
    population: 95000,
    avgLoanAmount: '₫75,000,000',
    avgRate: '14-20% per year',
    nearbyLenders: 18,
    popularLoanTypes: ['Agricultural Loans', 'Personal Loans', 'Business Loans', 'Emergency Loans'],
    popularLoanTypesVi: ['Vay nông nghiệp', 'Vay tiêu dùng', 'Vay kinh doanh', 'Vay khẩn cấp'],
    coordinates: { lat: 10.0369, lng: 105.7831 },
  },
]

export function getVietnamCityBySlug(slug: string): VietnamCity | undefined {
  return vietnamCities.find((city) => city.slug === slug)
}

export function getAllVietnamCitySlugs(): Array<{ region: string; city: string }> {
  return vietnamCities.map((city) => ({
    region: city.region,
    city: city.slug,
  }))
}

export function getVietnamCitiesByRegion(regionSlug: string): VietnamCity[] {
  return vietnamCities.filter((city) => city.region === regionSlug)
}

export function getNearbyVietnamCities(citySlug: string, limit: number = 6): VietnamCity[] {
  const city = getVietnamCityBySlug(citySlug)
  if (!city) return []

  // Get cities from the same region first
  const sameCities = vietnamCities
    .filter((c) => c.region === city.region && c.slug !== citySlug)
    .slice(0, limit)

  if (sameCities.length >= limit) {
    return sameCities
  }

  // If not enough cities in same region, add cities from other regions
  const otherCities = vietnamCities
    .filter((c) => c.region !== city.region)
    .slice(0, limit - sameCities.length)

  return [...sameCities, ...otherCities]
}
