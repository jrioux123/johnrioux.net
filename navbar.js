document.write('\
\

<!DOCTYPE html>
<html>

<head>

<meta name="viewport" content="width=device-width">
 
<meta name="theme-color" content="#db5945">

<link rel="icon" type="image/png" href="John_Rioux_Circle.png" />
<meta name="theme-color" content="#FAFAFA">

<link rel="stylesheet" type="text/css" href="style.css">

<link href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,500" rel='stylesheet' type='text/css'>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
 rel="stylesheet" /> 

</head>

<body>

<div class="navbar">

<div class="titlebar">
  <img class="jrcircle" src="John_Rioux_Circle.png">
  <div class="title" style="float:left;">John Rioux</div>
  <!-- More button --> <div class="dropdown noSelect">
    <button onclick="myFunction()" class="dropbtn topright material-icons">more_vert</button>
    <div id="myDropdown" class="dropdown-content moremenu-content">
       <a href="movies.html">About me</a>
       <a href="https://johnrcomics.blogspot.com/">My old site</a>
    </div>
  </div>
  <!-- Search button --> <div class="dropdown noSelect">
     <button onclick="shadeCreate();dialogCreate();" class="topright material-icons">search</button>
  </div>
  <button id="shadeID" onclick="shadeKill();dialogKill();" class="shade shadehidden"></button>
  <div id="dialogID" class="searchcontainer">
    <div class="searchbar">
      <button id="shadeID" onclick="shadeKill();dialogKill();" class="material-icons exitsearch">arrow_back</button>       
       <div style="margin-left: 48px;">
        <script>
        (function() {
          var cx = '016891107299133920326:wwaszvag6gw';
          var gcse = document.createElement('script');
          gcse.type = 'text/javascript';
          gcse.async = true;
          gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(gcse, s);
        })();
        </script>
        <gcse:search></gcse:search></div>
       <!-- hold up <script src="googlecustomsearch.js"></script> -->
    </div>
  </div>
  <!-- Social media buttons - make these a thing when you start using them.
  <a href="https://www.instagram.com/johnrioux98/" class="topright">
    <img src="Instagram_Logo.png" width="24px;"></a>
  <a href="https://twitter.com/johnrioux98" class="topright">
    <img src="Twitter_Logo.png" width="24px;"></a> -- end of the Social media buttons-->
</div> <!-- end of the titlebar div -->

<div class="tabsbar">
  <a class="menuitem blogtab" href="https://www.johnrioux.net" style="margin-left:60px;">BLOG</a>
  <a class="menuitem moviestab" href="movies.html">MOVIES</a>
  <a class="menuitem comicstab" href="#comics">COMICS</a>
  <a class="menuitem abouttab" href="#chicken fries">MISC.</a>
</div>

</div>

</body>
</html>

\
');
