import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

//Styles
import "./Footer.scss";


const FooterSkeleton = () => {
  
  return (
    <div className="Footer Footer_">
        <div className="f_cnt-logo">
            <SkeletonTheme baseColor='#d1a2a2' highlightColor='#d57d7d'>
                <Skeleton width={200} height={20}/>
                <Skeleton width={180} height={15}/>
            </SkeletonTheme>
        </div>
        <div className="f-netWork">
            <SkeletonTheme baseColor='#d1a2a2' highlightColor='#d57d7d'>
                <Skeleton width={300} height={20}/>
            </SkeletonTheme>
        <div className="f_cnt-icons">
            <SkeletonTheme baseColor='#d1a2a2' highlightColor='#d57d7d'>
                {[...Array(4)].map((_, idx) => (
                    <Skeleton key={idx} width={40} height={40} circle/>
                ))}
            </SkeletonTheme>
        </div>
        </div>
    </div>
  );
};

export default FooterSkeleton;
