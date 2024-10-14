import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Flyers } from './pages/Flyers/Flyers'
import { Cutaways } from './pages/Cutaways/Cutaways'
import { DiplomasAndCertificates } from './pages/DiplomasAndCertificates/DiplomasAndCertificates'
import { Portfolio } from './pages/Portfolio/Portfolio'
import { Logo } from './pages/Logo/Logo'
import { StickersAndTags } from './pages/StickersAndTags/StickersAndTags'
import { InfographicsPostsStories } from './pages/InfographicsPostsStories/InfographicsPostsStories'
import { PostersAndBanners } from './pages/PostersAndBanners/PostersAndBanners'
import { PriceMenuNotebooks } from './pages/PriceMenuNotebooks/PriceMenuNotebooks'
import { Prices } from './pages/Prices/Prices'
import { Main } from './components/Main/Main'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
        path: '/portfolio/diplomas_certificates',
        element: <DiplomasAndCertificates />
      },
      {
        path: '/portfolio/logo',
        element: <Logo />
      },
      {
        path: '/portfolio/stickers_tags',
        element: <StickersAndTags />
      },
      {
        path: '/portfolio/infographics_posts_stories',
        element: <InfographicsPostsStories />
      },
      {
        path: '/portfolio/posters_banners',
        element: <PostersAndBanners />
      },
      {
        path: '/portfolio/price_menu_notebooks',
        element: <PriceMenuNotebooks />
      },
    ]
  }
])
