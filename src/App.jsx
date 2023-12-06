import './App.css';
import { Counter } from './components/counter';
import { Text } from './components/Text';
import { SingleLight } from './components/SingleLight';
import { useState } from 'react';
import { Grid } from './components/Grid';

function App() {
	const [rows, setRows] = useState(0);
	const [columns, setColumns] = useState(0);

	const handleIncrementRow = () => {
		setRows(rows + 1);
	};

	const handleDecrementRow = () => {
		if (rows <= 0) {
			return;
		}

		setRows(rows - 1);
	};
	const handleIncrementColumns = () => {
		if (columns < 9) {
			setColumns(columns + 1);
		}
	};

	const handleDecrementColumns = () => {
		if (columns <= 0) {
			return;
		}
		setColumns(columns - 1);
	};

	const totalLights = rows * columns;

	const lights = Array.from({ length: totalLights });

	return (
		<div>
			<nav className={'nav'}>
				{' '}
				<Text>{totalLights} bulbs</Text>
				<Counter
					text={'rows'}
					count={rows}
					onIncrement={handleIncrementRow}
					onDecrement={handleDecrementRow}
				/>
				<Counter
					text={'columns'}
					count={columns}
					onIncrement={handleIncrementColumns}
					onDecrement={handleDecrementColumns}
				/>
			</nav>
			<Grid columns={columns}>
				{lights.map((value, idx) => {
					return <SingleLight key={idx} />;
				})}
			</Grid>
		</div>
	);
}

export default App;
