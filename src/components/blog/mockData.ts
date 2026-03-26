export interface Category {
	slug: string;
	name: string;
	description: string;
	seoIntro: string;
}

export interface TocItem {
	id: string;
	label: string;
}

export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	intro: string;
	category: string;
	categorySlug: string;
	publishedAt: string;
	featured?: boolean;
	toc: TocItem[];
	sections: {
		id: string;
		title: string;
		content: string[];
	}[];
	practicalApplication: string[];
	productConnection: string[];
	relatedSlugs: string[];
}

export const primaryCategories: Category[] = [
	{
		slug: 'exemplos-de-okrs',
		name: 'Exemplos de OKRs',
		description: 'Modelos prontos para diferentes contextos de negocio.',
		seoIntro:
			'Veja exemplos de OKRs para produto, vendas, marketing e operacoes com estrutura clara para adaptacao rapida.',
	},
	{
		slug: 'dores-e-dificuldades',
		name: 'Dores e dificuldades',
		description: 'Principais gargalos ao implementar OKRs.',
		seoIntro:
			'Entenda as dores mais comuns na gestao por objetivos e como destravar foco, alinhamento e execucao.',
	},
	{
		slug: 'beneficios-de-okr',
		name: 'Beneficios de OKR',
		description: 'Impacto real de OKRs na performance dos times.',
		seoIntro:
			'Descubra os beneficios praticos de usar OKRs para melhorar priorizacao, transparencia e resultados.',
	},
	{
		slug: 'estudos-de-caso',
		name: 'Estudos de caso',
		description: 'Licoes aplicadas por equipes orientadas a metas.',
		seoIntro:
			'Acesse estudos de caso de empresas que usam OKRs para ganhar previsibilidade e acelerar crescimento.',
	},
	{
		slug: 'comparacao-de-ferramentas',
		name: 'Comparacao de ferramentas',
		description: 'Analises para escolher a ferramenta certa.',
		seoIntro:
			'Compare ferramentas de OKR e entenda criterios de escolha para escalar sua operacao com eficiencia.',
	},
];

export const blogPosts: BlogPost[] = [
	{
		slug: 'exemplos-de-okrs-para-times-de-produto',
		title: 'Exemplos de OKRs para times de produto',
		description: 'Como estruturar objetivos e resultados-chave para acelerar entrega de valor.',
		intro:
			'Times de produto precisam de clareza sobre impacto. Neste guia, voce encontra exemplos praticos para iniciar rapido.',
		category: 'Exemplos de OKRs',
		categorySlug: 'exemplos-de-okrs',
		publishedAt: '2026-03-20',
		featured: true,
		toc: [
			{ id: 'contexto', label: 'Contexto do desafio' },
			{ id: 'modelo', label: 'Modelo de OKR aplicado' },
			{ id: 'erros', label: 'Erros que reduzem resultado' },
		],
		sections: [
			{
				id: 'contexto',
				title: 'Contexto do desafio',
				content: [
					'Quando prioridades mudam toda semana, o time perde consistencia. O primeiro passo e definir um objetivo trimestral com foco em outcome.',
				],
			},
			{
				id: 'modelo',
				title: 'Modelo de OKR aplicado',
				content: [
					'Objetivo: aumentar a ativacao de usuarios no produto.',
					'Resultados-chave: elevar taxa de onboarding concluido de 38% para 55%, reduzir tempo para primeiro valor de 7 para 3 dias.',
				],
			},
			{
				id: 'erros',
				title: 'Erros que reduzem resultado',
				content: [
					'Confundir tarefa com resultado-chave e o erro mais comum. KR bom precisa ser mensuravel e conectado ao impacto do negocio.',
				],
			},
		],
		practicalApplication: [
			'Escolha um objetivo unico para os proximos 90 dias.',
			'Defina ate 3 KRs mensuraveis com base historica.',
			'Rode revisao semanal com foco em aprendizado.',
		],
		productConnection: [
			'O OKR Brain transforma objetivos em templates acionaveis.',
			'A IA sugere KRs com base no contexto do seu time.',
		],
		relatedSlugs: ['erros-comuns-na-implementacao-de-okrs', 'beneficios-de-okr-para-alinhamento'],
	},
	{
		slug: 'erros-comuns-na-implementacao-de-okrs',
		title: 'Erros comuns na implementacao de OKRs',
		description: 'As falhas que mais travam a execucao e como evita-las.',
		intro: 'Implementar OKRs sem metodo gera frustracao. Identifique os erros recorrentes e corrija antes de escalar.',
		category: 'Dores e dificuldades',
		categorySlug: 'dores-e-dificuldades',
		publishedAt: '2026-03-18',
		featured: true,
		toc: [
			{ id: 'sinais', label: 'Sinais de que o processo falhou' },
			{ id: 'causas', label: 'Causas mais frequentes' },
			{ id: 'correcao', label: 'Plano de correcao' },
		],
		sections: [
			{
				id: 'sinais',
				title: 'Sinais de que o processo falhou',
				content: ['Reunioes sem decisao, KRs estagnados e falta de ownership indicam problema de desenho e cadencia.'],
			},
			{
				id: 'causas',
				title: 'Causas mais frequentes',
				content: ['Falta de baseline, excesso de objetivos e ausencia de ritual semanal estao entre as principais causas.'],
			},
			{
				id: 'correcao',
				title: 'Plano de correcao',
				content: ['Comece reduzindo escopo e conectando cada KR a uma metrica operacional acompanhada no dia a dia.'],
			},
		],
		practicalApplication: [
			'Faça uma auditoria dos KRs atuais.',
			'Elimine indicadores que nao se conectam ao objetivo.',
			'Defina revisao com responsavel claro.',
		],
		productConnection: [
			'No OKR Brain, voce recebe alertas quando um KR fica sem progresso.',
			'A plataforma ajuda a manter cadencia com playbooks automatizados.',
		],
		relatedSlugs: ['exemplos-de-okrs-para-times-de-produto', 'beneficios-de-okr-para-alinhamento'],
	},
	{
		slug: 'beneficios-de-okr-para-alinhamento',
		title: 'Beneficios de OKR para alinhamento entre times',
		description: 'Por que OKRs melhoram foco coletivo e colaboracao.',
		intro: 'Empresas em crescimento sofrem com prioridades conflitantes. OKRs criam linguagem unica para alinhamento.',
		category: 'Beneficios de OKR',
		categorySlug: 'beneficios-de-okr',
		publishedAt: '2026-03-15',
		featured: false,
		toc: [
			{ id: 'valor', label: 'Valor para a organizacao' },
			{ id: 'rituais', label: 'Rituais de acompanhamento' },
			{ id: 'escala', label: 'Como escalar com consistencia' },
		],
		sections: [
			{
				id: 'valor',
				title: 'Valor para a organizacao',
				content: ['Com objetivos compartilhados, cada time entende o impacto da propria entrega no resultado global.'],
			},
			{
				id: 'rituais',
				title: 'Rituais de acompanhamento',
				content: ['Check-ins semanais curtos garantem correcoes de rota antes que o trimestre seja comprometido.'],
			},
			{
				id: 'escala',
				title: 'Como escalar com consistencia',
				content: ['Padronize templates de OKR por area e mantenha historico de aprendizagem para acelerar novos ciclos.'],
			},
		],
		practicalApplication: [
			'Defina uma metrica norte para cada squad.',
			'Conecte objetivos taticos ao objetivo corporativo.',
			'Publique atualizacoes em canal unico para transparencia.',
		],
		productConnection: [
			'O OKR Brain centraliza metas, progresso e contexto em um unico fluxo.',
			'A IA ajuda a alinhar objetivos entre areas sem retrabalho.',
		],
		relatedSlugs: ['exemplos-de-okrs-para-times-de-produto'],
	},
	{
		slug: 'estudo-de-caso-okr-em-saas-b2b',
		title: 'Estudo de caso: OKR em SaaS B2B',
		description: 'Como uma equipe reduziu churn usando metas orientadas a resultado.',
		intro: 'Um caso pratico de uso de OKR para alinhar produto, marketing e CS em torno de retencao.',
		category: 'Estudos de caso',
		categorySlug: 'estudos-de-caso',
		publishedAt: '2026-03-12',
		toc: [
			{ id: 'cenario', label: 'Cenario inicial' },
			{ id: 'okrs', label: 'OKRs definidos' },
			{ id: 'resultado', label: 'Resultados obtidos' },
		],
		sections: [
			{ id: 'cenario', title: 'Cenario inicial', content: ['A empresa crescia em novos clientes, mas perdia receita na base existente.'] },
			{ id: 'okrs', title: 'OKRs definidos', content: ['Objetivo: aumentar retencao liquida. KRs conectados a ativacao e adoção de features-chave.'] },
			{ id: 'resultado', title: 'Resultados obtidos', content: ['Em 90 dias, houve melhora de retencao e previsibilidade do ciclo de renovacao.'] },
		],
		practicalApplication: ['Mapeie metricas de base.', 'Defina KRs por alavanca de retencao.', 'Revise progresso semanalmente.'],
		productConnection: ['Com o OKR Brain, voce acompanha a execucao de KRs com mais clareza.'],
		relatedSlugs: ['beneficios-de-okr-para-alinhamento'],
	},
	{
		slug: 'comparativo-ferramentas-okr-2026',
		title: 'Comparativo de ferramentas de OKR em 2026',
		description: 'Criterios para escolher uma plataforma simples e escalavel.',
		intro: 'Nem toda ferramenta de OKR atende equipes em crescimento. Este comparativo foca no que importa.',
		category: 'Comparacao de ferramentas',
		categorySlug: 'comparacao-de-ferramentas',
		publishedAt: '2026-03-10',
		toc: [
			{ id: 'criterios', label: 'Criterios de escolha' },
			{ id: 'tradeoffs', label: 'Trade-offs comuns' },
			{ id: 'decisao', label: 'Checklist final' },
		],
		sections: [
			{ id: 'criterios', title: 'Criterios de escolha', content: ['Priorize usabilidade, cadencia de acompanhamento e visibilidade das metas.'] },
			{ id: 'tradeoffs', title: 'Trade-offs comuns', content: ['Solucoes muito complexas tendem a reduzir adesao no dia a dia dos times.'] },
			{ id: 'decisao', title: 'Checklist final', content: ['Valide onboarding, integracoes essenciais e curva de aprendizado.'] },
		],
		practicalApplication: ['Defina requisitos nao negociaveis.', 'Teste com um squad piloto.', 'Meça adesao no primeiro ciclo.'],
		productConnection: ['O OKR Brain foi desenhado para simplicidade e execucao, sem sobrecarga operacional.'],
		relatedSlugs: ['erros-comuns-na-implementacao-de-okrs'],
	},
	{
		slug: 'dores-de-okr-em-times-remotos',
		title: 'Principais dores de OKR em times remotos',
		description: 'Os desafios de alinhamento em times distribuidos e como resolver.',
		intro: 'Times remotos sofrem com desalinhamento silencioso. OKRs bem definidos ajudam a reduzir esse risco.',
		category: 'Dores e dificuldades',
		categorySlug: 'dores-e-dificuldades',
		publishedAt: '2026-03-08',
		toc: [
			{ id: 'sintomas', label: 'Sintomas de desalinhamento' },
			{ id: 'causas', label: 'Causas raiz' },
			{ id: 'praticas', label: 'Praticas recomendadas' },
		],
		sections: [
			{ id: 'sintomas', title: 'Sintomas de desalinhamento', content: ['KRs sem progresso claro e excesso de reunioes sem decisao.'] },
			{ id: 'causas', title: 'Causas raiz', content: ['Falta de visibilidade compartilhada e objetivos mal definidos por area.'] },
			{ id: 'praticas', title: 'Praticas recomendadas', content: ['Criar rituais curtos e dashboards unificados por ciclo.'] },
		],
		practicalApplication: ['Reduza objetivos por trimestre.', 'Padronize check-ins assicronos.', 'Defina ownership explicito por KR.'],
		productConnection: ['No OKR Brain, todos os KRs ficam visiveis para o time inteiro em um unico fluxo.'],
		relatedSlugs: ['erros-comuns-na-implementacao-de-okrs'],
	},
];

// Mock local para a secao "buscas mais realizadas".
// Futuro: trocar por fonte real (GSC/GA4/API) sem alterar a interface da Home.
export const popularSearches = [
	'okr exemplos prontos',
	'como criar key results',
	'okr para time de produto',
	'metodologia okr para startups',
	'ferramenta de okr com ia',
];

export function getFeaturedPosts() {
	return blogPosts.filter((post) => post.featured);
}

export function getLatestPosts(limit = 6) {
	return [...blogPosts]
		.sort((a, b) => new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf())
		.slice(0, limit);
}

export function getCategoryBySlug(slug: string) {
	return primaryCategories.find((category) => category.slug === slug);
}

export function getPostsByCategory(slug: string) {
	return blogPosts.filter((post) => post.categorySlug === slug);
}

export function getPostBySlug(slug: string) {
	return blogPosts.find((post) => post.slug === slug);
}
