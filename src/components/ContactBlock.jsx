import { useState } from "react";
import { Form, Container, Toast, ToastContainer, Button } from "react-bootstrap";

export default function CustomToasts() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Ocurrió un error.");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simular éxito o error
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
            setShowSuccess(true);
        } else {
            setErrorMessage("Hubo un problema al enviar el formulario.");
            setShowError(true);
        }
    };

    function ContactBlock() {
        return (
            <Container className="mt-5">
                <h2 className="display-2" id="contact">
                    Contact me!
                </h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="name">Name*</Form.Label>
                        <Form.Control type="text" placeholder="Your name..." id="name" name="name" required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="correo">Email*</Form.Label>
                        <Form.Control type="email" placeholder="Your email..." id="correo" name="correo" required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="number">Phone*</Form.Label>
                        <Form.Control type="number" placeholder="Your number..." id="number" name="number" required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="subject">Subject*</Form.Label>
                        <Form.Control type="text" placeholder="Write something..." id="subject" name="subject" required />
                    </Form.Group>

                    <Button type="submit" className="btn btn-primary mt-3">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }

    return (
        <>
            <ContactBlock />
            <div aria-live="polite" aria-atomic="true" className="position-relative">
                <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
                    {/* Toast de éxito */}
                    <Toast bg="success" show={showSuccess} onClose={() => setShowSuccess(false)} delay={3000} autohide>
                        <Toast.Body className="text-white">¡La operación se realizó con éxito!</Toast.Body>
                    </Toast>

                    {/* Toast de error */}
                    <Toast bg="danger" show={showError} onClose={() => setShowError(false)} delay={3000} autohide>
                        <Toast.Body className="text-white">{errorMessage}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
            <br />
        </>
    );
}
