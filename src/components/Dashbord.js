import CardsSection from '../CardsSection'
import OperationsTable from '../OperationsTable'

export default function Dashboard(){
return (
		<>
			<h2 className="notes">Admin Dashboard</h2>
			<div className="ms-Grid-row">
				<CardsSection />
			</div>
			<div className="ms-Grid-row">
				<OperationsTable />
			</div>
		</>
	)
}