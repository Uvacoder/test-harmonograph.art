import {h, Fragment} from 'preact';

import Label from '../Label';
import style from './style.css';

const RangeSlider = ({
	id,
	label,
	max,
	min,
	step,
	defaultValue,
	setValue,
	children
}) => {
	return (
		<Fragment>
			<div className={style.RangeSliderLabel}>
				<Label id={id}>{label}</Label>{children}
			</div>
			<input
				className={style.RangeSlider}
				type="range"
				id={id}
				max={max}
				min={min}
				step={step}
				value={defaultValue}
				oninput={event => setValue(event.target.value)}
			/>
		</Fragment>
	);
};

export default RangeSlider;
