import React from "react";

import PropTypes from "prop-types";
ReactCounter.propTypes = {
	psixth: PropTypes.number,
	pfifth: PropTypes.number,
	pfourth: PropTypes.number,
	pthird: PropTypes.number,
	psecond: PropTypes.number,
	pfirst: PropTypes.number
};

function ReactCounter(props) {
	return (
		<div className="totalcounter">
			<div className="clock">
				<i className="far fa-clock" />
			</div>
			<div className="sixth">{props.psixth % 10}</div>
			<div className="fifth">{props.pfifth % 10}</div>
			<div className="fourth">{props.pfourth % 10}</div>
			<div className="third">{props.pthird % 10}</div>
			<div className="second">{props.psecond % 10}</div>
			<div className="first">{props.pfirst % 10}</div>
		</div>
	);
}

export default ReactCounter;
