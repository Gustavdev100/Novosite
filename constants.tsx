
import { Course, Testimonial, Benefit } from './types';

export const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/FkFMuvKrD9969VL9RCOkui';

/** 
 * CONFIGURAÇÃO DA PLANILHA (CRM Elite Squad):
 * 1. Nome da Planilha: "CRM Elite Squad - Leads GustaDX"
 * 2. Cabeçalhos (Linha 1): 
 *    A: Data/Hora | B: Nome | C: WhatsApp | D: Cargo | E: Interesse | F: Desafio | G: Origem
 * 3. IMPORTANTE: Substitua a URL abaixo pela nova URL gerada no seu Google Apps Script.
 */
export const GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwQT6KfQyAOIv45HZPTdmpkCfKyDvg6cb5z8IHVBPkOLZmJjbKKXJzfU9Wsh-UNx9wcjw/exec'; 

export const COURSES: Course[] = [
  {
    id: 'excel',
    title: 'Excel Master',
    focus: 'Produtividade extrema e automação.',
    content: ['Do Zero ao VBA Profissional', 'Fórmulas de Matriz Dinâmica', 'Dashboards de Alto Impacto', 'Automação de Tarefas Repetitivas'],
    icon: '📊'
  },
  {
    id: 'pbi',
    title: 'Power BI Business',
    focus: 'Inteligência de negócios e Storytelling.',
    content: ['Transformação de Dados (M)', 'Linguagem DAX Avançada', 'Storytelling com Dados', 'Publicação e Governança'],
    icon: '📈'
  },
  {
    id: 'apps',
    title: 'Power Apps Creator',
    focus: 'Inovação Low-Code e transformação digital.',
    content: ['Apps de Tela Personalizados', 'Integração com SharePoint/SQL', 'Automação com Power Automate', 'Digitalização de Processos'],
    icon: '📱'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Marcos Silveira',
    role: 'Diretor de Operações',
    comment: 'A mentoria do GustaDX mudou o patamar da nossa equipe. Automatizamos processos que levavam dias para minutos com dashboards em tempo real.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Ana Claudia',
    role: 'Analista de BI Senior',
    comment: 'O foco em storytelling de dados me ajudou a conseguir uma promoção em menos de 3 meses. A visão de negócio do Gusta é o diferencial.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Roberto Mendes',
    role: 'Especialista em Processos',
    comment: 'Power Apps era um mistério pra mim. Hoje crio apps que resolvem problemas reais da firma e sou referência em inovação low-code.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop'
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Mentalidade de Elite',
    description: 'Vá além do tutorial técnico. Aprenda a visão crítica de quem resolve problemas corporativos complexos e ganha destaque.',
    metric: '+300% Produtividade'
  },
  {
    title: 'Suporte de Carreira',
    description: 'Ajuda direta para destravar seus projetos reais dentro da sua empresa. Consultoria individualizada.',
    metric: 'Mentoria Direta'
  },
  {
    title: 'Acesso Vitalício',
    description: 'Compre uma vez e tenha acesso a todas as atualizações futuras da trilha sem custos extras ou mensalidades.',
    metric: 'Atualização Constante'
  }
];
