import { useState } from "react";
import { useLocation } from "react-router-dom";

//Styles
import "./Header.scss";

//Assets
import Menu from "../../../assets/icons/menu.png";

const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const location = useLocation();
    const path = location.pathname.startsWith("/fragrance");

    const link = [
        { id: 1, Linkname: "Promotions" },
        { id: 2, Linkname: "Our best perfumes" },
        { id: 3, Linkname: "Category" },
        { id: 4, Linkname: "Reviews" },
        { id: 5, Linkname: "Contact us" },
    ];

    const scrollToMyRef = (id: number) => {
        if (id === 1) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            document
                .getElementById(`${id}`)
                ?.scrollIntoView({ behavior: "smooth" });
        }
        setOpenMenu(false);
    };

    return (
        <header className="Header Header_">
            <h1 className="h-logo">Premium Store</h1>

            {!path && (
                <nav className="h_cnt-link">
                    {link.map((_, idx) => {
                        return (
                            <div
                                key={idx}
                                className="h-link"
                                onClick={() => scrollToMyRef(_.id)}
                            >
                                {_.Linkname}
                            </div>
                        );
                    })}
                </nav>
            )}

            {/* Este bloque de código es el que se mostrara en movil */}
            {!path && (
                <nav className="movil_cnt-link">
                    <button
                        className="h_button-menu"
                        onClick={() => {
                            setOpenMenu(true);
                        }}
                    >
                        <img src={Menu} alt="" className="h-icon_menu" />
                    </button>
                </nav>
            )}
            <div className={`movil-link ${openMenu && "show-menu"}`}>
                <button
                    className="movil-btnClose"
                    onClick={() => setOpenMenu(false)}
                >
                    ❌
                </button>
                {link.map((_, idx) => {
                    return (
                        <div
                            key={idx}
                            className="h-link"
                            onClick={() => scrollToMyRef(_.id)}
                        >
                            {_.Linkname}
                        </div>
                    );
                })}
            </div>
        </header>
    );
};

export default Header;
