import {ItemType} from "../../App"
import cn from "classnames"
import s from "./card.module.css"
import {formatDate} from "../../utils/formatDate"

type Props = {
  dataItem: ItemType
}

export const Card = (props: Props) => {
  const {dataItem: {name, species, url, status, created}} = props

  return (
    <article className={cn(s["card"])}>
      <a
        href={url}
        className={s["card-link"]}
        aria-label={`${name}, ${species}`}
        target="_blank"
        rel="noopener noreferrer"
      />

      <h2>{`${name} - ${species}`}</h2>

      <div className={cn(s["card__info"])}>
        <span className={s["card__status"]}>
          Status:{" "}
          <span className={cn({
            [s["card__status-red"]]: status === "Dead",
            [s["card__status-green"]]: status === "Alive",
            [s["card__status-yellow"]]: status === "unknown",
          })}>
            {status}
          </span>
        </span>
        <span className={s["card__created"]}>{`Created: ${formatDate(created)}`}</span>
      </div>
    </article>
  )
}
