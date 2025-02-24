import { Container, Card } from "react-bootstrap";

function ProjectsBlock() {
    return (
        <Container>
            <h2 className="display-2" id="projects">Projects</h2>
            <Card>
                <Card.Body>
                    <Card.Title>Nutricionist Website</Card.Title>
                    <Card.Text>
                        This project involves the development of a professional webpage for a nutritionist, designed to showcase
                        her services
                        and products. The site is visually appealing and user-friendly, providing detailed information on the
                        services offered,
                        a selection of nutrition products, and tools for client interaction. The layout is responsive and
                        optimized for both
                        desktop and mobile devices, ensuring a smooth experience for all users. The project incorporates clean
                        design
                        principles, with a focus on functionality and ease of navigation, helping the nutritionist effectively
                        connect with
                        potential clients.
                    </Card.Text>
                    <Card.Link href="https://marielabarcelo.com/">Mariela Nutricionista</Card.Link>
                    <br />
                    <br />
                    <iframe src="https://marielabarcelo.com/" width="100%" height="500px"
                        className="mx-auto d-block"></iframe>
                </Card.Body>
            </Card>
            <br />
        </Container>
    )
}

export default ProjectsBlock