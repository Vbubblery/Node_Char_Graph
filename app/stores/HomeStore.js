import alt from '../alt';
import HomeAction from '../actions/HomeAction';

class HomeStore{
  constructor(){
    this.bindActions(HomeAction);
    this.data = null;
  }
  onSendDone(data){
    this.data = data;
    toastr.success("Successed");
  }
  onSendfail(data){
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}
export default alt.createStore(HomeStore);
