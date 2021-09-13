import { useEffect, useState } from "react"

const usePages = (currentPage, totalCount, perPage) => {
  const [pages, setPages] = useState([])
  const totalPages = Math.ceil(totalCount / perPage)
  const maxPages = 10

  useEffect(() => {
    setPages(getPages())
  }, [currentPage])

  const getPages = () => {
    if (currentPage < Math.ceil(maxPages / 2)) {
      const pages = []
      for (let i = 1; i <= maxPages; i++) {
        pages.push(i)
      }
      return pages
    } else {
      const pages = []
      const firstPage = currentPage - Math.floor(maxPages / 2)
      for (let i = firstPage; i < firstPage + maxPages; i++) {
        pages.push(i)
      }
      return pages
    }
  }

  return pages
}

export default usePages