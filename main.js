var shot = ["miss.gif",  "score2.gif", "score3.gif", "score4.gif"];
var shot3 = ["header.gif", "headmiss.gif"];
var teamscore = 0;




function randomshot() {
    var x = Math.floor(Math.random() * shot.length);
    var imagepicker = shot[x];
    document.getElementById("dunkpic").src = imagepicker;
    if (x > 1) {
        addscore();
    } else {
        noscore();
    }
  
}

function randomshot3(){
    var x = Math.floor(Math.random() * shot3.length);
    var imagepicker = shot3[x];
    document.getElementById("dunkpic").src = imagepicker;
    if (x < 1) {
        addscore3();
    } else {
        noscore();
    }

}

function addscore() {
  teamscore += 1;
  openNav();
  document.getElementById("teamdisplay").innerHTML = teamscore;
   setTimeout(function blackout() {document.getElementById("dunkpic").src = "black.jpg";},  8000);
  
}

function addscore3() {
  teamscore += 1;
  openNav();
  document.getElementById("teamdisplay").innerHTML = teamscore;
  setTimeout(function blackout() {document.getElementById("dunkpic").src = "black.jpg";},  8000);
     dialog1();
}

function noscore() {
  teamscore += 0;
  openNav();
  document.getElementById("teamdisplay").innerHTML = teamscore;

  setTimeout(function blackout() {document.getElementById("dunkpic").src = "black.jpg";},  8000);
  dialog1();
}

function closed()
{document.getElementById("picdialog").close();
}

function picdialog() { 
    document.getElementById("picdialog").showModal(); 
} 
