import React from 'react';
import HomeAction from '../actions/HomeAction';
import HomeStore from '../stores/HomeStore';
import Chart from './Graph_Chart'
import ChartInput from './Graph_Chart_Input'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    HomeStore.listen(this.onChange);
    HomeAction.get();
  }
  platform(){
    var labels = ['cdn','p2p','upload'];
    var colors = Object.keys(window.chartColors).slice(0,labels.length);
    var chartData = {
      labels : this.state.data.platform.map(i=>i.platform),
      datasets:labels.map((label,index)=>{
        return {
          label:label,
          backgroundColor:colors[index],
          borderWidth:1,
          data:this.state.data.platform.map(i=>i[label])
        }
      })
    };
    var config = {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        title:{
            display:true,
            text:'platform chart'
        },
        onClick:function(evt,elements){
          console.log(elements)
        },
        scales: {
          xAxes: [{
              display: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Platform'
              }
          }],
          yAxes: [{
              display: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Bytes'
              }
          }]
        }
      }
    }
    this.refs.graph.updateData(config);
  }
  bandwidth(){
    var time = this.state.data.bandwidth.cdn.map(i=>{
      var date = new Date(i[0]);
      return (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'+date.getDate() + ' '+date.getHours() + ':'+date.getMinutes() + ':'+date.getSeconds()
    });
    var labels = ['cdn','p2p'];
    var colors = Object.keys(window.chartColors).slice(0,labels.length*2);
    var chartData = {
      labels:time,
      datasets:[...labels.map((label,index)=>{
        return {
          label:label+"_bandwidth",
          backgroundColor:colors[index],
          borderColor:colors[index],
          data:this.state.data.bandwidth[label].map(i=>i[1]),
          fill:false,
          yAxisID: "y-axis-1"
        }
      }),
      ...labels.map((label,index)=>{
        return {
          label:label+"_viewer",
          backgroundColor:colors[index+2],
          borderColor:colors[index+2],
          data:this.state.data.audience.audience.map(i=>i[1]),
          fill:false,
          yAxisID: "y-axis-2"
        }
      })
    ]
    }
    var cfg = {
      type:'line',
      data:chartData,
      options:{
          responsive: true,
          title:{
              display:true,
              text:'Bandwidth Chart'
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
                      labelString: 'Time'
                  }
              }],
              yAxes: [{
                  id:"y-axis-1",
                  type:"linear",
                  position:"left",
                  display: true,
                  scaleLabel: {
                      display: true,
                      labelString: 'Bytes'
                  }
              },
              {
                id:"y-axis-2",
                type:"linear",
                position:"right",
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Bytes'
                }
              }

            ]
          }
      }
    }
    this.refs.graph2.updateData(cfg);

  }
  country(){
    var cfg = {
        type: 'pie',
        data: {
            datasets: [{
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "CDN",
                "P2P"
            ]
        },
        options: {
            responsive: true
        }
    };
    this.refs.graph3.updateData(cfg,this.state.data.country)
  }
  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
    this.platform()
    this.bandwidth()
    this.country()
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <Chart index={"c1"} ref='graph' />
          </div>
          <div className="col-sm-6 col-md-6">
            <ChartInput index={"c3"} ref='graph3' />
          </div>
          <div className="col-sm-6 col-md-12">
            <Chart index={"c2"} ref='graph2' />
          </div>
          <div className="col-sm-6 col-md-6">
            <Chart index={"c4"} ref='graph4' />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
