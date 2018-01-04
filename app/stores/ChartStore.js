import alt from '../alt';
import ChartAction from '../actions/ChartAction';

class ChartStore{
  constructor(){
    this.bindActions(ChartAction);
    this.labels = [];
    this.datasets = [];
  }
  onUpdateData(data){
    this.labels = data.labels;
    this.datasets = data.datasets;
  }
}
export default alt.createStore(ChartStore);
