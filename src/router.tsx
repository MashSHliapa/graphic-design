import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Flyers } from './pages/Flyers'
import { Cutaways } from './pages/Сutaways'
import { DiplomasAndCertificates } from './pages/DiplomasAndCertificates'
import { Portfolio } from './pages/Portfolio/Portfolio'
import { Logo } from './pages/Logo'
// import { Services } from './pages/Services'
import { StickersAndTags } from './pages/StickersAndTags'
import { InfographicsPostsStories } from './pages/InfographicsPostsStories/InfographicsPostsStories'
import { PostersAndBanners } from './pages/PostersAndBanners'
import { NotebooksAndMenu } from './pages/NotebooksAndMenu'
import { Main } from './components/Main/Main'
import { Prices } from './pages/Prices/Prices'

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
        path: '/prices',
        element: <Prices />
      },
      {
        path: '/portfolio/flyers',
        element: <Flyers />
      },
      {
        path: '/portfolio/cutaways',
        element: <Cutaways />
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
        path: '/portfolio/stickers_and_tags',
        element: <StickersAndTags />
      },
      {
        path: '/portfolio/posts_and_stories',
        element: <InfographicsPostsStories />
      },
      {
        path: '/portfolio/posters_and_banners',
        element: <PostersAndBanners />
      },
      {
        path: '/portfolio/notebooks_and_menu',
        element: <NotebooksAndMenu />
      },
    ]
  }
])
