import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Flyers } from './pages/Flyers'
import { Cutaway } from './pages/Сutaway'
import { DiplomasAndCertificates } from './pages/DiplomasAndCertificates'
import { Portfolio } from './pages/Portfolio'
import { Logo } from './pages/Logo'
import { Services } from './pages/Services'
import { Stickers } from './pages/Stickers'


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Services />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/portfolio/flyers',
        element: <Flyers />
      },
      {
        path: '/portfolio/cutaway',
        element: <Cutaway />
      },
      {
        path: '/portfolio/diplomas_and_certificates',
        element: <DiplomasAndCertificates />
      },
      {
        path: '/portfolio/logo',
        element: <Logo />
      },
      {
        path: '/portfolio/stickers',
        element: <Stickers />
      },
    ]
  }
])
