import "./DisplayScreen.css";

function DisplayScreen ({ output, equation }) {
    return (
        <div className="display-screen" >
            <div className="equation">
                {equation}
            </div>
            <div className="output">
                {output}
            </div>
        </div>
    );
}

export default DisplayScreen;