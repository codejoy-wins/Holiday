// alert("must be 21");
const maxcodes = ()=>{
    const songy = document.getElementById("songx");
    const mega = document.getElementById("sound");
    const silent = document.getElementById("silence");
    mega.addEventListener("click",()=>{
        console.log("soundclick");
        songy.play();
    });
    silent.addEventListener("click",()=>{
        console.log("silentclick");
        songy.pause();
    });
}
maxcodes();