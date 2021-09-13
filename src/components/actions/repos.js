import axios from "axios"
import { setFetching, setRepos } from "../../reducers/reposReducer"

/**
 * Запрос списка репозиториев на api github
 * @param {String} searchQuery 
 * @returns async function
 */
export const getRepos =  (searchQuery = 'stars:%3E1', currentPage, perPage) => {
  return async (dispatch) => {
    if (searchQuery === '') searchQuery = 'stars:%3E1'
    dispatch(setFetching(true))
    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
    console.log(response.data)
    dispatch(setRepos(response.data))
  }
}