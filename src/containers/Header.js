import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo_circle from '../assets/images/logos/logo_circle.png'

export default function Header() {
	const scrollToContentSection = e => {
		e.preventDefault();
		const section = document.querySelector(`#section-${e.target.id}`);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	return (
		<Container className='header-container'>
			<Row>
				<Col>
					<span className='header-link' id='about' onClick={scrollToContentSection}>
						About
					</span>
				</Col>
				<Col>
					<span className='header-link' id='menu' onClick={scrollToContentSection}>
						Menu
					</span>
				</Col>
				<Col>
					<img src={logo_circle} alt='sippin siren logo' className='header-logo' />
				</Col>
				<Col>
					<span className='header-link' id='order' onClick={scrollToContentSection}>
						Order
					</span>
				</Col>
				<Col>
					<span className='header-link' id='gallery' onClick={scrollToContentSection}>
						Gallery
					</span>
				</Col>
			</Row>
		</Container>
	);
}