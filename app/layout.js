import Navbar from "@/components/navbar/Navbar"
import "bootstrap/dist/css/bootstrap.css"
import {Roboto} from "next/font/google"
export const metadata = {
  title: 'Nitin',
  description: 'Portfolio V1',
  icons:{
    icon:'/logo/logo.jpg'
  }
}
const roboto = Roboto({
  weight:'400',
  style:'normal',
  subsets:["latin"],
})
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={roboto.className}>
        <nav>
          <div className="w-100 h-25"></div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
