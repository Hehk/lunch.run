import Head from 'next/head'
import Image from 'next/image'
import H1 from '../components/h1'
import GraphPaper from '../components/graph_paper'
import Container from '../components/container'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lunch.run</title>
        <meta name="description" content="Kyle Henderson's special place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="graph-paper">
        <Container> 
          <GraphPaper />
          <H1>Yo!</H1>
        </Container>
      </main>
    </div>
  )
}
