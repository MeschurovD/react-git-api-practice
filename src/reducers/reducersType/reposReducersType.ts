

export interface ReposReducerStateType {
  reposList: any[],
  isFetching: boolean
  currentPage: number
  totalCount: number
  error: string
}

export interface ActionCurrentPageType {
  payload: {
    page: number
  }
}