import { Container, Card } from "react-bootstrap";

function AboutMeBlock() {
    return (
        <Container>
            <h2 className="display-2" id="aboutMe">About me</h2>
            <Card>
                <Card.Body>
                    <Card.Text>
                        With a background in testing and project management, I am eager to develop my skills in web development.
                        Over three
                        years of customer service experience in both Spanish and English have enhanced my communication and
                        problem-solving
                        abilities. I hold a Web Development certification from the Jóvenes a Programar program by Ceibal and have
                        gained
                        valuable knowledge in the field. I am organized, proactive, adaptable, and always eager to learn.
                    </Card.Text>
                    <Card.Link href="#">Github</Card.Link>
                    <Card.Link href="#">Linkedin</Card.Link>
                    <Card.Link href="#">Email</Card.Link>
                </Card.Body>
            </Card>
            <br />
        </Container >

    )
}

export default AboutMeBlock