import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Assets
import Top1 from "../../assets/images/top1.jpg";
import Top2 from "../../assets/images/black_opium.jpg";
import Top3 from "../../assets/images/fresh.png";
import Top4 from "../../assets/images/davidoff.png";
import Top5 from "../../assets/images/Louis.jpg";

// Styles
import "./PerfumeView.scss";

// Components
import MainDiv from "../../components/molecules/MainDiv/MainDiv";
import StarRatings from "../../components/molecules/StarRatings/StarRatings";
import ReturnBtn from "../../components/atoms/ReturnBtn/ReturnBtn";
import PerfumeMenu from "../../components/molecules/PerfumeMenu/PerfumeMenu";

//Context
import { useStateContext } from "../../context/ContextProvider";

interface sizeProps {
    id: number;
    size: string;
    select: boolean;
}

interface perfumeStateProps {
    id: string | undefined;
    name: string | undefined;
    star: number;
    price: string | undefined;
    sizes: sizeProps[];
    description: string | undefined;
}

const PerfumeView = () => {
    const { id, name } = useParams();

    const { urlImage, path } = useStateContext();

    const [perfumeDetail, setPerfumeDetail] = useState<perfumeStateProps[]>([
        {
            id: id,
            name: name,
            star: 5,
            price: "2,150.00",
            sizes: [
                { id: 1, size: "150", select: false },
                { id: 2, size: "30", select: false },
                { id: 3, size: "100", select: false },
            ],
            description:
                " It is a captivating fragrance that transports you to a " +
                "world of mystery and elegance. With its enigmatic notes, " +
                "this essence envelops you in a hypnotic mix of dark and seductive chords. " +
                "Imagine a starry night, where sensuality mixes with intrigue, " +
                "creating a unique and fascinating atmosphere.",
        },
    ]);

    useEffect(() => {
        setPerfumeDetail((preventDetail) => {
            return preventDetail.map((perfume) => {
                return {
                    ...perfume,
                    name,
                    id,
                };
            });
        });
    }, [name]);

    useEffect(() => {
        const scrollTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

        scrollTop();
    }, []);

    //Esta función se encarga de cambiar los valores que tiene sizes
    const handleSizeClick = (perfumeId: string | undefined, sizeId: number) => {
        setPerfumeDetail((prevPerfumeDetail) =>
            prevPerfumeDetail.map((perfume) =>
                perfume.id === perfumeId
                    ? {
                          ...perfume,
                          sizes: perfume.sizes.map((size) =>
                              size.id === sizeId
                                  ? { ...size, select: true }
                                  : { ...size, select: false }
                          ),
                      }
                    : perfume
            )
        );
    };

    const dataFragrance = [
        {
            id: "4a89c354-9e78-42e1-a6d7-f2c3b1f5d8a2",
            name: "Nautica Voyage",
            image: Top1,
            price: "1,500.000",
            star: 5,
            total: 155,
            top: false,
        },
        {
            id: "f7d2a1b8-5eac-4c61-8b5a-3e9d0f8c6a94",
            name: "Black Opium V2",
            image: Top2,
            price: "1,500.000",
            star: 4.5,
            total: 150,
            top: false,
        },
        {
            id: "c8f6d97b-2fe9-4d8d-aa7c-651e8abf3a61",
            name: "Fresh As Citrus ",
            image: Top3,
            price: "1,500.000",
            star: 4.5,
            total: 130,
            top: true,
        },
        {
            id: "1b3e6f80-80a3-432d-bd88-ebf0a5a72f9f",
            name: "DAVIDOFF Cool Water",
            image: Top4,
            price: "1,500.000",
            star: 4,
            total: 125,
            top: false,
        },
        {
            id: "e2a4cfab-36c1-4a5e-8156-927db146e91d",
            image: Top5,
            price: "1,500.000",
            name: "Louis Vuitton",
            star: 4,
            total: 120,
            top: false,
        },
    ];

    return (
        <MainDiv className="PerfumeView">
            <ReturnBtn url={path.length === 0 ? "/" : path} />

            <div className="p-cntHeader">
                <div className="p-left">
                    <div className={`p-cntImage`}>
                        <img src={`${urlImage}`} alt="" className="p-img" />
                    </div>
                </div>
                <div className="p-right">
                    {perfumeDetail.map((_, idx) => {
                        return (
                            <div key={idx} className="p-cnt_inside">
                                <div className="p-cntDatas">
                                    <h1 className="p-title">{_.name}</h1>
                                    <StarRatings numberStar={_.star} />
                                    <p className="p-code">
                                        <span>Product code:</span> {_.id}
                                    </p>
                                </div>
                                <div className="p-cntPrice">$ {_.price}</div>
                                <div className="p-cnTamnio">
                                    Size
                                    <div className="p-block">
                                        {_.sizes.map((sz, idx) => (
                                            <div
                                                key={idx}
                                                className={`p-mincard ${
                                                    sz.select && "p-selected"
                                                }`}
                                                onClick={() =>
                                                    handleSizeClick(_.id, sz.id)
                                                }
                                            >
                                                {sz.size} ml
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-cntDescription">
                                    Description:
                                    <p className="p-descrip">{_.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="p-cnt_similar">
                <h2 className="p-titleSimilar">Similar products</h2>
                <div className="p-cntInside">
                    <PerfumeMenu
                        classTop="similar-products"
                        scroll
                        data={dataFragrance}
                    />
                </div>
            </div>
        </MainDiv>
    );
};

export default PerfumeView;
