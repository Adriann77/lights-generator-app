import { Text } from './Text';
import { IconMinus } from './icons/IconMinus';
import { IconAdd } from './icons/iconAdd';
import styles from './Counter.module.css';
import { useState } from 'react';

export const Counter = props => {
	
	return (
		<div className={styles.wrapper}>
			<Text>
				{props.count} {props.text}
			</Text>
			<nav>
				<IconAdd onClick={props.onIncrement} ></IconAdd>
				<IconMinus onClick={props.onDecrement} ></IconMinus>
			</nav>
		</div>
	);
};
