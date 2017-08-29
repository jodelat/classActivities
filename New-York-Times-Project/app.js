var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2f774573183d43cba89bf0a799c94ae8&q="+ search+"&begin_date:"+beginDate+"&end_date:"+endDate;
var endDate;
var beginDate;
var limit;
var search;

function renderArticles(){
  search = $("#searchTerm").val();
  limit = $("#recordsNumber").val();
  beginDate = $("#startYear").val();
  endDate = $("#endYear").val();
$.ajax({
  url: queryURL,
  method: "GET"
})
  .done(function(result){

    console.log(result)
    for(i = 0; i < limit; i++){
        var articleDiv = $("<div class='loaded'>");

        var title = result.response.docs[i].headline.print_headline;
        var p = $("<a>").text("Title:" + title).attr("href", url);
        articleDiv.append(p);
        var plot = result.response.docs[i].snippet;
        var pTwo = $("<p>").text("Plot:" + plot);
        articleDiv.append(pTwo);
        var url = result.response.docs[i].web_url;
        var pThree = $("<p>").text(url);
        articleDiv.append(pThree);
    }
    $("#articleSection").html(articleDiv);

  });
}


$(document).ready(function(){

  $("#searchButton").on("click", function(){

    renderArticles();
  });



});
