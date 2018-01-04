import React from 'react';
class Graph_Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  componentWillUnmount() {
  }
  updateData(cfg){
    new Chart($("#"+this.props.index)[0].getContext('2d'),cfg);
  }
  render() {
    return (
      <div>
        <canvas id = {this.props.index} />
      </div>
    );
  }
}

export default Graph_Chart;
