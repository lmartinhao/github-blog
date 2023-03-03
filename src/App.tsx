import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ArticlesProvider } from './contexts/ArticlesContext'
import { Router } from './pages/Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ArticlesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </ArticlesProvider>
    </ThemeProvider>
  )
}
