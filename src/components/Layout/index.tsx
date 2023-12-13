import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { Footer } from '../Footer'
import './Layout.scss'

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
