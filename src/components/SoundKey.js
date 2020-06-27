import React from 'react';
import { connect } from 'react-redux';
import { selectAudio } from '../actions';

class SoundKey extends React.Component {
	constructor(props) {
		super(props);
		this.audio = React.createRef();
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown);
		document.addEventListener('transitionend', this.removeTransition);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);
	}

	handleKeyDown = event => {
		const key = event.key.toUpperCase();
		if (key === this.props.audio.key && this.props.power) {
			this.audio.current.play();
			this.audio.current.currentTime = 0;
			this.props.selectAudio(this.props.audio.name);

			const key = document.querySelector(`#${this.props.audio.key}`);
			key.classList.add('playing');
		}
	};

	removeTransition = e => {
		const key = document.querySelector(`#${this.props.audio.key}`);
		key.classList.remove('playing');
	};

	handleClick = () => {
		if (this.props.power) {
			this.audio.current.play();
			this.audio.current.currentTime = 0;
			this.props.selectAudio(this.props.audio.name);
		}
	};

	renderButton = () => {
		return (
			<button
				id={this.props.audio.key}
				className='ui green button soundKey five wide column drum-pad'
				key={this.props.audio.key}
				onClick={this.handleClick}
				onKeyDown={this.handleKeyDown}>
				{this.props.audio.key}
				<audio
					className='clip'
					ref={this.audio}
					id={this.props.audio.key}
					src={`https://s3.amazonaws.com/freecodecamp/drums/${this.props.audio.url}.mp3`}></audio>
			</button>
		);
	};

	render() {
		return this.renderButton();
	}
}

export default connect(null, { selectAudio })(SoundKey);
