import { useEffect, useState } from "react"
import s from "./card.module.scss"
import Image from "next/image"

export async function fetchPokemon(url: string) {
  const res = await fetch(url)
  return res.json()
}

type Props = {
  data: any
}

async function Card({ data }: Props) {
  const [pokemon, setPokemon] = useState<any>(null)

  useEffect(() => {
    fetchPokemon(data.url).then((res) => {
      setPokemon(res)
    })
  }, [data])

  useEffect(() => {
    console.log(pokemon)
  }, [pokemon])

  return (
    <>
      {pokemon && (
        <div className={s.card}>
          <Image priority={true} width={100} height={100} src={pokemon.sprites.front_default} alt="pika" />
          <div>
            <p className={s.text}>
              {pokemon.name} ({pokemon.id})
            </p>
            <div className={s.types}>
              {pokemon.types &&
                pokemon.types.map((item: any, i: number) => {
                  return (
                    <p key={i} className={s.type}>
                      -{item.type.name}
                    </p>
                  )
                })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
