var sym = "GOOG";
var http = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=" + sym;
var resp = "";
var jsObj = null;


var settings = {
	"async": true,
	"crossDomain": true,
	"url": http,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "801e9cc85emsh011e19eee53d290p16417ejsn0b14e78123b6"
	}
}

$.ajax(settings).done(function (response) {
 
    resp = JSON.stringify(response);
    console.log(resp);
    jsObj = JSON.parse(resp);
    console.log(jsObj);
    console.log(jsObj.cashflowStatementHistory);
    console.log(jsObj.price.regularMarketOpen.fmt);
    console.log(jsObj.price.regularMarketDayHigh.fmt);
});

/*function myFunction() {
  setTimeout(function(){ 
     console.log(jsObj.price.regularMarketOpen.fmt);
     console.log(jsObj.price.regularMarketDayHigh.fmt);
   }, 3000);
}*/

