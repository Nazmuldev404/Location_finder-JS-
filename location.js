// Loading Script

document.querySelector('#p3').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(33);
    this.MaterialProgress.setBuffer(87);
});

document.querySelector('#p4').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(33);
    this.MaterialProgress.setBuffer(87);
});




var Text1 = document.getElementsByClassName("Text1")[0];
var Text2 = document.getElementsByClassName("Text2")[0];




function CurrentLocation(){
    var progress = document.getElementsByClassName("mdl-progress")[0];
    progress.style.display='block';
    if (navigator.geolocation) {
       setTimeout(function(){
        navigator.geolocation.getCurrentPosition(showPosition);
        progress.style.display='none';
       },3000)
      }
}


function showPosition(position){
    Text1.innerHTML = "Latitude: " + position.coords.latitude;
    Text2.innerHTML = "Longitude: " + position.coords.longitude;
}





var apex1 = document.getElementsByClassName("Location")[0];
var apex2 = document.getElementsByClassName("Phone")[0];
var apex3 = document.getElementsByClassName("formWrapper")[0];

//Open Location

function openLocation(){
    apex1.style.display='block';
    apex2.style.display='none';
    apex3.style.display='none';
}


// Dismiss UI 

function DismisUI(){
  apex1.style.display='none';  

}



//Number Location

function NumberLocation(){
    var progress = document.getElementsByClassName("mdl-progress")[0];
    progress.style.display='block';    
}


function TrackNumber(){
    apex1.style.display='none';
    apex2.style.display='block';
    apex3.style.display='none';
}


//Contact 

function contactPeople(){
    apex1.style.display='none';
    apex2.style.display='none';
    apex3.style.display='block';
}