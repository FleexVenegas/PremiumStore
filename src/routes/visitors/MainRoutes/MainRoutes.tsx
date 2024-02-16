import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// Lazy
const MainView = lazy(() => import('../../../page/MainView/MainView'))

//Skeletons
import MainViewSkeleton from '../../../page/MainView/MainViewSkeleton'
import PerfumeView from '../../../page/PerfumeView/PerfumeView'



const MainRoutes = () => {
  return (
    <Routes>
        <Route
            path='/'
            element={
                <Suspense fallback={<MainViewSkeleton />}>
                    <MainView />
                </Suspense>
            }
        />
        <Route
            path='/fragrance/:id/:name/:image'
            element={
                <Suspense fallback={<MainViewSkeleton />}>
                    <PerfumeView />
                </Suspense>
            }
        />
    </Routes>
  )
}

export default MainRoutes