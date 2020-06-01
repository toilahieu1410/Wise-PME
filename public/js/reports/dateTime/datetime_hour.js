$('#end-date').datepicker({
    dateFormat: "yy/mm/dd" 
  });

  $("#start-date").datepicker({
    dateFormat: "yy/mm/dd",
    onSelect: function(date) {
      var date1 = $('#start-date').datepicker('getDate');
      var date = new Date(Date.parse(date1));
      date.setDate(date.getDate());
      var newDate = date.toDateString();
      newDate = new Date(Date.parse(newDate));
      $('#end-date').datepicker("option", "minDate", newDate);
    }
  });