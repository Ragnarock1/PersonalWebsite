import './globals.css'

export default function RootLayout({
    children,
    page
  }: {
    children: React.ReactNode,
    page: string
  }) {

    return (
      <html lang="en">
        <body>
            {children}
        </body>
      </html>
    )
  }