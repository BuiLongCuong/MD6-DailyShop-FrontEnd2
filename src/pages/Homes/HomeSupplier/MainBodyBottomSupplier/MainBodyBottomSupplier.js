import "./MainBodyBottomSupplier.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function MainBodyBottomSupplier(){

    return(
        <>
            <div className="main-body-bottom">
                <div className="content-cover">
                    <div className="display-content">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://down-vn.img.susercontent.com/file/81b479979d18e296f7d4454730b9c140" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    {/*<div className="display-content"></div>*/}
                    {/*<div className="display-content"></div>*/}
                    {/*<div className="display-content"></div>*/}
                    {/*<div className="display-content"></div>*/}
                    {/*<div className="display-content"></div>*/}
                    {/*<div className="display-content"></div>*/}
                    {/*<div className="display-content"></div>*/}
                    {/*<div className="display-content"></div>*/}
                </div>
                <div className="pagination">
                    <h4>1,2,3,4</h4>
                </div>

            </div>
        </>
    )
}