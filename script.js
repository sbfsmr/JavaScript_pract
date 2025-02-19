var id=1000;
var Details={};
var url="";
Detailsview.hidden=true;
function submit(){
    var name=document.getElementById("name").value;
    var description=document.getElementById("desc").value;
    var file=document.getElementById("image");
    var filename=file.files[0];
    var reader=new FileReader();
    reader.onload = function() {
        url=reader.result;
        Details[id]={name:name,description:description,file:url};
        var img=document.createElement("img");
        img.src=url;
        img.width=100;
        img.height=100;
        img.id=id;
        id++;
        img.onclick=function(){
            var id=this.id;
            console.log(Details[id].name,Details[id].description,Details[id].file);
            showpop(id);
        }
        container.appendChild(img);
    };
    reader.readAsDataURL(filename);
    var container=document.getElementById("container");
    var Detailsview=document.getElementById("details");
    function showpop(id){
        Detailsview.hidden=false;
        Detailsview.innerHTML = '';
        var img=document.createElement("img");
        img.src=Details[id].file;
        img.width=500;
        img.height=500;
        img.className ="leftform";
        Detailsview.appendChild(img);
        var div=document.createElement("div");
        div.className ="rightform";
        Detailsview.appendChild(div);
        var name=document.createElement("h1");
        name.innerHTML=Details[id].name;
        div.appendChild(name);
        var description=document.createElement("p");
        description.innerHTML=Details[id].description;
        div.appendChild(description);
        var close=document.createElement("button");
        close.innerHTML="Close";
        close.className ="btn btn-dark";
        close.onclick=function(){
            hidepop();
        }
        div.appendChild(close);
    }
    function hidepop() {
        Detailsview.hidden = true;
    }
}