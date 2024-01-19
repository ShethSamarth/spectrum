"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu } from "lucide-react"
import { ElementRef, useEffect, useRef, useState } from "react"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { CareerForm } from "./career"
import { Motion } from "./motion-div"

export const Navbar = () => {
  const careerRef = useRef<ElementRef<"button">>(null)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const [about, setAbout] = useState<boolean>(false)
  const [products, setProducts] = useState<boolean>(false)
  const [sustainability, setSustainability] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = typeof window !== undefined ? window.scrollY : 0
      const scrollThreshold = 100
      setIsScrolled(scrollY > scrollThreshold)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const button = cn(
    "relative inline-flex items-center justify-center rounded-md hover:text-[#0579AA] hover:pb-3 hover:-mb-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:cursor-pointer",
    isScrolled ? "text-black" : "text-white"
  )

  const ul =
    "origin-top-right absolute top-full left-1/2 bg-white border border-slate-200 p-2 rounded-lg shadow-xl min-w-52"

  const menuItem =
    "text-slate-800 hover:text-[#0579AA] hover:bg-slate-50 flex items-center p-2"

  return (
    <header
      className={cn(
        "fixed z-50 w-full transition-colors duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-5xl 2xl:max-w-6xl mx-5 lg:mx-auto flex justify-between items-center py-7">
        <Link href="/">
          {isScrolled ? (
            <Image
              src="/images/spectrum-logo-2.webp"
              width={160}
              height={40}
              alt="Logo"
            />
          ) : (
            <Image
              src="/images/spectrum-logo.webp"
              width={160}
              height={40}
              alt="Logo"
            />
          )}
        </Link>
        <nav className="hidden lg:flex text-sm space-x-10 list-none">
          <Link
            href="#"
            className={button}
            typeof="button"
            onMouseEnter={() => setAbout(true)}
            onMouseLeave={() => setAbout(false)}
          >
            About <ChevronDown className="h-4 w-4" />
            {about && (
              <Motion
                initial={{ x: -35, y: 20, opacity: 0 }}
                animate={{ x: -35, y: 0, opacity: 1 }}
                exit={{ x: -35, y: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={ul}
              >
                <Link className={menuItem} href="/overview">
                  Overview
                </Link>
                <Link className={menuItem} href="/international">
                  International Partners
                </Link>
                <Link className={menuItem} href="/domestic">
                  Domestic Partners
                </Link>
                <Link className={menuItem} href="/infrastructure">
                  Infrastructure
                </Link>
              </Motion>
            )}
          </Link>
          <Link
            href="/products"
            className={button}
            typeof="button"
            onMouseEnter={() => setProducts(true)}
            onMouseLeave={() => setProducts(false)}
          >
            Products <ChevronDown className="h-4 w-4" />
            {products && (
              <Motion
                initial={{ x: -45, y: 20, opacity: 0 }}
                animate={{ x: -45, y: 0, opacity: 1 }}
                exit={{ x: -45, y: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={ul}
              >
                <Link className={menuItem} href="/disperse-dyes">
                  Disperse Dyes
                </Link>
                <Link className={menuItem} href="/reactive-dyes">
                  Reactive Dyes
                </Link>
              </Motion>
            )}
          </Link>
          <Link href="/services" className={button} typeof="button">
            Services
          </Link>
          <Link
            href="#"
            className={button}
            typeof="button"
            onMouseEnter={() => setSustainability(true)}
            onMouseLeave={() => setSustainability(false)}
          >
            Sustainability <ChevronDown className="h-4 w-4" />
            {sustainability && (
              <Motion
                initial={{ x: -60, y: 20, opacity: 0 }}
                animate={{ x: -60, y: 0, opacity: 1 }}
                exit={{ x: -60, y: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={ul}
              >
                <Link className={menuItem} href="/quality-compliance">
                  Quality Compliance
                </Link>
                <Link className={menuItem} href="/csr">
                  CSR
                </Link>
              </Motion>
            )}
          </Link>
          <Link
            href="#"
            onClick={() => careerRef.current?.click()}
            className={button}
            typeof="button"
          >
            Careers
          </Link>
          <Link href="/contact" className={button} typeof="button">
            Contact Us
          </Link>
        </nav>
        <Dialog>
          <DialogTrigger asChild>
            <button ref={careerRef} className="hidden">
              Careers
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Career Form</DialogTitle>
            </DialogHeader>
            <CareerForm />
          </DialogContent>
        </Dialog>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "flex lg:hidden",
                isScrolled ? "text-black" : "text-white"
              )}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="py-10">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>About</AccordionTrigger>
                <AccordionContent className="flex flex-col">
                  <SheetClose asChild>
                    <Button variant="link" asChild>
                      <Link href="/overview">Overview</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="link" asChild>
                      <Link href="/international">International Partners</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="link" asChild>
                      <Link href="/domestic">Domestic Partners</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="link" asChild>
                      <Link href="/infrastructure">Infrastructure</Link>
                    </Button>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Products</AccordionTrigger>
                <AccordionContent className="flex flex-col">
                  <SheetClose asChild>
                    <Button variant="link" asChild>
                      <Link href="/disperse-dyes">Disperse Dyes</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="link" asChild>
                      <Link href="/reactive-dyes">Reactive Dyes</Link>
                    </Button>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>

              <div className="h-14 flex justify-start items-center">
                <SheetClose asChild>
                  <Link
                    href="/services"
                    className="text-primary w-full underline-offset-4 hover:underline font-medium"
                  >
                    Services
                  </Link>
                </SheetClose>
              </div>
              <Separator />

              <AccordionItem value="item-3">
                <AccordionTrigger>Sustainability</AccordionTrigger>
                <AccordionContent className="flex flex-col">
                  <SheetClose asChild>
                    <Button variant="link" asChild>
                      <Link href="/quality-compliance">Quality Compliance</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="link" asChild>
                      <Link href="/csr">CSR</Link>
                    </Button>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>

              <div className="h-14 flex justify-start items-center">
                <SheetClose asChild>
                  <button
                    onClick={() => careerRef.current?.click()}
                    className="text-primary text-left w-full underline-offset-4 hover:underline font-medium"
                  >
                    Careers
                  </button>
                </SheetClose>
              </div>
              <Separator />

              <div className="h-14 flex justify-start items-center">
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="text-primary w-full underline-offset-4 hover:underline font-medium"
                  >
                    Contact Us
                  </Link>
                </SheetClose>
              </div>
            </Accordion>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
