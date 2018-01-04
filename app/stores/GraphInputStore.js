import alt from '../alt';
import GraphInputAction from '../actions/GraphInputAction';
class GraphInputStore{
  constructor(){
    this.bindActions(GraphInputAction);
    this.data = null;
    this.max = null;
    this.cfg = null;
  }
  onUpdateData(data){
    this.data = data;
    toastr.success("Successed222");
  }
  onUpdateMax(data){
    this.max = data;
  }
  onUpdateCfg(cfg){
    this.cfg = cfg;
  }
}
export default alt.createStore(GraphInputStore);
