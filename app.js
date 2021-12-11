//Html Select
let playing = false;
const btn = document.getElementById('get');
let head = document.querySelector('h3');
let prev = document.getElementById('prev');
let next = document.getElementById('nest');
let img = document.querySelector('img')
let music1 = document.querySelector('audio');

const array = [{
    name : "Ranjha - Shershaah",
    title : "Ranjha - Shershaah",
    photo : "download1"
},
{
    name : "kabhi",
    title : "Kabhi Tumhe - Shershaah",
    photo : "sher"
},
{
    name : "Mann",
    title : "Mann Bharryaa",
    photo : "maan"
},

{
    name : "Song1",
    title : "Raataan Lambiyan",
    photo : "download"
},
]

const loadsong = (array) => {
    head.textContent = array.title;
    music1.src = array.name + ".mp3";
    img.src = array.photo + ".jpg"
}

songIndex = 0;



const nextSong = () => {
    songIndex = ( songIndex + 1) % array.length;
    loadsong(array[songIndex]);
}

const prevSong = () => {
    songIndex = ( songIndex - 1 + array.length) % array.length;
    loadsong(array[songIndex]);
}

next.addEventListener('click' , nextSong);
prev.addEventListener('click' , prevSong);

//Playmusic Function
const playmusic = () => {
    let music1 = document.querySelector('audio');
    playing = true;
    music1.play();
    let btn = document.getElementById('none');
    btn.classList.replace("fa-play", "fa-pause")

}

//PauseMusic Function
const pausemusic = () => {
    let music1 = document.querySelector('audio');
    playing = false;
    music1.pause();
    let banner = document.querySelector('img');
    banner.classList.remove('animate');
    let btn = document.getElementById('none');
    btn.classList.replace("fa-pause", "fa-play")
}

//Flow Function
btn.addEventListener('click', () => {
    if (playing) {
        pausemusic();
    } else {
        playmusic();
    }
})

music1.addEventListener("timeupdate", (event) => {
    let progress = document.querySelector('.progress');
    // console.log(event);
    const { currentTime, duration } = event.srcElement;
    let progresstime = (currentTime / duration) * 100;
    progress.style.width = `${progresstime}%`;
    // let { duration } = event.srcElement;
    let min = Math.floor(duration / 60);
    let sec = Math.floor(duration % 60);

    if (min < 10) {
        min = `0${min}`
    }


    const timecom = `${min}:${sec}`;
    document.getElementById('tot').innerHTML = `${timecom}`;


    let min1 = Math.floor(currentTime / 60);
    let sec1 = Math.floor(currentTime % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }

    if (min1 < 10 , min1 > 1) {
        min1 = `0${min1}`
    }

    const timecom1 = `${min1}:${sec1}`;
    document.getElementById('live').innerHTML = `${timecom1}`;
})

let like = document.getElementById('like');
like.addEventListener('click', () => {
    like.classList.replace("far", "fas")
});

localStorage.setItem('color' , 'red')
let red = localStorage.getItem('color');
like.style.color = red;





