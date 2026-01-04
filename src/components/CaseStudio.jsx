
import Big from "../assets/Big.jpg";
import Chol from "../assets/Chol.jpg";
import Home from "../assets/Home.png"
import "./CaseStudio.css"
const CaseStudio = () => {
    return (
        <>
            <div className="CaseStudio">
                <h1>Case Studies</h1>
                <p>We deliver a unique and truly bespoke approach to delivering international developments to market, with over 10 years success around the world.</p>
                <div className="cards">
                    <div>
                        <img src={Big} alt="" />
                        <h3>France</h3>
                    </div>
                    <div>
                        <img src={Chol} alt="" />
                        <h3>Moroco</h3>
                    </div>
                    <div>
                        <img src={Home} alt="" />
                        <h3>London</h3>
                    </div>
                </div>
            </div>
        </>
    )
};
export default CaseStudio;