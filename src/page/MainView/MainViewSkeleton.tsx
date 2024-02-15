import Skeleton from 'react-loading-skeleton'

import "./MainView.scss"


const MainViewSkeleton = () => {

  return (
    <div className='MainDiv' style={{padding: 30, paddingTop: 50, display: "flex", flexDirection: 'column', gap: 120}}>
      <div style={{width: "100%", display: "flex", flexDirection: 'column', alignItems: "center", gap: 25}}>
        <Skeleton width={350} height={15} />
        <Skeleton width={1300} height={500} className='skeletonBanner'/>
        <Skeleton width={300} height={200} className='skeletonBanner-movil'/>   
      </div>

      <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 20}}>
        <Skeleton width={150} height={30}/>
        <div style={{display: 'flex', flexWrap: "wrap", gap: 20, justifyContent: 'space-evenly'}}>

            {[...Array(5)].map((_, idx) => (
              <div key={idx} style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                <Skeleton width={300} height={250}/>

                {[...Array(3)].map((_, indx) => (
                  <Skeleton key={indx} width={200} height={30}/>
                ))}

              </div>
            ))}

        </div>
      </div>

      <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 20}}>
        <Skeleton width={150} height={30}/>
        <div style={{display: 'flex', flexWrap: "wrap", gap: 20, justifyContent: "center"}}>

            {[...Array(3)].map((_, idx) => (
                <Skeleton key={idx} height={250} className='cardRevi-es'/>
            ))}

        </div>
      </div>
    </div>
  )
}

export default MainViewSkeleton