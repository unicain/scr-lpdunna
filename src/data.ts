import { LandingPageConfig } from './types';

// O Template flexível: basta alterar este arquivo para o próximo cliente.
export const lpData: LandingPageConfig = {
  theme: {
    logoUrl: '/logo.png.jpg', // O usuário pode subir o logotipo real na pasta public
    primaryColor: '#B68D5D', // Cor areia/dourada inspirada na identidade do PDF
    secondaryColor: '#A0784E',
    backgroundColor: '#FAF8F5', // Fundo creme bem suave
    textColor: '#3A312A',
  },
  contact: {
    whatsappNumber: '5551999211159',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre as aulas de Pilates e agendar uma aula experimental.',
    address: 'Augusto Spengler, 1090 - Verena, Santa Cruz do Sul - RS',
    googleMapsLink: 'https://www.google.com/maps/dir/Dunna+pilates+-+R.+Augusto+Spengler,+1090+-+Verena,+Santa+Cruz+do+Sul+-+RS,+96820-020/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x951ca30014169097:0x774ae826d963baca?sa=X&ved=1t:57443&ictx=111',
  },
  hero: {
    headline: 'Um Studio de Pilates Clássico',
    subheadline: 'Existimos para fazer com que as pessoas percebam a sua força e o seu poder de evolução. Descubra a potência escondida dentro de você!',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
    ctaText: 'Agendar Aula Experimental',
  },
  services: {
    sectionTitle: 'O que é Pilates Clássico?',
    sectionSubtitle: 'A Nossa Metodologia',
    items: [
      {
        id: '1',
        title: 'Força e Controle',
        description: 'Exercícios organizados em sequência que desenvolvem força, controle, equilíbrio e consciência corporal.',
        iconName: 'Dumbbell',
      },
      {
        id: '2',
        title: 'Autonomia Corporal',
        description: 'Mais do que repetir movimentos, o aluno é estimulado a perceber e aprimorar sua execução a cada prática.',
        iconName: 'Brain',
      },
      {
        id: '3',
        title: 'Evolução Gradual',
        description: 'Iniciamos no nível básico e alcançamos o avançado respeitando o ritmo e a evolução individual.',
        iconName: 'TrendingUp',
      },
      {
        id: '4',
        title: 'Segurança e Resultado',
        description: 'Processo estruturado para garantir consistência e evolução constante, com total segurança para seu corpo.',
        iconName: 'ShieldCheck',
      }
    ],
  },
  about: {
    name: 'Equipe Dunna',
    role: 'Desperte sua força, vibre cada evolução!',
    bio: 'Nossa equipe é formada por pessoas apaixonadas pelo método: Cris (fundadora e instrutora), Gisele (instrutora), Lara (social media) e Marta (gestão e atendimento). Trabalhamos juntas para que o pilates transforme a sua vida e te traga ainda mais qualidade e bem-estar.',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop', 
    credentials: [
      'Cris: fundadora e instrutora',
      'Gisele: instrutora',
      'Lara: social media',
      'Marta: gestão e atendimento'
    ],
  },
  gallery: {
    sectionTitle: 'Vibre cada evolução com a gente',
    sectionSubtitle: 'Acompanhe nosso trabalho',
    instagramHandle: '@dunnapilates',
    instagramUrl: 'https://www.instagram.com/dunnapilates/',
    items: [
      {
        id: '1',
        type: 'image',
        thumbnailUrl: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2072&auto=format&fit=crop',
        caption: 'Conectando mente e corpo com exercícios precisos do Pilates Clássico.',
        postUrl: 'https://www.instagram.com/dunnapilates/'
      },
      {
        id: '2',
        type: 'video',
        thumbnailUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop',
        caption: 'Um pedacinho da nossa rotina no estúdio. Venha conhecer!',
        postUrl: 'https://www.instagram.com/dunnapilates/'
      },
      {
        id: '3',
        type: 'image',
        thumbnailUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop',
        caption: 'Postura, respiração e força. Os pilares do nosso atendimento.',
        postUrl: 'https://www.instagram.com/dunnapilates/'
      },
      {
        id: '4',
        type: 'image',
        thumbnailUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2069&auto=format&fit=crop',
        caption: 'Equipamentos modernos para oferecer o melhor a você.',
        postUrl: 'https://www.instagram.com/dunnapilates/'
      }
    ]
  },
  pricing: {
    sectionTitle: 'Valores Mensais',
    sectionSubtitle: 'Escolha a rotina ideal para seus resultados',
    observation: [
      '* Valores por pessoa.',
      '* Pagamento mensal via Pix.',
      '* Pagamento trimestral e semestral por assinatura recorrente no cartão de crédito.'
    ],
    items: [
      {
        id: '1',
        name: 'Aulas em Dupla',
        experimentalPrice: 'R$ 70,00',
        prices: [
          { timesPerWeek: '1X', mensal: 'R$ 380,00', trimestral: 'R$ 325,00', semestral: 'R$ 297,00' },
          { timesPerWeek: '2X', mensal: 'R$ 490,00', trimestral: 'R$ 435,00', semestral: 'R$ 405,00' },
          { timesPerWeek: '3X', mensal: 'R$ 600,00', trimestral: 'R$ 545,00', semestral: 'R$ 515,00' }
        ]
      },
      {
        id: '2',
        name: 'Aulas Individuais',
        experimentalPrice: 'R$ 100,00',
        prices: [
          { timesPerWeek: '1X', mensal: 'R$ 760,00', trimestral: 'R$ 650,00', semestral: 'R$ 594,00' },
          { timesPerWeek: '2X', mensal: 'R$ 980,00', trimestral: 'R$ 870,00', semestral: 'R$ 810,00' },
          { timesPerWeek: '3X', mensal: 'R$ 1.200,00', trimestral: 'R$ 1.090,00', semestral: 'R$ 1.030,00' }
        ]
      }
    ]
  },
  faq: {
    sectionTitle: 'Dúvidas Frequentes',
    items: [
      {
        id: '1',
        question: 'Aula experimental',
        answer: 'É uma ótima forma de conhecer o estúdio e experimentar o método. Se você gostar e decidir se matricular, o valor da aula é abatido na primeira mensalidade!'
      },
      {
        id: '2',
        question: 'Aulas em dupla',
        answer: 'Nos planos que incluem aulas em dupla, não é necessário trazer um acompanhante. A formação das duplas é feita de acordo com a disponibilidade e o nível de prática de cada aluno.'
      },
      {
        id: '3',
        question: 'Horários das aulas',
        answer: 'As aulas são realizadas em horários previamente agendados, conforme sua disponibilidade e da agenda do estúdio.'
      },
      {
        id: '4',
        question: 'Pagamentos das mensalidades',
        answer: 'O pagamento antecipado do plano integral pode ser via Pix, ou através de assinatura recorrente no cartão de crédito para evitar comprometer seu limite com o valor total.'
      }
    ]
  },
  testimonials: {
    sectionTitle: 'Avaliações dos Alunos',
    items: [
      {
        id: '1',
        name: 'Aluna Satisfeita 1',
        rating: 5,
        text: 'A experiência no Dunna Pilates transformou minha postura. A Cris e a Gisele são super detalhistas e a gente sente a diferença em cada movimento.',
      },
      {
        id: '2',
        name: 'Aluno Satisfeito 2',
        rating: 5,
        text: 'O estúdio é muito acolhedor, limpo e os equipamentos são excelentes. É o melhor investimento que faço na minha saúde.',
      },
      {
        id: '3',
        name: 'Aluna Satisfeita 3',
        rating: 5,
        text: 'As aulas em dupla são incríveis! Consegui fortalecer minha lombar e as dores sumiram completamente. Recomendo de olhos fechados!',
      }
    ],
  },
};
