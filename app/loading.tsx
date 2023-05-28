"use client"

import React, { useEffect } from "react"

type Props = {}

const Loading = (props: Props) => {
  // useEffect(() => {
  //   gsap.to("body", {
  //     opacity: 0,
  //   })

  //   return () => {
  //     gsap.to("body", {
  //       opacity: 1,
  //     })
  //   }
  // }, [])

  return <div>Loading</div>
}

export default Loading
