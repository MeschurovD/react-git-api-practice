const SET_REPOS = 'SET_REPOS'
const SET_FETCHING = 'SET_FETCHING'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const defaultState = {
  repos: [{}],
  isFetching: true,
  currentPage: 1,
  totalCount: 0
}

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS: {
      return {
        ...state,
        repos: [...action.payload.items],
        isFetching: false,
        totalCount: action.payload.total_count
      }
    }
    case SET_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload
      }
    }
    default: return state
  }
}

export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})
export const setFetching = (bool) => ({type: SET_FETCHING, payload: bool})
export const setCurrentPage = (index) => ({type: SET_CURRENT_PAGE, payload: index})


