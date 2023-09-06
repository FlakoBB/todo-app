import { FiltersProvider } from '@/context/filterContext'
import '@styles/globals.scss'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'TODO APP',
  description: 'TODO APP'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={jost.className}>
        <FiltersProvider>
          {children}
        </FiltersProvider>
      </body>
    </html>
  )
}
