const SET_REPOS = 'SET_REPOS'
const SET_FETCHING = 'SET_FETCHING'

const defaultState = {
  items: [{}],
  isFetching: false,
}

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS: {
      return {
        ...state,
        items: [...action.payload.items]
      }
    }
    case SET_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    default: return state
  }
}

export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})
export const setFetching = (bool) => ({type: SET_FETCHING, payload: bool})