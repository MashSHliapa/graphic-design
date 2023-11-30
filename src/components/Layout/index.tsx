
import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import './Layout.scss'

export function Layout() {
  return (
    <div className="layout">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
