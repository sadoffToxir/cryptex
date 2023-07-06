import axios from 'axios'
import { ETHERSCAN } from '../const'

const apiUrl = `${ETHERSCAN}?module=account&apikey=${import.meta.env.VITE_ETHERSCANAPIKEY}`

const getBalance = (address: string) => {
  return axios.get(`${apiUrl}&action=balance&address=${address}`)
}

const getTransactions = (address: string, page: number, offset: number, sort: string) => {
  return axios.get(`${apiUrl}&action=txlist&address=${address}&page=${page}&offset=${offset}&sort=${sort}`)
    .then(response => response.data)
}

export default {
  getBalance,
  getTransactions
}
