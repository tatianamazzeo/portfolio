import { Card, CardGroup } from "react-bootstrap"
import { Container } from "react-bootstrap"


function EducationBlock() {
    return (
        <Container>
            <h2 className="display-2" id="education">Education</h2>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>English Teacher</Card.Title>
                        <Card.Text>
                            Teaching English language and culture to students of various ages
                            and levels.
                            <br />
                            Developing and implementing engaging lesson plans to foster
                            language acquisition and cultural understanding.
                            <br />
                            Collaborating with colleagues to create a positive and supportive
                            learning environment.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Jovenes a Programar</Card.Title>
                        <Card.Text>
                            HTML: web page structure and content creation.<br />
                            CSS: styling web elements, applying layouts, and creating visually
                            appealing interfaces.<br />
                            JavaScript: scripting dynamic web interactions, handling user
                            input, and building interactive components.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>First Certificate</Card.Title>
                        <Card.Text>
                            Level: Upper-intermediate (B2)<br />
                            Purpose: Demonstrates proficiency in English for academic and
                            professional settings.<br />
                            Focus: Reading, writing, listening, and speaking skills.<br />
                            Issued by: Cambridge Assessment English.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <br />
        </Container>
    )
}

export default EducationBlock