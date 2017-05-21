$(document).ready(function(){

  $('.input-group.date').datepicker({
      calendarWeeks: true,
      toggleActive: true,
      startDate: new Date(),
      todayHighlight: true,
      autoclose:true
      });
});
