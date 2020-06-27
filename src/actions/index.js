export const fetchAudio = bank => {
	return {
		type: 'FETCH_AUDIO',
		payload: bank,
	};
};

export const fetchDisplay = display => {
	return {
		type: 'FETCH_DISPLAY',
		payload: display,
	};
};

export const selectAudio = audio => {
	return {
		type: 'SELECT_AUDIO',
		payload: audio,
	};
};

export const toggleBank = () => {
	return {
		type: 'TOGGLE_BANK',
	};
};

export const togglePower = () => {
	return {
		type: 'TOGGLE_POWER',
	};
};
