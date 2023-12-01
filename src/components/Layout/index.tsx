
import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import './Layout.scss'
import { Flyers } from '../../pages/Flyers'
import { Cutaway } from '../../pages/Сutaway'

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />
      <Flyers />
      <Cutaway />
      <Footer />
    </div>
  )
}
