var selected = "FB";
 function myFunction() {
     console.log(selected);
    selected = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + selected;
    console.log(selected);
    }





$(document).ready(function () {
    //console.log(selected);
   
    $("button").click(function () {

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=" + selected,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": "801e9cc85emsh011e19eee53d290p16417ejsn0b14e78123b6"
            }
        }
        $.ajax(settings).done(function (response) {
            // turns JSON Object into a string
            resp = JSON.stringify(response);
            //console.log(resp);
            // turns string into JSON Object
            jsObj = JSON.parse(resp);
            console.log(jsObj);


            /* deep dive through JSON Objects to get data points
            console.log(jsObj.cashflowStatementHistory.cashflowStatements[0].investments.longFmt);
                not all calls work this call did not work on AMRN so have to pick data points that are common to all financial statments
            
            
            //console.log(jsObj.price.regularMarketOpen.fmt);
            //console.log(jsObj.price.regularMarketDayHigh.fmt);
            */
        });
    });
});






