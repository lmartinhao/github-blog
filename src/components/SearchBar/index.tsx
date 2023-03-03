import { Controller, useForm } from 'react-hook-form'
import { SearchBarContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { ArticlesContext } from '../../contexts/ArticlesContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchArticles } = useContext(ArticlesContext)
  const { register, handleSubmit, control } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchArticles(data: SearchFormInputs) {
    console.log(data)
    fetchArticles(data.query)
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(handleSearchArticles)}>
      <Controller
        control={control}
        name="query"
        render={() => {
          return (
            <input
              type="text"
              placeholder="Buscar conteúdo"
              {...register('query')}
            />
          )
        }}
      />
    </SearchBarContainer>
  )
}
