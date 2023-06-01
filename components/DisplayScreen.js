import { CalcContext } from "../context/CalcContext";
import { useContext } from "react";
import "./DisplayScreen.css";

function DisplayScreen () {
    const { calc } = useContext(CalcContext);

    return (
        <div className="display-screen" >
            <div className="equation">
                {calc.res}
            </div>
            <div className="output">
                {calc.num}
            </div>
        </div>
    );
}

export default DisplayScreen;