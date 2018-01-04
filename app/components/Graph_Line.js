import React from 'react';
class Graph_Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.myChart = new Chart($("#"+this.props.index)[0].getContext('2d'), {
      type: 'line',
      options: {
          responsive: true,
          title:{
              display:true,
              text:'Chart.js Line Chart'
          },
          tooltips: {
              mode: 'index',
              intersect: false,
          },
          hover: {
              mode: 'nearest',
              intersect: true
          },
          scales: {
              xAxes: [{
                  display: true,
                  scaleLabel: {
                      display: true,
                      labelString: 'Month'
                  }
              }],
              yAxes: [{
                  display: true,
                  scaleLabel: {
                      display: true,
                      labelString: 'Value'
                  }
              }]
          }
      }
    });
  }
  componentWillUnmount() {
  }
  updateData(data){
    window.myChart.data=data;
    window.myChart.update();
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
