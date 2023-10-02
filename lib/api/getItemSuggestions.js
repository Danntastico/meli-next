import axios from "axios";
import { URL_MELI } from '@/constants'

export async function getItemSuggestions(query) {
  const { data } = await axios.get(`${URL_MELI}/sites/MCO/search?q=${query}`)

  return data.results.map(r => r.title)
}
