import { ServerList } from "@/components/server-list"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Discord Clone",
  description: "A Discord clone built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex h-screen bg-[#313338]">
          <ServerList />
          {children}
        </div>
      </body>
    </html>
  )
}