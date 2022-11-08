import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BizEverywhere</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to BizEverywhere" />
        <p className="description">
          Website is currently Under Construction. Please come back at another time!
        </p>
      </main>

      <Footer />
    </div>
  )
}
