import { useContext } from 'react'
import { ArticleCard } from '../../components/ArticleCard'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchBar'
import { ArticlesContext } from '../../contexts/ArticlesContext'
import {
  ArticlesArea,
  ArticlesContainer,
  ArticlesContainerHeader,
  HomeContainer,
} from './styles'

export function Home() {
  const { articles } = useContext(ArticlesContext)

  return (
    <HomeContainer>
      <Header />
      <Profile />

      <ArticlesContainer>
        <ArticlesContainerHeader>
          <h3>Publicações</h3>
          <span>
            {articles.total_count > 1
              ? `${articles.total_count} publicações`
              : `${articles.total_count} publicação`}
          </span>
        </ArticlesContainerHeader>
        <SearchForm />

        <ArticlesArea>
          {articles.items.map((article) => {
            return (
              <ArticleCard
                key={article.id}
                title={article.title}
                body={article.body}
                createdAt={article.created_at}
                number={article.number}
              />
            )
          })}
        </ArticlesArea>
      </ArticlesContainer>
    </HomeContainer>
  )
}
