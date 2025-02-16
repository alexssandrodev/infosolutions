import { Project } from "@/types/Project";

const projects: Project[] = [
  {
    id: 1,
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/source/d7b159214556025.6759f53123ee0.png',
    title: 'Plataforma de ensino a distância',
    description: `Foi desenvolvido o site para prospecão de novos  alunos + o dashboard dos cursos,
        login de usuários com controle de acesso.`,
    githubLink: 'https://github.com/alexssandrodev/piramide.ead',
    siteLink: 'https://piramide-ead-frontend.vercel.app/',
    techTags: [
      'HTMLL', 'CSS', 'Javascript', 'Typescript', 'NodeJS',
      'NextJS', 'PostgreSQL', 'Domain Driven Design',
      'Clean architecture'
    ]
  },
  {
    id: 2,
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/source/4ac275214556025.6759f53126a58.png',
    title: 'ContrlOn - Sistema de controle de finanças',
    description: `O sistema conta com funcionalidades de lançamento de gastos e despesas, cálculo atualizado
        dos gastos sobre os rendimentos, gráficos do quanto uma despesaimpacta no més em porcentagem.`,
    githubLink: '',
    siteLink: '',
    techTags: [
      'HTMLL', 'CSS', 'Javascript', 'Typescript', 'NodeJS',
      'NextJS', 'PostgreSQL', 'Domain Driven Design',
      'Clean architecture'
    ]
  },
  {
    id: 3,
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/source/bf7cd6214556025.6759f53123681.png',
    title: 'Minha Oficina - Sistema para oficinas',
    description: `O sistema conta com funcionalidades de criação da nota do cliente, geração de PDF da nota,
        envio de mensagem para whatsapp direto do sistema.`,
    githubLink: '',
    siteLink: '',
    techTags: [
      'HTMLL', 'CSS', 'Javascript', 'Typescript', 'NodeJS',
      'NextJS', 'PostgreSQL', 'Domain Driven Design',
      'Clean architecture'
    ]
  },
  {
    id: 4,
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/source/8bf145214556025.6759faf764db4.png',
    title: 'Sistema de agendamentos',
    description: `sistema e agendamentos, serve para clinicas, consultórios médicos, escritóriosde advocacia
        profissionais independentes.`,
    githubLink: '',
    siteLink: '',
    techTags: [
      'HTMLL', 'CSS', 'Javascript', 'Typescript', 'NodeJS',
      'NextJS', 'PostgreSQL', 'Domain Driven Design',
      'Clean architecture'
    ]
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dqwawiejx/image/upload/v1739616715/Screen_Shot_2025-02-15_at_07.49.33_mzhlpt.png',
    title: 'Strategy sale - Marketplace',
    description: `O Strategy Sale é uma plataforma de marketplace, tem a empresa
        que pode cadastrar os produtos, cadastrar venda e cadastrar um pedido de venda, 
        outras empresas podem comprar esses produtos.`,
    githubLink: 'https://github.com/alexssandrodev/strategy-sale-frontend',
    siteLink: 'https://strategy-sale-frontend.vercel.app/',
    techTags: [
      'HTMLL', 'CSS', 'Javascript', 'Typescript', 'NodeJS',
      'NextJS', 'PostgreSQL', 'Domain Driven Design',
      'Clean architecture'
    ]
  }
];

export { projects };
