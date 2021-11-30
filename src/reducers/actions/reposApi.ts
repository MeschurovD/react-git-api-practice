import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface GetReposPropsType {

  searchQuery: string
  currentPage: number
  perPage: number

}


export const reposFetch = createApi({
  reducerPath: 'reposFetch',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getRepos: builder.query<any, GetReposPropsType>({
      query: (args) => {
        return `search/repositories?q=${args.searchQuery ? args.searchQuery : 'stars:%3E1'}&sort=stars&per_page=${args.perPage}&page=${args.currentPage}`
      }
    }),
    getCurrentRepo: builder.query({
      query: (args) => `repos/${args.username}/${args.reponame}`
    }),
    getBranch: builder.query({
      query: (args) => `repos/${args.username}/${args.reponame}/branches`
    })
  })


})

export const { 
  useGetReposQuery, 
  useGetCurrentRepoQuery,
  useGetBranchQuery 
} = reposFetch
