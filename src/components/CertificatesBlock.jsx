import { Card, Container, Row, Col } from "react-bootstrap"
import ScrumCoursePhoto from '../assets/scrum.jpg'
import AICoursePhoto from '../assets/ai.jpg'
import JSCoursePhoto from '../assets/js.jpg'
import TestingCoursePhoto from '../assets/testing.jpg'

function CertificatesBlock() {
    return (
        <Container>
            <h2 className="display-2" id="certificates">Certificates</h2>
            <Row xs={1} md={2}>
                <Col>
                    <Card>
                        <Card.Img variant='top'
                            src={ScrumCoursePhoto}
                        />
                        <Card.Body>
                            <Card.Title>Scrum Master Certification</Card.Title>
                            <Card.Text>
                                Coursera & Ceibal
                            </Card.Text>
                            <Card.Link href="https://drive.google.com/file/d/1sQhucZMLV-2-VlDT7NSeaJpJgateeaxy/view?usp=sharing">Diploma</Card.Link>
                        </Card.Body>
                    </Card>
                    <br />
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant='top'
                            src={AICoursePhoto}
                        />
                        <Card.Body>
                            <Card.Title>AI For Everyone</Card.Title>
                            <Card.Text>
                                Coursera & Ceibal. January 2025.
                            </Card.Text>
                            <Card.Link href="https://drive.google.com/file/d/1rlNHcfwNYgADfgB1EDu9BQuaPLeDUVgP/view?usp=sharing">Diploma</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant='top'
                            src={JSCoursePhoto}
                        />
                        <Card.Body>
                            <Card.Title>JavaScript from scratch</Card.Title>
                            <Card.Text>
                                Platzi. July 2024.
                            </Card.Text>
                            <Card.Link href="https://drive.google.com/file/d/1sQhucZMLV-2-VlDT7NSeaJpJgateeaxy/view?usp=sharing">Diploma</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant='top'
                            src={TestingCoursePhoto}
                        />
                        <Card.Body>
                            <Card.Title>Software testing fundamentals course</Card.Title>
                            <Card.Text>
                                Platzi. July 2024.
                            </Card.Text>
                            <a href="https://drive.google.com/file/d/1cjcIthRn1UeBelvbSWxxjiaBibUTcGFm/view?usp=sharing">Diploma</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br />
        </Container>
    )
}

export default CertificatesBlock