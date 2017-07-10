import React, { Component } from 'react';
import Highcharts from 'highcharts';

// generic Chart for HighCharts API
class GenericChart extends Component{
  constructor(props) {
    super(props);
  }
  // Destroy chart before unmount.
  componentWillUnmount() {
      this.chart.destroy();
  }
  shouldComponentUpdate() {
      return true;
  }
  // Create the div which the chart will be rendered to.
  render() {
      return React.createElement('div', { id: this.props.container });
  }
  // When the DOM is ready, create the chart.
  componentDidMount() {
    // Extend Highcharts with modules
    if (this.props.modules) {
      this.props.modules.forEach(function(module) {
        module(Highcharts);
      });
    }
    // Set container which the chart should render to.
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.props.container,
      this.props.options
    );
  }
  componentDidUpdate() {
    this.chart.destroy();
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.props.container,
      this.props.options
    );
  }
}

export default GenericChart;
