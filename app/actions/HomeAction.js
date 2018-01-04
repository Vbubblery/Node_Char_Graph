import alt from '../alt';

class HomeAction {
  constructor(){
    this.generateActions(
      'sendDone',
      'sendFail',
    );
  }
  get(){
    var self = this;
     var fun1 = $.ajax({url: "/json/audience.json",type:'GET'}),
         fun2 = $.ajax({url: "/json/bandwidth.json",type:'GET'}),
         fun3 = $.ajax({url: "/json/country.json",type:'GET'}),
         fun4 = $.ajax({url: "/json/isp.json",type:'GET'}),
         fun5 = $.ajax({url: "/json/platform.json",type:'GET'}),
         fun6 = $.ajax({url: "/json/streams.json",type:'GET'}),
         fun7 = $.ajax({url: "/json/usage.json",type:'GET'});
    $.when(fun1,fun2,fun3,fun4,fun5,fun6,fun7).then((data1,data2,data3,data4,data5,data6,data7)=>{
      self.actions.sendDone({
        audience:data1[0],
        bandwidth:data2[0],
        country:data3[0],
        isp:data4[0],
        platform:data5[0],
        streams:data6[0],
        usage:data7[0]
      })
    },(err)=>{self.actions.sendFail(err)})
    }
}
export default alt.createActions(HomeAction);
