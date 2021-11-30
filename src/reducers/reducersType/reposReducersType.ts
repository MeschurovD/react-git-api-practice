

export interface ReposReducerStateType {
  reposList: any[],
  isFetching: boolean
  currentPage: number
  totalCount: number
  error: string
  currentRepo: CurrentRepoType | null
}

export interface ActionCurrentPageType {
  payload: {
    page: number
  }
}

export interface CurrentRepoType {
    name: string
    stargazers_count: number
    forks_count: number
    watchers_count: number
    html_url: string
    updated_at: string
    owner: {
      login: string
      avatar_url: string
    }
}