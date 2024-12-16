import { Project } from "@/types/Project";

const projects: Project[] = [
    {
        id: 1,
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/source/d7b159214556025.6759f53123ee0.png',
        title: 'Plataforma de ensino a distância',
        description: `Foi desenvolvido o site para prospecão de novos  alunos + o dashboard dos cursos,
        login de usuários com controle de acesso.`,
        githubLink: '',
        siteLink: '',
        techTags: [
            'HTMLL', 'CSS', 'Javascript', 'Typescript', 'NodeJS',
            'NextJS', 'PostgreSQL', 'Domain Driven Design',
            'Clean architecture'
        ]
    },
    {
        id: 2,
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/source/4ac275214556025.6759f53126a58.png',
        title: 'Sistema de controle de finanças',
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
        title: 'Sistema para oficinas',
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
    }
];

export { projects };
