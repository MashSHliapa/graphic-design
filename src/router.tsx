import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Flyers } from './pages/Flyers'
import { Cutaway } from './pages/Сutaway'
import { DiplomasAndCertificates } from './pages/DiplomasAndCertificates'
import { Portfolio } from './pages/Portfolio'
import { Logo } from './pages/Logo'
// import { Services } from './pages/Services'
import { Stickers } from './pages/Stickers'
import { Stories } from './pages/Stories'
import { PostersAndBanners } from './pages/PostersAndBanners'
import { NotebooksAndMenu } from './pages/NotebooksAndMenu'
import { Main } from './components/Main'
import { Cost } from './pages/Cost'


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      // {
      //   path: '/',
      //   element: <Services />
      // },
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/cost',
        element: <Cost />
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
      {
        path: '/portfolio/stories',
        element: <Stories />
      },
      {
        path: '/portfolio/posters',
        element: <PostersAndBanners />
      },
      {
        path: '/portfolio/notebooks_menu',
        element: <NotebooksAndMenu />
      },
    ]
  }
])
