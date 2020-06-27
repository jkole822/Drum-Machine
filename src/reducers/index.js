import { combineReducers } from 'redux';
import { audioOne, audioTwo } from './audio';

const audioReducer = (state = audioOne, action) => {
	if (action.type === 'FETCH_AUDIO') {
		if (action.payload === 'Heater Kit') {
			return audioOne;
		} else if (action.payload === 'Smooth Piano Kit') {
			return audioTwo;
		}
	}

	return state;
};

const displayReducer = (state = null, action) => {
	if (action.type === 'FETCH_DISPLAY') {
		return action.payload;
	}

	return state;
};

const selectAudioReducer = (state = null, action) => {
	if (action.type === 'SELECT_AUDIO') {
		return action.payload;
	}

	return state;
};

const toggleBankReducer = (state = 'Heater Kit', action) => {
	if (action.type === 'TOGGLE_BANK') {
		if (state === 'Heater Kit') {
			return 'Smooth Piano Kit';
		} else {
			return 'Heater Kit';
		}
	}

	return state;
};

const togglePowerReducer = (state = false, action) => {
	if (action.type === 'TOGGLE_POWER') {
		if (!state) {
			return true;
		} else {
			return false;
		}
	}

	return state;
};

export default combineReducers({
	audio: audioReducer,
	display: displayReducer,
	selectAudio: selectAudioReducer,
	toggleBank: toggleBankReducer,
	togglePower: togglePowerReducer,
});
