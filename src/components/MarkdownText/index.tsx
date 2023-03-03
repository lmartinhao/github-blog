import ReactMarkdown from 'react-markdown'

export function MarkdownToHTML() {
  const markdownText = `###### As principais lições e dicas compiladas para quem está começando na programação ou migrando para a área.

*Texto por Camila Coelho

Hoje devs são peças fundamentais de todo negócio, estão nas startups e nas pequenas e médias empresas que buscam soluções tecnológicas para seus produtos e serviços.

Em uma busca rápida, é possível encontrar centenas de notícias e pesquisas que apontam a falta de mão de obra qualificada na área. A conclusão das matérias é a mesma: sobram vagas no Brasil e chovem oportunidades internacionais.

Quem se destaca pode nadar de braçada nesse oceano de possibilidades. Nesse artigo estão reunidos todos os ensinamentos para você iniciar sua carreira em programação com o pé direito.

## Defina sua jornada
Antes de tudo, você precisa saber para onde está indo. Iniciantes na programação costumam se perder em meio a tanta informação. Você precisa ter objetivos bem definidos para traçar a melhor rota de evolução na carreira.

Certifique-se de ter uma base sólida nos fundamentos da programação. Só depois de conhecer o básico, você saberá para onde seguir. [Esse curso gratuito](https://www.rocketseat.com.br/discover) ensina programação desde o marco zero, para quem nunca teve contato com tecnologia e ajuda a consolidar conhecimentos padrões.

## Escolha uma linguagem
Conhecer uma única tecnologia profundamente vai te ajudar mais que saber várias superficialmente. Isso não significa que você nunca poderá aprender outras no futuro, apenas que vai direcionar seu foco para um objetivo de aprendizagem.

Dominando uma linguagem você se aproxima de empresas que costumam buscar por pessoas que cumpram papéis específicos em um time de tecnologia.
Acompanhando a evolução das ferramentas que usa, você não deixa que suas aplicações fiquem ultrapassadas e continua relevante para o mercado.`

  return (
    <div>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  )
}
