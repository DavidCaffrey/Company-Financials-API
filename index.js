var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=AAPL",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "801e9cc85emsh011e19eee53d290p16417ejsn0b14e78123b6"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
