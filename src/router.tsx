import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Flyers } from './pages/Flyers'
import { Cutaway } from './pages/Сutaway'
import { Diplomas } from './pages/Diplomas'
import { Portfolio } from './pages/Portfolio'


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        // element:
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/flyers',
        element: <Flyers />
      },
      {
        path: '/cutaway',
        element: <Cutaway />
      },
      {
        path: '/diplomas',
        element: <Diplomas />
      },
    ]
  }
])
