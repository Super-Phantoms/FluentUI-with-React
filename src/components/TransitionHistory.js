import CardsSection from '../CardsSection'
import OperationsTable from '../OperationsTable'

export default function History() {
return (
		<>
			<h2 className="notes">Transition History</h2>
			<div className="ms-Grid-row">
				<CardsSection />
			</div>
			<div className="ms-Grid-row">
				<OperationsTable />
			</div>
		</>
	)
}