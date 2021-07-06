import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/custom.css'
import '../styles/custom/custom_module.css'
import 'swiper/swiper.css'
import Layout from '../layout/Layout'
function MyApp({ Component, pageProps }) {
  return( <Layout>

            <Component {...pageProps} />
          </Layout>
          ) 
}

export default MyApp
