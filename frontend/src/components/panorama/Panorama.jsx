import './panorama.css';

function Panorama({image}) {

    return (
        <div className="panorama-container">
            <div className="panorama">
                <img src={image ? image : '/imgs/panorama.jpeg'}/>
            </div>
        </div>
    )
}

export default Panorama;