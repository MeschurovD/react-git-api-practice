export enum reposReducersActions {
  SET_REPOS = 'SET_REPOS',
  SET_FETCHING = 'SET_FETCHING',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
}

interface ReposReducerDefaultStateType {
  repos: [{}],
  isFetching: boolean
  currentPage: number
  totalCount: number
}

interface ReposReducerSetReposActionType {
  type: reposReducersActions.SET_REPOS
  payload: any
}