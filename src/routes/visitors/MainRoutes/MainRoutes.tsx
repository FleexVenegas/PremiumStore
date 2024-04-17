import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// Lazy
const MainView = lazy(() => import('../../../page/MainView/MainView'))
const Category = lazy(() => import('../../../page/Category/Category'))
const PerfumeView = lazy(() => import('../../../page/PerfumeView/PerfumeView'));
const MensCategory = lazy(() => import('../../../page/MensCategory/MensCategory'));
const ChildrensCategory = lazy(() => import('../../../page/ChildrensCategory/ChildrensCategory'));

//Skeletons
import MainViewSkeleton from '../../../page/MainView/MainViewSkeleton'
import CategorySkeleton from '../../../page/Category/CategorySkeleton'
import PerfumeViewSkeleton from '../../../page/PerfumeView/PerfumeViewSkeleton';

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
            path='/fragrance/:id/:name'
            element={
                <Suspense fallback={<PerfumeViewSkeleton />}>
                    <PerfumeView />
                </Suspense>
            }
        />
        <Route
            path='/fragrance/category/woman'
            element={
                <Suspense fallback={<CategorySkeleton />}>
                    <Category />
                </Suspense>
            }
        />
        <Route
            path='/fragrance/category/man'
            element={
                <Suspense fallback={<CategorySkeleton />}>
                    <MensCategory />
                </Suspense>
            }
        />
        <Route
            path='/fragrance/category/children'
            element={
                <Suspense fallback={<CategorySkeleton />}>
                    <ChildrensCategory />
                </Suspense>
            }
        />
    </Routes>
  )
}

export default MainRoutes