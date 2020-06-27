import React from 'react';
import { connect } from 'react-redux';
import { fetchDisplay } from '../actions';

class Display extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.bank !== prevProps.bank) {
			this.props.fetchDisplay(this.props.bank);
		} else if (this.props.audio !== prevProps.audio) {
			this.props.fetchDisplay(this.props.audio);
		}
	}

	render() {
		return (
			<div id='display' className='ui green inverted segment display'>
				{this.props.power ? this.props.display : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { display: state.display };
};

export default connect(mapStateToProps, { fetchDisplay })(Display);
