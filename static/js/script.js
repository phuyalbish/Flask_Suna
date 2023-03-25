(function(){
    document.addEventListener("mousemove", background);
    const elem = document.querySelector("#backgroundimg");
    const elem2 = document.querySelector("#innercontent");
    function background(e){

        let w = window.innerWidth/2;
        let h = window.innerHeight/2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let x = 50-(mouseX-w)*0.03;
        let y = 50-(mouseY-h)*0.03;
        // let backgroundimg = x+"% "+y+"%";
        // // // let z = backgroundimg;
        // console.log(x,y);
        elem.style.transform = 'translate('+x+'px,'+y+'px)';
        // elem2.style.transform = 'translate(-'+x/4+'px,-'+y/4+'px)';
    
    }

})();


// function top(){

//     document.getElementById("body").scrollTo({top: 0px});

// }
function openPlayer(msg){
    const elem = document.querySelector("#loadingborder");
    // elem.style.borderRadius = "5px";
    elem.className = 'loadanimationsquare';
    document.getElementById("musicloading").style.display = "none";


    document.getElementById("closemusic").style.display = "block";
    document.getElementById("listenmusiconly").style.display = "block";
    document.getElementById("watchvideo").style.display = "none";

    document.getElementById('audioloadingwithcontent').style.display = 'none';
    document.getElementById('musicloading').style.display = 'none';
    document.getElementById("musicytvideo").style.display = "block";

    if(document.getElementById("musicytvideo").src != 'https://www.youtube.com/embed/'+msg+'?autoplay=1'){
         document.getElementById("musicytvideo").src = 'https://www.youtube.com/embed/'+msg+'?autoplay=1';
}   
}

function closePlayer(){

    document.querySelector("#loadingborder").className = 'load';


    document.getElementById("closemusic").style.display = "none";
    document.getElementById("listenmusiconly").style.display = "none";
    document.getElementById("watchvideo").style.display = "none";

    document.getElementById("musicytvideo").style.display = "none";
    document.getElementById("musicytvideo").src = '';

    document.getElementById('audioloadingwithcontent').style.display = 'none';
    document.getElementById('musicloading').style.display = 'none';
}


function musicPlayer(){

    document.querySelector("#loadingborder").className = 'loadinganimationrotate';

    document.getElementById('audioloadingwithcontent').style.display = 'flex';
    document.getElementById('musicloading').style.display = 'none';

    document.getElementById("closemusic").style.display = "block";
    document.getElementById("listenmusiconly").style.display = "none";
    document.getElementById("watchvideo").style.display = "block";

    document.getElementById("musicytvideo").style.display = "none";

    
}
function watchPlayer(){

    document.querySelector("#loadingborder").className = 'loadanimationsquare';
  
    document.getElementById("musicloading").style.display = "none";


    document.getElementById("closemusic").style.display = "block";
    document.getElementById("listenmusiconly").style.display = "block";
    document.getElementById("watchvideo").style.display = "none";

    document.getElementById('audioloadingwithcontent').style.display = 'none';
    document.getElementById('musicloading').style.display = 'none';
    document.getElementById("musicytvideo").style.display = "block";
}


function scrollToLatest(){
    document.getElementById("chatbox").scrollTo({left: 0, behavior: 'smooth' });
}




function start_recordaudi(){
    document.getElementById("musicloading").style.display = "flex";
    const elem = document.querySelector("#loadingborder");
    elem.style.borderRadius = "5px";
    elem.className = 'loadinganimationrotate';

    document.getElementById("closemusic").style.display = "none";
    document.getElementById("listenmusiconly").style.display = "none";
    document.getElementById("watchvideo").style.display = "none";

    document.getElementById("musicytvideo").style.display = "none";
    document.getElementById("musicytvideo").src = '';

    document.getElementById('audioloadingwithcontent').style.display = 'none';
    document.getElementById('musicloading').style.display = 'flex';


    document.getElementById("startrecord").style.display = "none";
    document.getElementById("stoprecord").style.display = "inline";

}

function stop_recordaudi(){
    // // document.getElementById("musicloading").style.display = "flex";
    // const elem = document.querySelector("#loadingborder");
    // // elem.style.borderRadius = "5px";
    // elem.className = 'load';

    document.querySelector("#loadingborder").className = 'load';
    document.getElementById("closemusic").style.display = "none";
    document.getElementById("listenmusiconly").style.display = "none";
    document.getElementById("watchvideo").style.display = "none";



    document.getElementById("musicytvideo").src = '';

    document.getElementById('audioloadingwithcontent').style.display = 'none';
    document.getElementById('musicloading').style.display = 'none';




    document.getElementById("startrecord").style.display = "inline";
    document.getElementById("stoprecord").style.display = "none";

}