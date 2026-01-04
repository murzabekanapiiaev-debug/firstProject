
import Instagram from "../assets/imgFooter/Instagram.svg";
import Facebook from "../assets/imgFooter/facebook.svg";
import Twitter from "../assets/imgFooter/twitter.svg";
import In from "../assets/imgFooter/linkedin.svg"

import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <span className="invo"> Copyright © 2020 Invoriem</span>
                <span className="info">info@invoriem.com</span>
                <div>

                    <img src={Instagram} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={In} alt="" />
                </div>
            </div>
        </>
    );
};
export default Footer;
