"use client"
import React, { Suspense, useEffect, useState } from "react"
import s from "./list.module.scss"

import Card from "@/components/card"

async function List() {
  async function fetchPokemonsData(url: any) {
    const res = await fetch(url)
    return res.json()
  }

  const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

  const [pokemons, setPokemons] = useState([])
  const [url, setUrl] = useState(baseUrl)
  const [res, setRes] = useState<any>()

  useEffect(() => {
    fetchPokemonsData(url).then((res) => {
      console.log(res)

      setRes(res)
    })
  }, [url])

  useEffect(() => {
    if (!res) return
    setPokemons(res.results)
  }, [res])

  return (
    <div className={s.listC}>
      <div className={s.list}>
        {Array.isArray(pokemons) &&
          pokemons.map((poke: any, i: number) => {
            return (
              <React.Fragment key={i}>
                <Suspense fallback={<div style={{ background: "red" }}>Loading...</div>}>
                  {/* @ts-expect-error Async Server Component */}
                  <Card data={poke} />
                </Suspense>
              </React.Fragment>
            )
          })}
      </div>
      <div className={s.btns}>
        {url && (
          <button className={s.btn} onClick={() => setUrl(res.previous)}>
            PREV
          </button>
        )}

        {url && (
          <button className={s.btn} onClick={() => setUrl(res.next)}>
            NEXT
          </button>
        )}
      </div>
    </div>
  )
}

export default List
