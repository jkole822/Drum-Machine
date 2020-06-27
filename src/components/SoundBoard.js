import React from 'react';
import SoundKey from './SoundKey';
import Button from './Button';
import Display from './Display';
import { connect } from 'react-redux';
import { fetchAudio, fetchDisplay, toggleBank, togglePower } from '../actions';

class SoundBoard extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.toggleBankState !== prevProps.toggleBankState) {
			this.props.fetchAudio(this.props.toggleBankState);
		}
		if (
			this.props.togglePowerState !== prevProps.togglePowerState &&
			!this.props.togglePowerState
		) {
			this.props.fetchDisplay(null);
		}
	}

	handleClickPower = () => {
		this.props.togglePower();
	};

	handleClickBank = () => {
		this.props.toggleBank();
	};

	renderButtons() {
		return this.props.audio.map(soundKey => {
			return (
				<SoundKey
					key={soundKey.key}
					audio={soundKey}
					power={this.props.togglePowerState}
				/>
			);
		});
	}

	render() {
		return (
			<div id='drum-machine' className='ui container segment'>
				<div className='ui relaxed grid'>{this.renderButtons()}</div>
				<Button name={'Power'} onClick={this.handleClickPower} />
				<Display
					audio={this.props.selectAudio}
					bank={this.props.toggleBankState}
					power={this.props.togglePowerState}
				/>
				<Button name={'Bank'} onClick={this.handleClickBank} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		audio: state.audio,
		selectAudio: state.selectAudio,
		toggleBankState: state.toggleBank,
		togglePowerState: state.togglePower,
	};
};

export default connect(mapStateToProps, {
	fetchAudio,
	fetchDisplay,
	toggleBank,
	togglePower,
})(SoundBoard);
