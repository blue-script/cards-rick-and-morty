import {useState, useEffect} from "react"
import {DataType} from "../../App"
import cn from "classnames"
import s from "./search-bar.module.css"

type SearchBarProps = {
  data: DataType | null
  setData: (data: DataType | null) => void
  setLoading: (value: boolean) => void
}

export const SearchBar = ({data, setData, setLoading}: SearchBarProps) => {
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (query.length < 4) {
      setData(null)
      return
    }

    setLoading(true)

    fetch(`https://rickandmortyapi.com/api/character/?name=${query.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
      .catch((err) => console.error("Loading error:", err))
      .finally(() => setLoading(false))
  }, [query])

  return (
    <div className={s["search-bar"]}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search characters..."
        className={s["search-bar__input"]}
        autoFocus
      />
      <span className={cn(s["search-bar__info"], {[s["search-bar__info-hidden"]]: data === null})}>
        {`Found characters: ${data?.info?.count || 0}`}
      </span>
    </div>
  )
}
