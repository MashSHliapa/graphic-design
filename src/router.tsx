import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Flyers } from './pages/Flyers'
import { Cutaways } from './pages/Сutaways'
import { DiplomasAndCertificates } from './pages/DiplomasAndCertificates'
import { Portfolio } from './pages/Portfolio'
import { Logo } from './pages/Logo'
// import { Services } from './pages/Services'
import { StickersAndTags } from './pages/StickersAndTags'
import { PostsAndStories } from './pages/PostsAndStories'
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
        element: <PostsAndStories />
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
