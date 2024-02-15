import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// Lazy
const MainView = lazy(() => import('../../../page/MainView/MainView'))

//Skeletons
import MainViewSkeleton from '../../../page/MainView/MainViewSkeleton'



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
    </Routes>
  )
}

export default MainRoutes