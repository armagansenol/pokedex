import { PokemonClient } from "pokenode-ts"

export async function GET(name: string) {
  const api = new PokemonClient()

  let poke: any

  await api
    .getPokemonByName(name)
    .then((data) => {
      console.log(data.name)
      poke = data
      return data
    }) // will output "Luxray"
    .catch((error) => console.error(error))

  //   try {
  //     const pokemons = await Blog.find({}).limit(16).populate("authorId")
  //     return new Response(JSON.stringify(blogs), { status: 200 })
  //   } catch (error) {
  //     return new Response(JSON.stringify(null), { status: 500 })
  //   }
}
