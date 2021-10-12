import '../styles/globals.css'
import NavBar from '../components/molecules/NavBar';
import Footer from '../components/molecules/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
