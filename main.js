var btn=document.getElementById('generate_btn');
var reqUrl="https://andruxnet-random-famous-quotes.p.mashape.com/cat=";
var mat=document.getElementById('quote_mat');


function allInOne(){

  mat.innerHTML='';
  var quote=document.createElement('h1');
  quote.style.animation="mymove 3s";
  console.log(quote.style.animation);

  //quote.setAttribute("class","hsd");
  var author=document.createElement('p');
  author.style.animation="mymove 10s";
  var req= new XMLHttpRequest();
  req.open("GET",reqUrl);
  req.setRequestHeader("X-Mashape-Authorization", "Sr4ugfUfUHmshOQ2IbeGXw8i1Gujp15JgPZjsnIcl0TaxHmdX3");

  req.onload= function(){
  var rsp= JSON.parse(req.responseText);
  quote.innerHTML=rsp.quote;
  author.innerHTML=rsp.author;

  }
  mat.appendChild(quote);
  mat.appendChild(author);
    console.log(mat.innerHTML);
  req.send();
}

allInOne();

btn.addEventListener("click",function(){
allInOne();
  })
