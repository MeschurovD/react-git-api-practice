import axios from "axios"
//import { setFetching, setRepos } from "../../reducers/reposReducer"


interface GetReposPropsType {
  (searchQuery: string,
  currentPage: number,
  perPage: number): Function
}

interface GetCurrentRepopropsType {
  (username: string,
  reponame: string,
  setRepo: Function,
  dispatch: Function): Promise<void>
}


/**
 * Запрос списка репозиториев на api github
 */
// export const getRepos: GetReposPropsType = (searchQuery = 'stars:%3E1', currentPage, perPage) => {
//   return async (dispatch: Function) => {
//     if (searchQuery === '') searchQuery = 'stars:%3E1'
//     dispatch(setFetching(true))
//     const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
//     console.log(response.data)
//     dispatch(setRepos(response.data))
//   }
// }

/**
 * Запрос данных репозитория 
 */
export const getCurrentRepo: GetCurrentRepopropsType = async (username, reponame, setRepo, dispatch) => {
  //dispatch(setFetching(true))
  const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}`)
  setRepo(response.data)
  //dispatch(setFetching(false))

}