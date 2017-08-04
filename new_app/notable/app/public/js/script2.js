//using jQuery AJAX

var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
console.log(baseUrl);

function addNote(){
  var title = document.getElementById("add-title").value;
  var text = document.getElementById("add-body").value;
  var params = "text="+text+"&title="+title;

  $.post(baseUrl+"notes",params,function(data){
      document.getElementById("notes").innerHTML = "<tr><td id='id1'>"+data._id+"</td><td id='title1'></td><td id='body1'></td><td><button onclick='displayNote()'>Get Note</button></td><td><button onclick='editNote()'>Edit</button></td><td><button onclick='deleteNote()'>Delete</button></td></tr>";
      document.getElementById("add-title").value = "";
      document.getElementById("add-body").value = "";
    });

}

function displayNote(){
  var id = document.getElementById ( "id1" ).innerText;

  $.get(baseUrl+"notes/"+id,function(data) {
      document.getElementById("title1").innerHTML = data.title;
      document.getElementById("body1").innerHTML =  data.text;
    });

}

function editNote(){
  document.getElementById("edit-title").value = document.getElementById("title1").innerHTML;
  document.getElementById("edit-body").value = document.getElementById("body1").innerHTML;
  document.getElementById('spoiler').style.display = 'block';
}

function saveEdit(){
  var editTitle = document.getElementById("edit-title").value;
  var editText = document.getElementById("edit-body").value;
  var id = document.getElementById ( "id1" ).innerText;

  var params = "text="+editText+"&title="+editTitle;

  $.ajax({url:baseUrl+"notes/"+id,contentType:"application/x-www-form-urlencoded",type:"PUT",data:params,success:function(data) {
      document.getElementById("title1").innerHTML = data.title;
      document.getElementById("body1").innerHTML =  data.text;
      document.getElementById('spoiler').style.display = 'none';
    }
});

}

function deleteNote(){
  //console.log("in del");
  var id = document.getElementById ( "id1" ).innerText;

  $.ajax({url:baseUrl+"notes/"+id,contentType:"application/x-www-form-urlencoded",type:"DELETE",success:function(data) {
    document.getElementById("id1").innerHTML = "";
    document.getElementById("title1").innerHTML = "";
    document.getElementById("body1").innerHTML =  "";
  }});

}
