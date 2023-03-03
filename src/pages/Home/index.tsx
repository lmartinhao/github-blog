import { useContext } from 'react'
import { ArticleCard } from '../../components/ArticleCard'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchBar } from '../../components/SearchBar'
import { ArticlesContext } from '../../contexts/ArticlesContext'
import {
  ArticlesArea,
  ArticlesContainer,
  ArticlesContainerHeader,
  HomeContainer,
} from './styles'

export function Home() {
  const { articles } = useContext(ArticlesContext)

  console.log(articles.items)

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
        <SearchBar />

        <ArticlesArea>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </ArticlesArea>
      </ArticlesContainer>
    </HomeContainer>
  )
}
