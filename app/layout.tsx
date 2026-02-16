import type { Metadata } from 'next'
import '../src/styles/styleGuide.css'

export const metadata: Metadata = {
  title: 'Ming Ye',
  description: 'Product Designer - Building solutions for complex workflows that drive measurable impact.',
  keywords: 'UX/UI Design, Product Design, Front End Designer, Case Studies',
  authors: [{ name: 'Ming Ye' }],
  openGraph: {
    images: ['https://portfoliocontent.blob.core.windows.net/portolioimages/og-image.png'],
  },
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
