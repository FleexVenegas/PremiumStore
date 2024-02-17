import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

// Components
import MainDiv from "../../components/molecules/MainDiv/MainDiv";
import ReturnBtn from "../../components/atoms/ReturnBtn/ReturnBtn";

//Styles
import "./Category.scss";


const CategorySkeleton = () => {

  return (
    <MainDiv className="Category">
      <ReturnBtn skeleton/>
      <Skeleton width={300} height={20}/>
      <div className="c-cntWomen">
        {[...Array(9)].map((_, idx) => {
            return (
                <div key={idx} style={{display: "flex", flexDirection: "column", gap: 10}}>
                    <Skeleton width={250} height={250}/>
                    <Skeleton width={200} height={20}/>
                    <Skeleton width={150} height={15}/>
                </div>
            )
        })}
      </div>
      <div className="c-summer">
        <Skeleton width={300} height={20}/>
        <div className="c-cntSummer">
            {[...Array(9)].map((_, idx) => {
                return (
                    <div key={idx} style={{display: "flex", flexDirection: "column", gap: 10}}>
                        <Skeleton width={250} height={250}/>
                        <Skeleton width={200} height={20}/>
                        <Skeleton width={150} height={15}/>
                    </div>
                )
            })}
        </div>
      </div>
    </MainDiv>
  );
};

export default CategorySkeleton;
