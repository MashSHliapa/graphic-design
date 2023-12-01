
import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import './Layout.scss'
import { Flyers } from '../../pages/Flyers'

export function Layout() {
  return (
    <div className="layout">
      <Header/>
      <Main/>
      <Flyers/>
      <Footer/>
    </div>
  )
}
