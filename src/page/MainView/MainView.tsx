//Styles
import "./MainView.scss";

//Components
import MainDiv from "../../components/molecules/MainDiv/MainDiv";
import Contact from "../Views/Contact/Contact";
import PerfumeMenu from "../../components/molecules/PerfumeMenu/PerfumeMenu";
import Slider from "../../components/organims/Slider/Slider";
import CardCategory from "../../components/molecules/CardCategory/CardCategory";
import CommentCard from "../../components/molecules/CommentCard/CommentCard";

//Assets
import WhatsApp from "../../assets/icons/whatsapp.png";
import Top1 from "../../assets/images/top1.jpg";
import Top2 from "../../assets/images/black_opium.jpg";
import Top3 from "../../assets/images/fresh.png";
import Top4 from "../../assets/images/davidoff.png";
import Top5 from "../../assets/images/Louis.jpg";

const MainView = () => {
  // Toda la información del top de perfumes
  const dataFragrance = [
    {
      id: "4a89c354-9e78-42e1-a6d7-f2c3b1f5d8a2",
      name: "Nautica Voyage",
      image: Top1,
      price: "1,500.000",
      star: 5,
      total: 155,
      top: true,
    },
    {
      id: "f7d2a1b8-5eac-4c61-8b5a-3e9d0f8c6a94",
      name: "Black Opium V2",
      image: Top2,
      price: "1,500.000",
      star: 4.5,
      total: 150,
      top: true,
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
      top: true,
    },
    {
      id: "e2a4cfab-36c1-4a5e-8156-927db146e91d",
      image: Top5,
      price: "1,500.000",
      name: "Louis Vuitton",
      star: 4,
      total: 120,
      top: true,
    },
  ];

  return (
    <MainDiv className="MainView">
      <div className="m-secct1" id="1">
        <div className="s1-cntTitle">
          <h1 className="s1-descrip">
            Discover our promotions on exclusive perfumes and accessories.
          </h1>
        </div>
        <Slider />
      </div>
      <div className="m-secct2 stylesGnl" id="2">
        <h2 className="s2-title">Our best perfumes</h2>
        <div className="m-cntFragrance">
          <PerfumeMenu data={dataFragrance} />
        </div>
      </div>
      <div className="m-secct3 stylesGnl" id="3">
        <h2 className="s2-title">Category</h2>
        <div className="s2-cntCategory">
          <CardCategory />
        </div>
      </div>
      <div className="m-secct4 stylesGnl" id="4">
        <h2 className="s2-title">Reviews</h2>
        <div className="s4-cntReviews">
          <CommentCard />
        </div>
      </div>
      <div className="m-secct5 stylesGnl" id="5">
        <Contact />
      </div>
      <div className="bntWhats">
        <img src={WhatsApp} alt="" />
      </div>
    </MainDiv>
  );
};

export default MainView; 
