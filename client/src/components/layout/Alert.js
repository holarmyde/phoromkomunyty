import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {' '}
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);

/**
 * This is getting the alert state. We re mapping state to props getting the alert state putting it inside a prop of alerts, destrucruring it dis like this
 * const Alert = ({ alerts }) =>...
passing in alerts making sure its not null and it has something in it and if it does we would map through them and output a div 

<div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {' '}
      {alert.msg}
    </div>

    

 * 
 */
