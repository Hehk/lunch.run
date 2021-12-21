import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import '../styles/global.css'

type childProps = { children: React.ReactNode }

function Page({ children }: childProps) {
  return <main>
    {children}
    <style jsx>{`
      main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;
      }
    `}</style>
  </main>
}

function Title({ children }: childProps) {
  return <div>
    {children}
    <style jsx>{`
      div {
        font-weight: bold;
        font-size: 2rem;
      }
    `}</style>
  </div>
}

function Nav({ children }: childProps) {
  return <nav>
    {children}
    <style jsx>{`
      nav {
        grid-column: 1 / 2;
        grid-row: 1;
      }
    `}</style>
  </nav>
}

function Content({ children }: childProps) {
  return <div>
    {children}
    <style jsx>{`
      div {
        grid-column-start: 2;
      }      
    `}</style>
  </div>
}

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Lunch.run</title>
      <meta name="description" content="Kyle Henderson's special place" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Source+Serif+Pro:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
    </Head>

    <Page>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Nav>
        <Title>Kyle Henderson</Title>
        <div className="links">
          <Link href="/about"><a>About</a></Link>
          <Link href="/projects"><a>Projects</a></Link>
          <Link href="/running"><a>Running</a></Link>
          <Link href="/reg"><a>Reg</a></Link>
        </div>
      </Nav>
    </Page>

    <style jsx>{`
      .links {
        margin-top: 2rem;
      }
      a {
        color: black;
        display: block;
      }
    `}</style>
  </>
}
export default MyApp;
