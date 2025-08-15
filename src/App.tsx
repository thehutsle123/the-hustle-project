import { useState, Suspense } from 'react'
import { useRoutes } from 'react-router'
import './App.css'
import Layout from './components/layout/Layout'
import routes from '~pages'
import Error from './components/interactions/Error'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense>
      {useRoutes([
        {
          element: <Layout />,
          children: [
            ...routes, {
              path: "*", element: <Error />
            }
          ]
        }
      ])}
    </Suspense>
  )
}

export default App
