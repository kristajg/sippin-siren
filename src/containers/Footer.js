import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InstagramIcon from '../assets/images/icons/InstagramIcon';
import TikTokIcon from '../assets/images/icons/TikTokIcon';

export default function Footer() {
	return (
		<div className='footer-container'>
      <Container>
        <div className='social-wrapper'>
          <a href='https://www.instagram.com/sippin_siren/' target='_blank'  rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href='https://www.tiktok.com/@sippin.siren/' target='_blank'  rel="noreferrer">
            <TikTokIcon />
          </a>
        </div>
        <hr />
        <Row>
          <Col>
            Copyright 2024 © Sippin Siren 
          </Col>
        </Row>
      </Container>
		</div>
	);
}