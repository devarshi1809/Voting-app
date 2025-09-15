(function(){
"use strict";

const votes={JavaScript:0,Python:0,Java:0};

const jsCount=document.getElementById("jsCount");
const pyCount=document.getElementById("pyCount");
const javaCount=document.getElementById("javaCount");

function updateVotes(){
  jsCount.textContent=String(votes.JavaScript);
  pyCount.textContent=String(votes.Python);
  javaCount.textContent=String(votes.Java);
}

function vote(language){
  if(Object.prototype.hasOwnProperty.call(votes,language)){
    votes[language]++;
    updateVotes();
  }
}

document.addEventListener("click",function(e){
  const btn=e.target;
  if(btn instanceof HTMLElement && btn.tagName==="BUTTON" && btn.dataset.lang){
    vote(btn.dataset.lang);
  }
});

function simulateRealtime(){
  const langs=["JavaScript","Python","Java"];
  const randomLang=langs[Math.floor(Math.random()*langs.length)];
  votes[randomLang]++;
  updateVotes();
}

updateVotes();
setInterval(simulateRealtime,2000);

window.vote=vote;
})();


