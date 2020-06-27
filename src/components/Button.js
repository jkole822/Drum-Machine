import React from 'react';

const Button = props => {
	document.addEventListener('mouseup', handleClick);

	function handleClick() {
		const key = document.querySelector(`#${props.name}`);
		key.blur();
	}

	return (
		<div>
			<button
				id={props.name}
				className='ui green button utility'
				onClick={props.onClick}>
				{props.name}
			</button>
		</div>
	);
};

export default Button;
