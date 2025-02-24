import { Container, Card } from "react-bootstrap";

function WorkExperienceBlock() {
    return (
        <Container>
            <h2 className="display-2" id="workExperience">Work experience</h2>
            <Card style={{
                width: "100%",

            }}> {/* agregar estilo 100% width */}
                <Card.Body>
                    <Card.Title>Project Manager - Inetsat</Card.Title>
                    <Card.Text>

                        Coordination with other departments.
                        Quick and accurate response to customer inquiries, maintaining effective communication in both English and
                        Spanish, both
                        verbally and in writing.
                        Identification of obstacles and decision-making to resolve issues.
                        Manual software testing to verify established requirements.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Body>
                    <Card.Title>Recepcionist</Card.Title>
                    <Card.Text>
                        Welcoming and checking in guests: Greeting arrivals warmly,
                        verifying reservations, and assigning rooms. <br />
                        Checking out guests: Processing payments, verifying accounts, and
                        handling departures efficiently.<br />
                        Resolving guest complaints: Addressing issues promptly and
                        professionally to maintain guest satisfaction.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Body>
                    <Card.Title>Sales promoter</Card.Title>
                    <Card.Text>
                        Customer Interaction: Engaging with customers, answering
                        questions, and building rapport. <br />
                        Merchandising: Setting up and maintaining attractive product
                        displays.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Body>
                    <Card.Title>Costumer service representative</Card.Title>
                    <Card.Text>
                        Cargo de atención al cliente en inglés. <br />
                        Encargada de realizar, modificar y cancelar reservaciones para la
                        cadena de hoteles Wyndham a través del teléfono.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </Container>

    )
}

export default WorkExperienceBlock