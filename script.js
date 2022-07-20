// var likeText = document.querySelector('.likeText')
var numberOfLikes = document.querySelectorAll('.totalLikes');
var likes;
var i



function addLikes(element){
    if (element.classList == 'likeBtn1'){
        i=0;
        likes = numberOfLikes[i].innerText;
        likes++;
        numberOfLikes[i].innerText = likes
    }
    if (element.classList == 'likeBtn2'){
        i=1;
        likes = numberOfLikes[i].innerText;
        likes++;
        numberOfLikes[i].innerText = likes
    }
    if (element.classList == 'likeBtn3'){
        i=2;
        likes = numberOfLikes[i].innerText;
        likes++;
        numberOfLikes[i].innerText = likes
    }
}