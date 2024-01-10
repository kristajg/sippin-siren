
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const menu = [
	'Iced Latte',
	'Iced Americano',
	'Cold Brew',
	'Iced Matcha Latte',
	'Iced Tea (Herbal, Black, Green)',
]

export default function Menu() {
	return (
		<div className='menu-container' id='section-menu'>
			<h3>Menu</h3>
			<Container>
				<Row>
					{menu.map(item => (
						<Col id={`menu-item-${item}`}>{item}</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}