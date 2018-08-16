import React, { Component } from 'react';
import './dashboard_styles.css';
import Weather from './weather/weather';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
      dashboard
      <Weather/>
      </div>
    );
  }
}

export default Dashboard;