reddit.top('wallpaper').limit(12).fetch(function(res){

var linkArr = res.data.children.map(r => r.data.url);
var nailArr = res.data.children.map(n => n.data.thumbnail);

var ul = document.querySelector('#ul');
 linkArr.forEach(function(n,i){
     var a = document.createElement('a');
     var li = document.createElement('div');
     var img= document.createElement('img');
     a.href = n ;
     img.src = nailArr[i];

     a.appendChild(img);

     li.appendChild(a);

     ul.appendChild(li);


 });


});
