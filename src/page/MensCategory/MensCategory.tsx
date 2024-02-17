import { useEffect } from "react";
// Components
import MainDiv from "../../components/molecules/MainDiv/MainDiv";
import PerfumeMenu from "../../components/molecules/PerfumeMenu/PerfumeMenu";
import ReturnBtn from "../../components/atoms/ReturnBtn/ReturnBtn";

//Assets
import Top1 from "../../assets/images/man/man1.avif";
import Top2 from "../../assets/images/man/man2.avif";
import Top3 from "../../assets/images/man/man3.avif";
import Top4 from "../../assets/images/man/man4.avif";
import Top5 from "../../assets/images/man/man5.avif";
import Top6 from "../../assets/images/man/man6.avif";
import Top7 from "../../assets/images/man/man7.avif";
import Top8 from "../../assets/images/man/man8.avif";
import Top9 from "../../assets/images/man/man9.avif";

import "./MensCategory.scss";
const MensCategory = () => {
  // Toda la información del top de perfumes
  const dataFragrance = [
    {
      id: "4a89c354-9e78-42e1-a6d7-f2c3b1f5d8a2",
      name: "Versace Eros Eau de Toilette for Men",
      image: Top1,
      star: 5,
      total: 155,
      top: false,
    },
    {
      id: "f7d2a1b8-5eac-4c61-8b5a-3e9d0f8c6a94",
      name: "Jesus Del Pozo Halloween Eau de Toilette for Men",
      image: Top2,
      star: 4.5,
      total: 150,
      top: false,
    },
    {
      id: "c8f6d97b-2fe9-4d8d-aa7c-651e8abf3a61",
      name: "Dior Sauvage Parfum for men",
      image: Top3,
      star: 4.5,
      total: 130,
      top: false,
    },
    {
      id: "1b3e6f80-80a3-432d-bd88-ebf0a5a72f9f",
      name: "Carolina Herrera Ch Sport Eau de Toilette for Men",
      image: Top4,
      star: 4,
      total: 125,
      top: false,
    },
    {
      id: "e2a4cfab-36c1-4a5e-8156-927db146e91d",
      image: Top5,
      name: "Nautica Voyage Men's Fragrance 100 ml Eau de Toilette",
      star: 4,
      total: 120,
      top: false,
    },
    {
      id: "e2a4cfab-36c1-4a5e-8156-927db146e91d",
      image: Top6,
      name: "Jean Paul Gaultier Le Beau Eau de Toilette for Men",
      star: 4,
      total: 120,
      top: false,
    },
    {
      id: "e2a4cfab-36c1-4a5e-8156-927db146e91d",
      image: Top7,
      name: "Armaf Club De Nuit Intense Eau de Toilette for Men",
      star: 4,
      total: 120,
      top: false,
    },
    {
      id: "e2a4cfab-36c1-4a5e-8156-927db146e91d",
      image: Top8,
      name: "Versace The Dreamer Eau de Toilette for Men",
      star: 4,
      total: 120,
      top: false,
    },
    {
      id: "e2a4cfab-36c1-4a5e-8156-927db146e91d",
      image: Top9,
      name: "Versace Dylan Blue Pour Homme Man Eau de Toilette for Men",
      star: 4,
      total: 120,
      top: false,
    },
  ];


  useEffect(() => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    }

    scrollTop()
  }, [])
  


  return (
    <MainDiv className="MensCategory">
      <ReturnBtn url="/" />
      <h1 className="ca-title">Fragrances for men</h1>
      <div className="c-cntWomen">
        <PerfumeMenu data={dataFragrance} />;
      </div>
      <div className="c-summer">
        <h1>Wrap yourself in aromas that last for hours</h1>
        <div className="c-cntSummer">
          <PerfumeMenu data={dataFragrance} />
        </div>
      </div>
    </MainDiv>
  );
};

export default MensCategory;
