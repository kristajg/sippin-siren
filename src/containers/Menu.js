import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo_shell from '../assets/images/logos/logo_shell.png';
import coffee_beans_icon from '../assets/images/icons/coffee_beans_icon.png'
import tea_icon from '../assets/images/icons/tea_icon.png'

const menu = [
	{
		name: 'Iced Latte',
		type: 'coffee',
	},
	{
		name: 'Iced Americano',
		type: 'coffee',
	},
	{
		name: 'Cold Brew',
		type: 'coffee'
	},
	{
		name: 'Iced Matcha Latte',
		type: 'tea',
	},
	{
		name: 'Iced Tea (Herbal, Black, Green)',
		type: 'tea',
	},
]

export default function Menu() {
	return (
		<div className='section-container' id='section-menu'>
			<h3>Menu</h3>
			<div>
				<img src={logo_shell}  alt='shell icon' className='section-shell-img' />
			</div>
			<Container>
				<Row>
					{menu.map(obj => (
						<Col id={`menu-item-${obj.name}`}>
							<img src={obj.type === 'coffee' ? coffee_beans_icon : tea_icon} alt={`${obj.type} icon`} className='menu-icon' />
							<span className='menu-name'>{obj.name}</span>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}