import { DEFAULT_LOCALE, Locale } from '@/lib/i18n'

interface NavigationLabels {
	brand: string
	home: string
	countries: string
	aiMatching: string
	usaHub: string
	canadaHub: string
	czHub: string
	blog: string
	apply: string
	languageSwitch: string
	languageSwitchAria: string
}

interface FooterLink {
	label: string
	href: string
}

interface FooterSection {
	heading: string
	links: FooterLink[]
}

interface FooterLabels {
	description: string
	sections: FooterSection[]
	disclosures: string[]
	legal: string
}

interface CommonLabels {
	home: string
	states: string
	cities: string
	blog: string
	faq: string
	contact: string
	searchPlaceholder: string
	regionFilterLabel: string
	allRegionsOption: string
	regionOptions: Record<string, string>
	applyCta: string
	leadGenDisclosure: string
}

const navigationTranslations: Record<Locale, NavigationLabels> = {
	en: {
		brand: 'Loan AI Portal',
		home: 'Global Home',
		countries: 'Countries',
		aiMatching: 'AI Matching',
		usaHub: 'USA Loans',
		canadaHub: 'Canada Loans',
		czHub: 'Czech Republic',
		blog: 'Blog',
		apply: 'Apply Now',
		languageSwitch: 'Español',
		languageSwitchAria: 'Switch to Spanish',
	},
	es: {
		brand: 'Portal de Préstamos IA',
		home: 'Inicio Global',
		countries: 'Países',
		aiMatching: 'Coincidencia IA',
		usaHub: 'Estados Unidos',
		canadaHub: 'Canadá',
		czHub: 'República Checa',
		blog: 'Blog',
		apply: 'Solicitar Ahora',
		languageSwitch: 'Čeština',
		languageSwitchAria: 'Cambiar a checo',
	},
	cs: {
		brand: 'Loan AI Portál',
		home: 'Globální přehled',
		countries: 'Země',
		aiMatching: 'AI párování',
		usaHub: 'USA půjčky',
		canadaHub: 'Kanada půjčky',
		czHub: 'Česká republika',
		blog: 'Blog',
		apply: 'Požádat o úvěr',
		languageSwitch: 'English',
		languageSwitchAria: 'Přepnout do angličtiny',
	},
}

const footerTranslations: Record<Locale, FooterLabels> = {
	en: {
		description:
			'Fast, secure personal loans with AI-powered matching. Compare rates from top lenders and get a 2-minute pre-qualification with a soft credit pull.',
		sections: [
			{
				heading: 'Company',
				links: [
					{ label: 'About Us', href: '/about' },
					{ label: 'Contact', href: '/contact' },
					{ label: 'Privacy Policy', href: '/privacy' },
					{ label: 'Terms of Service', href: '/terms' },
				],
			},
			{
				heading: 'Global Coverage',
				links: [
					{ label: 'Global Homepage', href: '/#global-coverage' },
					{ label: 'United States (USA)', href: '/us' },
					{ label: 'Czech Republic (Česko)', href: '/cz' },
				],
			},
			{
				heading: 'USA States',
				links: [
					{ label: 'California Loans', href: '/us/states/california' },
					{ label: 'Texas Loans', href: '/us/states/texas' },
					{ label: 'Florida Loans', href: '/us/states/florida' },
					{ label: 'New York Loans', href: '/us/states/new-york' },
				],
			},
			{
				heading: 'USA Cities',
				links: [
					{ label: 'Los Angeles, CA', href: '/us/cities/california/los-angeles' },
					{ label: 'Houston, TX', href: '/us/cities/texas/houston' },
					{ label: 'Dallas, TX', href: '/us/cities/texas/dallas' },
					{ label: 'Orlando, FL', href: '/us/cities/florida/orlando' },
				],
			},
			{
				heading: 'Resources',
				links: [
					{ label: 'Blog', href: '/blog' },
					{ label: 'USA States Index', href: '/us/states' },
					{ label: 'USA Cities Index', href: '/us/cities' },
					{ label: 'FAQ', href: '/faq' },
					{ label: 'Borrower Outcomes', href: '/disclosures/borrower-outcomes' },
					{ label: 'Licenses', href: '/licenses' },
				],
			},
		],
		disclosures: [
			"Important Disclosures: This website does not constitute an offer or solicitation to lend. The operator of this website is NOT A LENDER, does not make loan or credit decisions, and does not broker loans. The operator of this website is not an agent or representative of any lender. We are a lead generator. This website's aim is to provide lenders with information about prospective consumer borrowers. We are compensated by lenders for this service.",
			'Information about loans: Not all lenders can provide loan amounts up to the maximum amount that is advertised. The maximum amount you may borrow from any lender is determined by the lender based on its own policies, which can vary, and on your creditworthiness. The time to receive loan proceeds varies among lenders, and in some circumstances faxing of loan request form materials and other documents may be required. Submitting your information online does not guarantee that you will be approved for a loan.',
			"Every lender has its own terms and conditions and renewal policy, which may differ from lender to lender. You should review your lender's terms and renewal policy before signing the loan agreement. Late payments of loans may result in additional fees or collection activities, or both.",
			'By using this website or services, you represent and warrant that you are at least 18 years old, that you are a resident of the United States, and that you are not a resident of any state where the loan you are applying for is illegal.',
		],
		legal: '© 2025 Loan AI Portal. All rights reserved.',
	},
	es: {
		description:
			'Préstamos personales rápidos y seguros con coincidencia impulsada por IA. Compara tasas de los principales prestamistas y obtén una precalificación en 2 minutos mediante consulta blanda.',
		sections: [
			{
				heading: 'Empresa',
				links: [
					{ label: 'Sobre Nosotros', href: '/about' },
					{ label: 'Contacto', href: '/contact' },
					{ label: 'Política de Privacidad', href: '/privacy' },
					{ label: 'Términos del Servicio', href: '/terms' },
				],
			},
			{
				heading: 'Cobertura Global',
				links: [
						{ label: 'Inicio Global', href: '/es#global-coverage' },
						{ label: 'Estados Unidos (USA)', href: '/us' },
						{ label: 'República Checa (Česko)', href: '/cz' },
				],
			},
			{
				heading: 'Estados de EE. UU.',
				links: [
					{ label: 'Préstamos en California', href: '/states/california' },
					{ label: 'Préstamos en Texas', href: '/states/texas' },
					{ label: 'Préstamos en Florida', href: '/states/florida' },
					{ label: 'Préstamos en Nueva York', href: '/states/new-york' },
				],
			},
			{
				heading: 'Ciudades de EE. UU.',
				links: [
					{ label: 'Los Ángeles, CA', href: '/cities/california/los-angeles' },
					{ label: 'Houston, TX', href: '/cities/texas/houston' },
					{ label: 'Dallas, TX', href: '/cities/texas/dallas' },
					{ label: 'Orlando, FL', href: '/cities/florida/orlando' },
				],
			},
			{
				heading: 'Recursos',
				links: [
					{ label: 'Blog', href: '/blog' },
					{ label: 'Estados', href: '/states' },
					{ label: 'Preguntas Frecuentes', href: '/faq' },
					{ label: 'Resultados de Prestatarios', href: '/disclosures/borrower-outcomes' },
					{ label: 'Aviso Legal', href: '/disclaimer' },
					{ label: 'Licencias', href: '/licenses' },
				],
			},
		],
		disclosures: [
			'Divulgaciones importantes: Este sitio web no constituye una oferta ni una solicitud de préstamo. El operador de este sitio web NO ES UN PRESTAMISTA, no toma decisiones de préstamo ni de crédito, y no intermedia préstamos. El operador de este sitio web no es un agente ni un representante de ningún prestamista. Somos un generador de clientes potenciales. El objetivo de este sitio web es proporcionar a los prestamistas información sobre posibles prestatarios consumidores. Recibimos compensación de los prestamistas por este servicio.',
			'Información sobre los préstamos: No todos los prestamistas pueden ofrecer montos de préstamo hasta el máximo anunciado. El monto máximo que puede solicitar con cualquier prestamista se determina de acuerdo con las políticas del prestamista, que pueden variar, y con su solvencia crediticia. El tiempo para recibir los fondos del préstamo varía entre prestamistas y, en algunas circunstancias, puede requerirse el envío por fax de formularios de solicitud u otros documentos. Enviar su información en línea no garantiza que se le apruebe un préstamo.',
			'Cada prestamista tiene sus propios términos y condiciones y política de renovación, que pueden diferir de un prestamista a otro. Debe revisar los términos y la política de renovación de su prestamista antes de firmar el contrato de préstamo. Los pagos tardíos de los préstamos pueden resultar en cargos adicionales o en actividades de cobro, o en ambos.',
			'Al usar este sitio web o nuestros servicios, usted declara y garantiza que tiene al menos 18 años, que es residente de los Estados Unidos y que no reside en ningún estado donde el préstamo que está solicitando sea ilegal.',
		],
		legal: '© 2025 Portal de Préstamos IA. Todos los derechos reservados.',
	},
	cs: {
		description:
			'Rychlé a bezpečné osobní půjčky s AI párováním. Porovnejte nabídky licencovaných poskytovatelů a získejte nezávazné posouzení během 2 minut.',
		sections: [
			{
				heading: 'Společnost',
				links: [
					{ label: 'O nás', href: '/about' },
					{ label: 'Kontakt', href: '/contact' },
					{ label: 'Ochrana soukromí', href: '/privacy' },
					{ label: 'Obchodní podmínky', href: '/terms' },
				],
			},
			{
				heading: 'České kraje',
				links: [
					{ label: 'Hlavní město Praha', href: '/cz/regions/praha' },
					{ label: 'Středočeský kraj', href: '/cz/regions/stredocesky' },
					{ label: 'Jihočeský kraj', href: '/cz/regions/jihocesky' },
					{ label: 'Plzeňský kraj', href: '/cz/regions/plzensky' },
				],
			},
			{
				heading: 'Rychlé odkazy',
				links: [
					{ label: 'Česká republika - přehled', href: '/cz' },
					{ label: 'Požádat o půjčku', href: '/cz/apply' },
					{ label: 'Jak to funguje', href: '/cz#regional-guides' },
					{ label: 'Licencovaní poskytovatelé', href: '/cz#regional-guides' },
				],
			},
			{
				heading: 'Globální nabídka',
				links: [
					{ label: 'Globální přehled', href: '/#global-coverage' },
					{ label: 'Spojené státy (USA)', href: '/us' },
					{ label: 'Česká republika', href: '/cz' },
				],
			},
			{
				heading: 'Zdroje',
				links: [
					{ label: 'Blog', href: '/blog' },
					{ label: 'FAQ', href: '/faq' },
					{ label: 'Vyloučení odpovědnosti', href: '/disclaimer' },
					{ label: 'Licencování', href: '/licenses' },
					{ label: 'ČNB registr poskytovatelů', href: 'https://www.cnb.cz' },
				],
			},
		],
		disclosures: [
			'Loan AI Portál je lead generátor registrovaný u ČNB. Nejsme věřiteli a nerozhodujeme o úvěrech. Vaše údaje sdílíme pouze s licencovanými partnery za účelem zpracování žádosti.',
			'Ne všichni poskytovatelé nabídnou maximální částku úvěru. Reálné podmínky se liší podle bonity žadatele a interních postupů věřitele. Připsání prostředků může vyžadovat doplnění dokumentace.',
			'Každý poskytovatel má vlastní smluvní podmínky a politiku prodloužení. Před podpisem smlouvy si je pečlivě prostudujte. Prodlení se splátkami může vést k sankcím nebo postoupení pohledávky.',
			'Používáním tohoto webu potvrzujete, že vám bylo minimálně 18 let a že rozumíte povinnostem vyplývajícím ze zákona č. 257/2016 Sb. o spotřebitelském úvěru.',
		],
		legal: '© 2025 Loan AI Portál. Všechna práva vyhrazena.',
	},
}

const commonTranslations: Record<Locale, CommonLabels> = {
	en: {
		home: 'Home',
		states: 'States',
		cities: 'Cities',
		blog: 'Blog',
		faq: 'FAQ',
		contact: 'Contact',
		searchPlaceholder: 'Search by state, abbreviation, or city…',
		regionFilterLabel: 'Filter by region',
		allRegionsOption: 'All Regions',
		regionOptions: {
			Northeast: 'Northeast',
			Southeast: 'Southeast',
			Midwest: 'Midwest',
			Southwest: 'Southwest',
			West: 'West',
		},
		applyCta: 'Apply Now',
		leadGenDisclosure:
			'We are a lead generator, not a lender. We share your data with lenders so they can consider your request.',
	},
	es: {
		home: 'Inicio',
		states: 'Estados',
		cities: 'Ciudades',
		blog: 'Blog',
		faq: 'Preguntas Frecuentes',
		contact: 'Contacto',
		searchPlaceholder: 'Busca por estado, abreviación o ciudad…',
		regionFilterLabel: 'Filtrar por región',
		allRegionsOption: 'Todas las regiones',
		regionOptions: {
			Northeast: 'Noreste',
			Southeast: 'Sureste',
			Midwest: 'Medio Oeste',
			Southwest: 'Suroeste',
			West: 'Oeste',
		},
		applyCta: 'Solicitar ahora',
		leadGenDisclosure:
			'Somos un generador de clientes potenciales, no un prestamista. Compartimos sus datos con los prestamistas para que evalúen su solicitud.',
	},
	cs: {
		home: 'Domů',
		states: 'Kraje',
		cities: 'Města',
		blog: 'Blog',
		faq: 'FAQ',
		contact: 'Kontakt',
		searchPlaceholder: 'Hledejte podle kraje nebo města…',
		regionFilterLabel: 'Filtrovat podle regionu',
		allRegionsOption: 'Všechny regiony',
		regionOptions: {
			Northeast: 'Severovýchod USA',
			Southeast: 'Jihovýchod USA',
			Midwest: 'Středozápad USA',
			Southwest: 'Jihozápad USA',
			West: 'Západ USA',
		},
		applyCta: 'Požádat o úvěr',
		leadGenDisclosure:
			'Jsme lead generátor, nikoli přímý poskytovatel. Vaše údaje bezpečně sdílíme s licencovanými partnery.',
	},
}

export function getNavigationLabels(locale: Locale): NavigationLabels {
	return navigationTranslations[locale] ?? navigationTranslations[DEFAULT_LOCALE]
}

export function getFooterLabels(locale: Locale): FooterLabels {
	return footerTranslations[locale] ?? footerTranslations[DEFAULT_LOCALE]
}

export function getCommonLabels(locale: Locale): CommonLabels {
	return commonTranslations[locale] ?? commonTranslations[DEFAULT_LOCALE]
}

export type { Locale } from '@/lib/i18n'


