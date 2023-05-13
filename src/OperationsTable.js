import React from 'react'
import { DetailsList } from '@fluentui/react'
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling'
import 'office-ui-fabric-react/dist/css/fabric.css'

const classNames = mergeStyleSets({
	table: {
		margin: 'auto',
	}
})

const operations = [
	{
		from: '1111 22222 33333 4444',
		to: '0980 9808 8200 7680',
		amount: '$10',
		date: '03-06-2021'
	},
	{
		from: '1111 22222 33333 4444',
		to: '0980 9808 8200 7680',
		amount: '$50',
		date: '25-06-2021'
	},
	{
		from: '1111 22222 33333 4444',
		to: '0980 9808 8200 7680',
		amount: '$200',
		date: '15-05-2021'
	},
	{
		from: '1111 22222 33333 4444',
		to: '0980 9808 8200 7680',
		amount: '$32',
		date: '10-05-2021'
	},
	{
		from: '1111 22222 33333 4444',
		to: '0980 9808 8200 7680',
		amount: '$80',
		date: '17-05-2021'
	},
	{
		from: '1111 22222 33333 4444',
		to: '0980 9808 8200 7680',
		amount: '$10',
		date: '03-06-2021'
	},
	{
		from: '1111 22222 33333 4444',
		to: '0980 9808 8200 7680',
		amount: '$50',
		date: '25-06-2021'
	},
	{
		from: '1111 22222 33333 4444',
		to: '0980 9808 8200 7680',
		amount: '$200',
		date: '15-05-2021'
	},
	{
		from: '1111 22222 33333 4444',
		to: '0980 9808 8200 7680',
		amount: '$32',
		date: '10-05-2021'
	},
	{
		from: '1111 22222 33333 4444',
		to: '0980 9808 8200 7680',
		amount: '$80',
		date: '17-05-2021'
	}
]

const columns = [
	{
		key: 'column1',
		name: 'From',
		fieldName: 'from',
		minWidth: 100,
		maxWidth: 300,
		isResizable: true
	},
	{
		key: 'column2',
		name: 'To',
		fieldName: 'to',
		minWidth: 100,
		maxWidth: 300,
		isResizable: true
	},
	{
		key: 'column3',
		name: 'Amount',
		fieldName: 'amount',
		minWidth: 100,
		maxWidth: 300,
		isResizable: true
	},
	{
		key: 'column4',
		name: 'Date',
		fieldName: 'date',
		minWidth: 100,
		maxWidth: 300,
		isResizable: true
	},
]

const TransitionTable = () => {
	return(
		<div data-is-scrollable={true}>
			<h2 className="notes">Transition History</h2>
			<div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
				<DetailsList
					items={operations}
					columns={columns}
					selectionMode={0}
				/>
			</div>
		</div>
	);
}

export default TransitionTable;