import { client } from '../utils/client'

import { logosEndpoint } from '../api'
import { cutawaysEndpoint } from '../api'


export const requestLogos = async () => {
  const { data } = await client.get(logosEndpoint)
  console.log(data)
  return data
}

export const requestCutaways = async () => {
  const { data } = await client.get(cutawaysEndpoint)
  return data
}
