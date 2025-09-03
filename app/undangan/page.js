"use client"

import { useEffect, useState } from "react"
import Sampul from "./sampul"
import Invitation from "./invitation"

export default function UndanganPage() {
  const [userName, setUserName] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const storedName = localStorage.getItem("userName")
    if (storedName) setUserName(storedName)
  }, [])

  return (
    <>
      {!isOpen ? (
        <Sampul userName={userName} onOpen={() => setIsOpen(true)} />
      ) : (
        <Invitation userName={userName} />
      )}
    </>
  )
}
