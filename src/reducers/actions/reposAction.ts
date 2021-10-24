import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface GetReposPropsType {
  searchQuery: string
  currentPage: number
  perPage: number
}

//Запрос списка репозиториев
export const getRepos = createAsyncThunk(
  'repos/getRepos',
  async ({
    searchQuery = 'stars:%3E1',
    currentPage,
    perPage
  }: GetReposPropsType, { rejectWithValue }) => {
    if (searchQuery === '') searchQuery = 'stars:%3E1'
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
      return response.data

    } catch (error) {
      return rejectWithValue('Не удалось загрузить данные')
    }
  }
)


//{searchQuery = 'stars:%3E1', currentPage, perPage}: GetReposPropsType