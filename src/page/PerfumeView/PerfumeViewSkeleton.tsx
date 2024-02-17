
// Styles
import "./PerfumeView.scss"

// Components
import MainDiv from '../../components/molecules/MainDiv/MainDiv'
import ReturnBtn from '../../components/atoms/ReturnBtn/ReturnBtn'
import Skeleton from 'react-loading-skeleton'

const PerfumeViewSkeleton = () => {

    const perfumeDetail = [
        {
            id: "",
            name: "",
            star: 0,
            price: "",
            sizes: [
                { id: 1, size: "", select: false },
                { id: 2, size: "", select: false },
                { id: 3, size: "", select: false }
            ],
            description: ""
        }
    ]

  return (
        <MainDiv className='PerfumeView'>
            <ReturnBtn skeleton/>
            <div className='p-cntHeader'>
                <div className="p-left">
                    <Skeleton width={400} height={400}/>
                </div>
                <div className="p-right">
                    {perfumeDetail.map((_, idx) => {
                        return(
                            <div key={idx} className='p-cnt_inside'>
                                <div className='p-cntDatas'>
                                    <Skeleton width={300} height={20}/>
                                    <Skeleton width={150} height={15}/>
                                    <Skeleton width={350} height={20}/>
                                </div>
                                <div className='p-cntPrice'>
                                    <Skeleton width={150} height={30}/>
                                </div>
                                <div className='p-cnTamnio'>
                                    <Skeleton width={50} height={10}/>
                                    <div className='p-block'>
                                        {_.sizes.map((sz, idx) => (
                                            <Skeleton key={idx} width={70} height={40}/>
                                        ))}
                                    </div>
                                </div>
                                <div className='p-cntDescription'>
                                    <Skeleton width={100} height={15}/>
                                    <div style={{marginTop: 15, display: "flex", flexDirection: "column", gap: 10}}>
                                        {[...Array(4)].map((_, idx) => (
                                            <Skeleton key={idx} width={300} height={15}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="p-cnt_similar">
                <Skeleton width={300} height={20}/>
                <div className='p-cntInside'>
                    {[...Array(5)].map((_, idx) => (
                        <Skeleton key={idx} width={ 250} height={250}/>
                    ))}
                </div>
            </div>
        </MainDiv>
  )
}

export default PerfumeViewSkeleton