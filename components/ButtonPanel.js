import "./ButtonPanel.css";

function ButtonPanel ({ buttons }) {
    return (
        <div className='panel'>
            {buttons}
        </div>
    );
}

export default ButtonPanel;