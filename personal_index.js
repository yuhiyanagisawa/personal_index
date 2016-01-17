$('document').ready(function(){


$( "#addTicker" ).click(function() {
  var ticker = document.getElementById("ticker").value.toUpperCase();
  var quantity = document.getElementById('quantity').value;

  if(ticker !=="" && quantity !=="")
  {
  	$('#stocks').append("<div>" + ticker + "</div>");
  	$('#shares').append("<div>" + quantity + "</div>");
  }

var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22' + ticker + '%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
$.getJSON(url, function(data) {           
var info = [];


$.each(data.query.results.quote, function(key, val) 
	{
		info.push(val); 
	});
            
        $('#price').append("<div id='" + ticker + "'>" + info[1] + "</div>");
        $('#change').append("<div id='" + ticker + "'>" + info[8] + "</div>");
        $('#value').append('<div>' + (info[1]*quantity).toLocaleString() + '</div>');
                     
    });








  


});






});