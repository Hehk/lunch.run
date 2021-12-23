import Head from "next/head"
import Link from "./Link"

type childProps = { children: React.ReactNode }

function Page({ children }: childProps) {
  return (
    <main>
      {children}
      <style jsx>{`
        main {
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr minmax(100px, 500px) minmax(100px, 500px) 1fr;
          grid-column-gap: 1rem;
          padding: 5rem 2rem;
        }
        
        @media (max-width: 800px) {
          main {
            display: block;
            padding: 2rem;
          }
        }  
      `}</style>
    </main>
  )
}

function Title({ children }: childProps) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          font-weight: bold;
          font-size: 2rem;
        }
      `}</style>
    </div>
  )
}

function Nav({ children }: childProps) {
  return (
    <nav>
      {children}
      <style jsx>{`
        nav {
          grid-column: 2 / 3;
          grid-row: 1;
        }
      `}</style>
    </nav>
  )
}

function Content({ children }: childProps) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          grid-column: 3 / 4;
        }
      `}</style>
    </div>
  )
}

export default function DefaultLayout({
  title,
  hideHome,
  children,
}: { title?: string; hideHome?: boolean } & childProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Source+Serif+Pro:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Page>
        <Nav>
          <Title>{title ? title : "Kyle Henderson"}</Title>
          <div className="links">
            {hideHome ? null : (
              <>
                <Link href="/">Home</Link>
                <br />
              </>
            )}
            <Link href="/about">About</Link>
            <br />
            <Link href="/projects">Projects</Link>
            <br />
            <Link href="/running">Running</Link>
            <br />
            <Link href="/reg">Reg</Link>
          </div>
        </Nav>
        <Content>{children}</Content>
      </Page>

      <style jsx>{`
        .links {
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  )
}
