var selected = "FB";
var jsObj;
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
                "x-rapidapi-key": "KEY GOES HERE"
            }
        }
        $.ajax(settings).done(function (response) {
            // turns JSON Object into a string
            resp = JSON.stringify(response);
            console.log(resp);
            // turns string into JSON Object
            jsObj = JSON.parse(resp);
            console.log(jsObj);
            genHtmlFromJson(jsObj)


            /* deep dive through JSON Objects to get data points
            console.log(jsObj.cashflowStatementHistory.cashflowStatements[0].investments.longFmt);
                not all calls work this call did not work on AMRN so have to pick data points that are common to all financial statments
            
            
            //console.log(jsObj.price.regularMarketOpen.fmt);
            //console.log(jsObj.price.regularMarketDayHigh.fmt);
            */
        });
    });
});

function genHtmlFromJson(jsObj){
    var txt= "";
    txt += "<table border='1' id = new>"
    txt += "<tr><th>CASH FLOW</th><th>AMOUNT</th><th>BALANCE SHEET</th><th>AMOUNT</th><th>INCOME</th><th>AMOUNT</th></tr>"
    txt += "<tr class=rows><td>Net Income</td><td>" + jsObj.cashflowStatementHistory.cashflowStatements[0].netIncome.longFmt  + "</td><td>Total Liabilities</td>" +
    "<td> " + jsObj.balanceSheetHistory.balanceSheetStatements[0].totalLiab.longFmt + "</td><td>Income Before Tax</td><td>" + jsObj.incomeStatementHistory.incomeStatementHistory[0].incomeBeforeTax.longFmt + "</td></tr>";

    txt += "<tr class=rows><td>Net Borrowings</td><td>" + jsObj.cashflowStatementHistory.cashflowStatements[0].netBorrowings.longFmt  + "</td><td>Total Equity</td><td>" + 
    jsObj.balanceSheetHistory.balanceSheetStatements[0].totalStockholderEquity.longFmt + "</td><td>Net Income</td><td>" + jsObj.incomeStatementHistory.incomeStatementHistory[0].netIncome.longFmt + "</td></tr>";  

    txt += "<tr class=rows><td>Cash from Operations</td><td>" + jsObj.cashflowStatementHistory.cashflowStatements[0].totalCashFromOperatingActivities.longFmt  + "</td><td>Total Assets</td><td>" +jsObj.balanceSheetHistory.balanceSheetStatements[0].totalAssets.longFmt +
     "</td><td>Total Revenue</td><td>" + jsObj.incomeStatementHistory.incomeStatementHistory[0].totalRevenue.longFmt +"</td></tr>";  
    
    txt += "</table>";
    document.getElementById("demo").innerHTML = txt;
    document.getElementById("new").style.border = "3px solid green";
    document.getElementById("new").style.height = "250px";
    document.getElementsByClassName("rows").style.backgroundColor = "white";
    
}





