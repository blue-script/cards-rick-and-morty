import s from "./App.module.css"
import {SearchBar} from "./components/SearchBar"
import {useState} from "react"

export type DataType = {
  info: {
    "count": number;
    "pages": number;
    "next": string;
    "prev": string;
  },
  result: ItemsType;
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
      <div className={s["main__container"]}>
        <div className={s["main__search"]}>
          <SearchBar setData={setData} setLoading={setLoading} data={data}/>
        </div>
        <div className={s["main__content"]}>
          test
        </div>
      </div>
    </main>
  )
}

export default App
