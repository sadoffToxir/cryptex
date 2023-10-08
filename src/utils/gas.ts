import { ethGweiPrice, gweiWeiPrice } from '@/config/constants'

export const getEthFromWei = (wei: number, toFixed: number = 9) => {
  return Number((wei / gweiWeiPrice) / ethGweiPrice).toFixed(toFixed)
}

export const getEthFromGas = (gas: number, price: number, toFixed: number = 9) => {
  return Number((gas * (price / gweiWeiPrice)) / ethGweiPrice).toFixed(toFixed)
}