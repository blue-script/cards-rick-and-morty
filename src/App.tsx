import s from "./App.module.css"
import {SearchBar} from "./components/SearchBar"
import {useState} from "react"
import {Card} from "./components/Card"

export type DataType = {
  info: {
    "count": number;
    "pages": number;
    "next": string;
    "prev": string;
  },
  results: ItemsType;
}

export type ItemsType = ItemType[];

export type ItemType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ItemsOrigin;
  location: ItemLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type ItemsOrigin = {
  name: string;
  url: string;
}

export type ItemLocation = {
  name: string;
  url: string;
}

function App() {
  const [data, setData] = useState<DataType | null>(null)
  const [loading, setLoading] = useState(false)
  console.log(loading)

  console.log(data)

  return (
    <main className={s["main"]}>
      <h1 className={s["hidden-h1"]}>Rick and Morty</h1>
      <div className={s["main__container"]}>
        <div className={s["main__search"]}>
          <SearchBar setData={setData} setLoading={setLoading} data={data}/>
        </div>
        <div className={s["main__content"]}>
          {data?.results?.map(item => (<Card key={item.id} dataItem={item} />))}
        </div>
      </div>
    </main>
  )
}

export default App
