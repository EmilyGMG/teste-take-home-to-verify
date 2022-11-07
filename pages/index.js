import Head from 'next/head'

import ArrowPink from '../assets/svg/arrow-pink.svg'
import Button from './components/Button'
import { Carousel } from './components/Carousel'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Post from './components/Post'

import "swiper/css/bundle";

const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap" rel="stylesheet" />
    </Head>

    <div className="container">

      <Header />
      <section className='wrapper-description'>
        <h1>Fusce tempus, tellus eget lobortis gravida.</h1>
        <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</h6>
        <div>
          <Button
            background={'button-white'}
            iconColor={'icon-arrow-pink'}
            src={ArrowPink}
            title="Lorem ipsum dolor"
          />
        </div>
      </section>
      <Post />
      <Carousel />
      <Footer />
    </div>
  </>
)

export default Home;