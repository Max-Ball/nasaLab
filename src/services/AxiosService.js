import Axios from 'axios'
import { baseURL } from '../env'

export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const NASAapi = Axios.create({
  baseURL: 'https://api.nasa.gov/',
  params: {
    api_key: 'K4T2NxDOfbSnxwhwMXYJIO5agxbW5McM6DuEp5y2',
  }
})
