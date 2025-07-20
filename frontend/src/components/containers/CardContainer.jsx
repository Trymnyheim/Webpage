import Card from 'react-bootstrap/Card';

function CardContainer({title, children, image}) {
    return (
        <Card className="card-container">
            {image && <Card.Img variant="top" src={image} />}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {children}
            </Card.Body>
        </Card>
    )
}

export default CardContainer;