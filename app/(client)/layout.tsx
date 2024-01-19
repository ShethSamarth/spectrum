import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TopFab } from "@/components/top-fab"
import { Toaster } from "@/components/ui/sonner"

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster position="bottom-center" />
      <TopFab />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default ClientLayout
