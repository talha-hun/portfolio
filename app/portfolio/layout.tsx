import { Heading } from "@/components/heading"
import { Navbar } from "@/components/navbar"
import { PortfolioNavbar } from "@/components/portfolio-navbar"
import { Suspense } from "react"

const RootLayout = ({children}:{children:React.ReactNode})=>{
    return <div className="bg-big-card relative ml-0 text-white m-10 rounded-2xl p-5 ">
          <Navbar portfolio/>
          <Heading title="Portfolio"/>
          <PortfolioNavbar />
          
          {children}
         
    </div>
}
export default RootLayout
function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
  