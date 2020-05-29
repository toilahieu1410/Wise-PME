const table = document.getElementById('table-layout'),
      url = 'http://10.10.11.225:1880/api-alarm87';

const createNode = (element) => { return document.createElement(element); }
const append = (parent, el) => { return parent.appendChild(el); }

fetch(url)
  .then((response) => { return response.json(); })
  .then( data => {
    let alarm = data; 
    return alarm.map( alarm => { 
      var alarm_data = '';
      alarm_data += '<table style="border:2px solid #ccc" class="page">';
      alarm_data += '<thead>';
      alarm_data += '<tr>';
      alarm_data += '<th colspan="3" style="border:1px solid deepskyblue;background-color:#3ca93ed1;text-indent:10px;color:white">'+alarm.Device+'</th>';
      alarm_data += '</tr>'
      alarm_data += '</thead>';

      alarm_data += '<tbody>';
      alarm_data += '<tr>';
      alarm_data += '<td style="height:55px;text-indent:10px"><i class="fa fa-circle" style="margin-right:5px;color:red"></i><label>Alarm - '+alarm.Type+' :  '+alarm.Value+'      '+alarm.Unit+' </label></td>';
      alarm_data += '<td><label></label>Overload:'+alarm.Overload+':'+alarm.Unit+' </td>';
      alarm_data += '<td>'+alarm.time+'</td>';
      alarm_data += '</tr>'
      alarm_data += '</tbody>';
      alarm_data += '</table>';
     
   
     var item = url + alarm.device;
     var items = $("#table-layout .page");
    var numItems = items.length;
    var perPage = 8;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
     fetch(item,items)
    .then(function(response){
      return response.json();  
    })
    .then(function(json){
      url = json.url;
      el = document.createElement("li");
      el.innerHTML = `<a href="${url}">${title}</a>`;
      container.appendChild(el);
    })
    .catch(function(err){
      console.log(err);  
    });
     
      $('#table-layout').append(alarm_data);
    });
  })
  .catch( error => { console.log(error); })

  //Code part 2 
  const tabledata = document.getElementById('dataTable'),
  url1 = 'http://10.10.11.225:1880/api-alarm87';

  const createNode1 = (element) => { return document.createElement(element); }
  const append1 = (parent, el) => { return parent.appendChild(el); }

fetch(url1)
.then((response) => { return response.json(); })
.then( data => {
  const alarm_detail = data; 
return alarm_detail.map( alarm_detail => { 
  var alarm_detail_data = '';
  alarm_detail_data += '<table class="test">';
  alarm_detail_data += '<thead style="background-color:deepskyblue">';
  alarm_detail_data += '<tr>';
  alarm_detail_data += '<th style="color:#fff;" colspan="4"> Device:'+alarm_detail.device+' &nbsp&nbsp'+alarm_detail.time+'</th>';

  alarm_detail_data += '</tr>'
  alarm_detail_data += '</thead>';

  alarm_detail_data += '<tbody>';
  alarm_detail_data += '<tr>';
  
  alarm_detail_data += '<td style="min-width:60px"><label>Voltages</label></td>';
  alarm_detail_data += '<td style="min-width:60px"><label>Current</label></td>';
  alarm_detail_data += '<td style="min-width:60px"><label>THD</label></td>';
  alarm_detail_data += '<td style="min-width:60px"><label>thd</label></td>';
  alarm_detail_data += '</tr>'

  alarm_detail_data += '<tr>';
  
  alarm_detail_data += '<td style="min-width:60px">VolAB: '+alarm_detail.VolAB+' </br>VolBC: ' +alarm_detail.VolBC+'</br>VolCA: '+alarm_detail.VolCA+'<br/>VolLL: '+alarm_detail.VolLL+'</br>VolAN: '+alarm_detail.VolAN+'</br>VolBN: '+alarm_detail.VolBN+'</br>VolCN: '+alarm_detail.VolCN+'</br>VolLN: '+alarm_detail.VolLN+'</td>';
  alarm_detail_data += '<td style="min-width:60px">CurrentA: '+alarm_detail.CurrentA+'</br>CurrentB: '+alarm_detail.CurrentB+'</br>CurrentC: '+alarm_detail.CurrentA+'</td>';
  alarm_detail_data += '<td style="min-width:60px">THDcurrentA: '+alarm_detail.THDcurrentA+' </br>THDcurrentB: ' +alarm_detail.THDcurrentB+'</br>THDcurrentC: '+alarm_detail.THDcurrentC+'<br/>THDvolAB: '+alarm_detail.THDvolAB+'</br>THDvolBC: '+alarm_detail.THDvolBC+'</br>THDvolCA: '+alarm_detail.THDvolCA+'</br>THDvolAN: '+alarm_detail.THDvolAN+'</br>THDvolBN: '+alarm_detail.THDvolBN+'</br>THDvolCN: '+alarm_detail.THDvolCN+'</td>';
  alarm_detail_data += '<td style="min-width:60px">thdcurrentA: '+alarm_detail.thdcurrentA+' </br>thdcurrentB: ' +alarm_detail.thdcurrentB+'</br>thdcurrentC: '+alarm_detail.thdcurrentC+'<br/>thdvolAB: '+alarm_detail.thdvolAB+'</br>thdvolBC: '+alarm_detail.thdvolBC+'</br>thdvolCA: '+alarm_detail.thdvolCA+'</br>thdvolAN: '+alarm_detail.thdvolAN+'</br>thdvolBN: '+alarm_detail.thdvolBN+'</br>thdvolCN: '+alarm_detail.thdvolCN+'</td>';
  alarm_detail_data += '</tr>'
 

  alarm_detail_data += '</tbody>';
  alarm_detail_data += '</table>';



  $('#dataTable').append(alarm_detail_data);
});
})
.catch( error => { console.log(error); })
       

