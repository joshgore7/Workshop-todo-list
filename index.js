

// Strike through the task if completed

var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('strike-through');
  }
}, false);


//Removes Task from list

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("remove");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Adds Task to list

function newTask() {
    var li = document.createElement("LI");
    var inputValue = document.getElementById("newTask").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
      alert("Task cannot be blank!");
    } else {
      document.getElementById("myList").appendChild(li);
    }
    document.getElementById("newTask").value = "";

        // This adds a X to the task to click on

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "remove";
        span.appendChild(txt);
        li.appendChild(span);
      
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
    }
