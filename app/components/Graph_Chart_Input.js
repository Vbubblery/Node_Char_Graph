import React from 'react';
import GraphInputStore from '../stores/GraphInputStore';
import GraphInputAction from '../actions/GraphInputAction';
class Graph_Chart_Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = GraphInputStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        GraphInputStore.listen(this.onChange);
    }
    componentWillUnmount() {
        GraphInputStore.unlisten(this.onChange);
    }
    onChange(state) {
        this.setState(state);
        if (window.chart != null) window.chart.destroy();
        window.chart = new Chart($("#" + this.props.index)[0].getContext('2d'), this.state.cfg);
    }

    onSelectChange(e) {
        var element = $("#sel1")[0];
        var selected = element.options[element.selectedIndex].value;
        var cfg = this.state.cfg;
        var country = this.state.data.filter(i=>i.country==selected)[0]
        if (selected == 'All') {
          country = {'cdn':this.state.max.cdn,'p2p':this.state.max.p2p}
        }
        cfg.data.datasets[0].data = [country.cdn,country.p2p];
        GraphInputAction.updateCfg(cfg);
    }
    updateData(cfg, data) {
        setTimeout(() =>{
            var cdn = data.reduce((prevVal, elem) =>prevVal + elem.cdn, 0);
            var p2p = data.reduce((prevVal, elem) =>prevVal + elem.p2p, 0);
            cfg.data.datasets[0].data = [cdn,p2p];
            GraphInputAction.updateData(data);
            GraphInputAction.updateCfg(cfg);
            GraphInputAction.updateMax({cdn,p2p});
        },
        10);
    }

  render() {
    var options = null;
    if(this.state.data!=null){
      options = this.state.data.map((i,index)=>{
      return (<option key={index}>{i['country']}</option>)
    })}
    return (
      <div>
      <div className="form-group">
        <label htmlFor="sel1">Select list:</label>
        <select className="form-control" onChange={this.onSelectChange.bind(this)} id="sel1">
          <option >All</option>
          {options}
        </select>
      </div>
        <canvas id = {this.props.index} />
      </div>
    );
  }
}

export default Graph_Chart_Input;
