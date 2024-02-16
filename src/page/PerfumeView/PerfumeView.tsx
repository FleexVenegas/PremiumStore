import { useEffect, useState } from 'react'
import MainDiv from '../../components/molecules/MainDiv/MainDiv'
import { useParams } from 'react-router-dom'

// Styles
import "./PerfumeView.scss"

// Components
import StarRatings from '../../components/molecules/StarRatings/StarRatings'
import ReturnBtn from '../../components/atoms/ReturnBtn/ReturnBtn'
import PerfumeMenu from '../../components/molecules/PerfumeMenu/PerfumeMenu'

interface sizeProps{
    id: number
    size: string
    select: boolean
}

interface perfumeStateProps{
    id: string | undefined
    name: string | undefined
    star: number
    price: string | undefined
    sizes: sizeProps[]
    description: string | undefined
}

const PerfumeView = () => {
    const { id, name, image } = useParams()
    const originalPath = image?.replace(/-/g, '/');

    const [perfumeDetail, setPerfumeDetail] = useState<perfumeStateProps[]>([
        {
            id: id,
            name: name,
            star: 5,
            price: "2,150.00",
            sizes: [
                { id: 1, size: "150", select: false },
                { id: 2, size: "30", select: false },
                { id: 3, size: "100", select: false }
            ],
            description: " It is a captivating fragrance that transports you to a " + 
                    "world of mystery and elegance. With its enigmatic notes, "+ 
                    "this essence envelops you in a hypnotic mix of dark and seductive chords. " + 
                    "Imagine a starry night, where sensuality mixes with intrigue, " + 
                    "creating a unique and fascinating atmosphere."
        }
    ])

    useEffect(() => {
        setPerfumeDetail((preventDetail) => {
            return preventDetail.map((perfume) => {
               return {
                    ...perfume,
                    name,
                    id
               }
            })
        
        })
    }, [name])
    

    //Esta función se encarga de cambiar los valores que tiene sizes
    const handleSizeClick = (perfumeId: string | undefined, sizeId: number) => {
        setPerfumeDetail((prevPerfumeDetail) =>
          prevPerfumeDetail.map((perfume) =>
            perfume.id === perfumeId
              ? {
                  ...perfume,
                  sizes: perfume.sizes.map((size) =>
                        size.id === sizeId ? { ...size, select: true } : { ...size, select: false }
                  ),
                }
              : perfume
          )
        );
    };


  return (
        <MainDiv className='PerfumeView'>

            <ReturnBtn url='/' />

            <div className='p-cntHeader'>
                <div className="p-left">
                    <div className={`p-cntImage`}>
                        <img src={`${originalPath}`} alt="" className='p-img' />
                    </div>
                </div>
                <div className="p-right">
                    {perfumeDetail.map((_, idx) => {
                        return(
                            <div key={idx} className='p-cnt_inside'>
                                <div className='p-cntDatas'>
                                    <h1 className='p-title'>{_.name}</h1>
                                    <StarRatings numberStar={_.star}/>
                                    <p className='p-code'><span>Product code:</span> {_.id}</p>
                                </div>
                                <div className='p-cntPrice'>
                                    $ {_.price}
                                </div>
                                <div className='p-cnTamnio'>
                                    Size
                                    <div className='p-block'>
                                        {_.sizes.map((sz, idx) => (
                                                <div key={idx} className={`p-mincard ${sz.select && "p-selected"}`} onClick={() => handleSizeClick((_.id), sz.id)}>
                                                    {sz.size} ml
                                                </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='p-cntDescription'>
                                    Description:
                                <p className='p-descrip'>{_.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="p-cnt_similar">
                <h2 className='p-titleSimilar'>Similar products</h2>
                <div className='p-cntInside'>
                    <PerfumeMenu classTop='similar-products' scroll/>
                </div>
            </div>
        </MainDiv>
  )
}

export default PerfumeView