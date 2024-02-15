import { CSSProperties } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const HeaderSkeleton = () => {

    //Styles
    const containerStyles: CSSProperties = {
        width: "100%", 
        height: 70, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        paddingRight: 30, 
        paddingLeft: 30,
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
        zIndex: 3
    }

  return (
    <div className='Header' 
        style={containerStyles}>
        <SkeletonTheme baseColor='#d1a2a2' highlightColor='#d57d7d'>
            <Skeleton width={150} height={30}/>
            <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
                {[...Array(5)].map((_, idx) => (
                    <Skeleton key={idx} width={100} height={20}/>
                ))}
            </div>
        </SkeletonTheme>
    </div>
  )
}

export default HeaderSkeleton