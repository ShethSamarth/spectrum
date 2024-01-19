"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export const TopFab = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = typeof window !== undefined ? window.scrollY : 0
      const scrollThreshold = 50
      setIsScrolled(scrollY > scrollThreshold)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (isScrolled) {
    return (
      <Button
        size="icon"
        className="fixed bottom-3 right-3 bg-[#0579AA] hover:bg-[#0579AA]/80 rounded-full z-50"
        onClick={() => window.scrollTo(0, 0)}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    )
  }

  return null
}
