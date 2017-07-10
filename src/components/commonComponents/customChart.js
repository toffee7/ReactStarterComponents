import React, {Component} from 'react';
import GenericChart from './genericChart';


class CustomChart extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return true;
  }

  render() {
    return (<GenericChart container = 'myChart' options={this.props.chartOptions} />);
  }
}

export default CustomChart;
