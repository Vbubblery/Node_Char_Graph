import React from 'react';
import ChartAction from '../actions/ChartAction';
import ChartStore from '../stores/ChartStore';
class Graph_Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = ChartStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ChartStore.listen(this.onChange);
    var id = this.props.index;
    window.myChart = new Chart($(c1)[0].getContext('2d'), {
      type: 'bar',
      data: {
        labels: this.state.labels,
        datasets: this.state.datasets
      },
      options: {
        onClick:function(evt,elements){
        console.log(elements)
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  componentWillUnmount() {
    ChartStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
    console.log(this.state);
    window.myChart.update();
  }
  updateData(data){
    ChartAction.updateData(data);

  }
  render() {
    return (
      <div>
        <canvas id = {this.props.index} width = "400" height = "400" />
      </div>
    );
  }
}

export default Graph_Chart;
