import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
	return (
		<div className='footer-container'>
      <Container>
        <Row>
          <Col>
            Copyright 2024 © Sippin Siren 
          </Col>
        </Row>
      </Container>
		</div>
	);
}