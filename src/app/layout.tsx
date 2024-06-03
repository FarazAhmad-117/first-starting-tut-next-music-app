import type { Metadata } from "next";
import {Inter} from 'next/font/google';
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title:'Next JS For Begginer',
  description:'The start of a new Journey towards betterment of lifestyle',
}

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
  return(
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <NavBar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  )
}

