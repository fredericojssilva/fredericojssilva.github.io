
"use strict";
//SET AGE
var todayDate = new Date(),
  todayYear = todayDate.getFullYear(),
  todayMonth = todayDate.getMonth(),
  todayDay = todayDate.getDate(),
  age = todayYear - 1989;

if (todayMonth < 2 - 1) {
  age--;
}

if (2 - 1 === todayMonth && todayDay < 14) {
  age--;
}

$('#my_age').text(age);
//
//EASTER EGG

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
          var urlString;
          urlString = "../img/mustache.png";

          //document.getElementById('logo').src =  urlString;
          document.getElementById("my_name").innerHTML = "FRED MUSTACHE SILVA";

          var mustacheStyle;
           mustacheStyle = "url("+urlString+") no-repeat";

           document.getElementById('thai').style.background =  mustacheStyle;
           document.getElementById('thai').style.backgroundSize = "100%"
});

/*
       ANALITICS
       */
       (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
       })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

       ga('create', 'UA-53598120-1', 'auto');
       ga('send', 'pageview');
