import React from 'react'
import { Card } from '@uifabric/react-cards'
import { Text, initializeIcons } from '@fluentui/react'
import 'office-ui-fabric-react/dist/css/fabric.css'

const container = {
	display: 'flex',
	justifyContent: 'center'
}

const icon = {
	fontSize: 28,
	padding: 15,
	verticalAlign: 'middle',
	paddingLeft: 0,
	color: '#fff'
}

const styles = {
	cardStyles: {
		root: {
			backgroundColor: '#fff',
			padding: 20,
			width: '90%',
			maxWidth: '90%',
			margin: 'auto',
			backgroundImage: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
			boxShadow: '0 0.46875rem 2.1875rem rgb(4 9 20 / 3%), 0 0.9375rem 1.40625rem rgb(4 9 20 / 3%), 0 0.25rem 0.53125rem rgb(4 9 20 / 5%), 0 0.125rem 0.1875rem rgb(4 9 20 / 3%)',
			color: '#fff',
			borderRadius: '10px'
		}
	},
	header: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#fff'
	},
	amount: {
		fontSize: 26,
		paddingBottom: 20,
		paddingTop: 30,
		color: '#fff'
	},
	percentage: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#fff'
	}
}

const cards = [
	{
		title: 'Current Account Balance',
		amount: '$55555',
		icon: 'Money'
	},
	{
		title: 'Current Account Expenses',
		amount: '$10876',
		icon: 'PaymentCard'
	},
	{
		title: 'Current Account Income',
		amount: '$20000',
		icon: 'Savings'
	}
]

const CardSections = () => {
	initializeIcons()
	return(
		<div style={container}>
			{cards.map((card, index) => (
				<div className="s-Grid-col ms-sm3 ms-xl3" key={index}>
					<Card styles={styles.cardStyles}>
						<Card.Section>
							<Card.Item>
								<i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
								<Text style={styles.header}>{card.title}</Text>
							</Card.Item>
							<Card.Item>
								<Text style={styles.amount}>{card.amount}</Text>
							</Card.Item>
						</Card.Section>
					</Card>
				</div>
			)) }
		</div>
	)
}

export default CardSections;
