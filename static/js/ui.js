if (!UI) {
  var UI = {};
}

(function () {
  // Functions

  // toggleMenu toggles display of dropdown list elements in the given menu
  UI.toggleMenu = function (menu) {
    var lis = menu.getElementsByClassName("dropdown-li");
    Array.prototype.forEach.call(lis, function (li) {
      li.classList.toggle("hidden");
      //li.style.display = li.style.display == "none" ? "block" : "none";
    });
  }

  // Events

  // On click of dropdown button, toggle dropdown menu display
  var btn = document.getElementById("dropdown-button");
  var menu = document.getElementById("dropdown-menu");
  btn.onclick = function() {
    UI.toggleMenu(menu);
  };
})();
