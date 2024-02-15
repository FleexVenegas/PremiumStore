import { NavLink } from "react-router-dom";

//Styles
import "./Footer.scss";

//Assets
import Facebook from "../../../assets/icons/facebook.png";
import Instagram from "../../../assets/icons/instagram.png";
import Twitter from "../../../assets/icons/twitter.png";
import Linkedin from "../../../assets/icons/linkedin.png";

const Footer = () => {
  const netWorks = [
    {
      id: 1,
      icon: Facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: 2,
      icon: Instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: 3,
      icon: Twitter,
      link: "https://twitter.com/",
    },
    {
      id: 4,
      icon: Linkedin,
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <div className="Footer Footer_">
      <div className="f_cnt-logo">
        <h1 className="f-logo">Premium Store</h1>
        <p className="f-desc">All rights reserved</p>
      </div>
      <div className="f-netWork">
        <p>Learn more about us by following our social networks</p>
        <div className="f_cnt-icons">
          {netWorks.map((_, idx) => {
            return (
              <NavLink  className={"f-link"} key={idx} to={_.link} target="black_">
                <img src={_.icon} alt="" className="f-iconLink" />
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
