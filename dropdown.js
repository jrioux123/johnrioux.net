/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Dialog and shade:

function shadeCreate() {
    var x = document.getElementById('shadeID');
    x.style.display = 'block';
}

function dialogCreate() {
    var y = document.getElementById('dialogID')
    y.style.display = 'block';
}

function searchCreate() {
    var z = document.getElementById('searchID')
    z.style.display = 'block';
}

function menuCreate() {
    var w = document.getElementById('menuID')
    w.style.display = 'block';
}

function shadeKill() {
    var x = document.getElementById('shadeID');    
    var y = document.getElementById('dialogID'); 
    var z = document.getElementById('searchID'); 
    var w = document.getElementById('menuID');
    x.style.display = 'none';    
    y.style.display = 'none';
    z.style.display = 'none';
    w.style.display = "none';
}
