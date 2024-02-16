import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// Lazy
const MainView = lazy(() => import('../../../page/MainView/MainView'))

//Skeletons
import MainViewSkeleton from '../../../page/MainView/MainViewSkeleton'
import PerfumeView from '../../../page/PerfumeView/PerfumeView'
import Category from '../../../page/Category/Category'



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
                <Suspense fallback={<></>}>
                    <PerfumeView />
                </Suspense>
            }
        />
        <Route
            path='/category/:name'
            element={
                <Suspense fallback={<></>}>
                    <Category />
                </Suspense>
            }
        />
    </Routes>
  )
}

export default MainRoutes