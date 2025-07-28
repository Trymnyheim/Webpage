import Card from 'react-bootstrap/Card';

function CardContainer({title, children, image, imageUnder, colored}) {
    return (
        <Card className={`card-container${colored ? ' bg-green-light' : ''}`}>
            {image && <Card.Img variant="top" src={image} />}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {children}
            </Card.Body>
            {imageUnder && <Card.Img variant="bottom" src={imageUnder} />}
        </Card>
    )
}

export default CardContainer;