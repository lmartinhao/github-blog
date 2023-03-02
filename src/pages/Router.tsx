import { Route, Routes } from 'react-router-dom'
import { Article } from './Article'
import { Home } from './Home/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/1" element={<Article />} />
    </Routes>
  )
}
