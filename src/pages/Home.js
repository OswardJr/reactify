import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
} from 'reactstrap';

const Home = () => {
    return (
        <div className="flex-container">
            <div className="flex-item-left">
                <Card>
                    <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                    </CardBody>
                </Card>
            </div>
            
            <div className="flex-item-right">
                <Card
                    body
                    color="primary"
                    inverse
                >
                    <CardTitle tag="h5">
                    Special Title Treatment
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                    With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                    Button
                    </Button>
                </Card>
            </div>
        </div>
    )
}

export default Home