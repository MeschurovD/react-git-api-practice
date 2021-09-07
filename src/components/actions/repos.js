import axios from "axios"
import { setFetching, setRepos } from "../../reducers/reposReducer"

export const getRepos =  (searchQuery = 'stars:%3E1') => {
  return async (dispatch) => {
    if (searchQuery === '') searchQuery = 'stars:%3E1'
    dispatch(setFetching(true))
    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
    dispatch(setRepos(response.data))
  }
}