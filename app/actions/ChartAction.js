import alt from '../alt';

class ChartAction {
  constructor(){
    this.generateActions(
      'updateData'
    );
  }
}
export default alt.createActions(ChartAction);
