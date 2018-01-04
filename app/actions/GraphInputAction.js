import alt from '../alt';

class GraphInputAction {
  constructor(){
    this.generateActions(
      'updateData',
      'updateMax',
      'updateCfg'
    );
  }
}
export default alt.createActions(GraphInputAction);
