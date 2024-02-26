import { useNavigate } from "react-router-dom";

//Components
import StarRatings from "../StarRatings/StarRatings";

//Styles
import "./PerfumeMenu.scss";

interface PerfumeMenuProps {
  className?: string;
  classTop?: string;
  scroll?: boolean;
  data?: {
    id: string;
    name: string;
    image: string;
    star: number;
    price: string | undefined;
    total: number;
    top: boolean;
  }[];
}

const PerfumeMenu = ({
  className,
  classTop,
  scroll = false,
  data,
}: PerfumeMenuProps) => {
  const navigate = useNavigate();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavigate = (id: string, name: string, image: string) => {
    if (scroll) {
      scrollTop();
    }

    const path = image.replace(/\//g, "-");
    navigate(`/fragrance/${id}/${name}/${path}`);
  };

  return (
    <>
      {data?.map((_, idx) => {
        return (
          <div
            key={idx}
            className={`PerfumeMenu ${className}`}
            onClick={() => handleNavigate(_.id, _.name, _.image)}
          >
            <div className={`p-cntImage ${classTop}`}>
              <img src={_.image} alt="" className="p-image" />
              <div className="p-hover"></div>
              {_.top && (
                <div className="p-top">
                  <label className="p-labelTop">Top</label>
                </div>
              )}
            </div>
            <div className="p-cntInfo">
              <p className="p-name">{_.name}</p>
              <p className="p-name">$ {_.price}</p>
              <div className="p-cntStar">
                <StarRatings numberStar={_.star} />
                <label className="label-total">({_.total})</label>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PerfumeMenu;
