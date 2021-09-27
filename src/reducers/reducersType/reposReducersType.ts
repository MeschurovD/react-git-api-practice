export enum reposReducersActions {
  SET_REPOS = 'SET_REPOS',
  SET_FETCHING = 'SET_FETCHING',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
}


export interface ReposReducerStateType {
  repos: any[],
  isFetching: boolean
  currentPage: number
  totalCount: number
}

interface ReposReducerSetReposActionType {
  type: reposReducersActions.SET_REPOS
  payload: any
}

export interface Repos {
  repo: {
    name: string
    stargazers_count: number
    html_url: string
    updated_at: string
    owner: {
      login: string
    }
  }
}