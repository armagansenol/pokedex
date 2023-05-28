import { Suspense } from "react"
import s from "./home.module.scss"

import List from "@/components/list"

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<div style={{ background: "green" }}>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <List />
      </Suspense>
    </main>
  )
}
