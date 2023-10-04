import useSWRMutation from "swr/mutation";
import { getItemSuggestions } from "../api/getItemSuggestions";
import { useEffect, useRef, useState } from "react";

export default function useSuggestions() {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')
  const { data, trigger, } = useSWRMutation('items/fetch', getItemSuggestions)
  const cache = useRef({})

  console.log(cache)

  useEffect(() => {
    if (data) {
      cache[query] = data;
      setResults(data)
    }
  }, [cache, data, query])

  const handleInputChange = (inputVal) => {
    if (cache[inputVal]) {
      setResults(cache[inputVal])
      return
    }
    setQuery(inputVal)
    trigger(inputVal)
  }

  return { results, handleInputChange }
}
