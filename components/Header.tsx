"use client"

import { Box, Button } from "@radix-ui/themes"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [currentPage, setCurrentPage] = useState("")

  useEffect(() => {
    setCurrentPage(window.location.pathname)
  }, []);

  return (
    <Box width="100vw" className="bg-gradient-to-r from-purple-700/20 to-purple-900/30 p-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-extrabold">Example School District</h1>
        <div className="flex justify-between items-center gap-6">
          {currentPage === "/" ? (
            <span>Home</span>
          ) : (
            <Link href="/">Home</Link>
          )}
          {currentPage === "/about" ? (
            <span>About</span>
          ) : (
            <Link href="/about">About</Link>
          )}
          <Button variant="classic">Student Login</Button>
        </div>
      </div>
    </Box>
  )
}