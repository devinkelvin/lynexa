import type { Metadata } from "next";
import "./globals.css";
import "./styles/fonts.css";



export const metadata: Metadata = {
  title: 'Lynexa Innovations | Technology Innovation Partner',
  description: 'Transforming visionary ideas into tangible technological solutions.',
  // openGraph: {
  //   type: "website",
  //   url: "https://app.rinserush.com",
  //   title: "RinseRush",
  //   description:
  //     "RinseRush - Building Africa's most trusted laundry network.",
  //   siteName: "Rinse Rush",
  //   images: [
  //     {
  //       url: "https://app.rinserush.com/images/rinse-rush.ico",
  //     },
  //   ],
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}