import { ArticleCard } from '../../components/ArticleCard'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchBar } from '../../components/SearchBar'
import {
  ArticlesArea,
  ArticlesContainer,
  ArticlesContainerHeader,
  HomeContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Profile />

      <ArticlesContainer>
        <ArticlesContainerHeader>
          <h3>Publicações</h3>
          <span>6 publicações</span>
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
