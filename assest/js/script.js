let TweetList = document.getElementById('tweet-list');


/*application */
eventListeners();
function eventListeners(){
 document.querySelector("#form").addEventListener('submit',TweetSubmited); 
Tweelist =addEventListener('click',Removetweets)
}


function TweetSubmited(e){  

e.preventDefault();
    
/* read the data from inputs */
const tweet = document.getElementById("tweet").value;

/*  remove Button */
const delet = document.createElement('a');
    
delet.classList='btn btn-sm btn-danger mt-1 remove';
delet.textContent='Delete';
    
/* create li for each tweet*/
const li = document.createElement('li');
    
/*append the li to tweet that come from inputs */
li.textContent = tweet;
    
/*linking the tweetlist  to one li */
TweetList.appendChild(li);  
    
//add delete
li.appendChild(delet);
addItemsToLocalStorages(tweet);

}

function Removetweets(e){
if (e.target.classList.contains('remove')) {
    e.target.parentElement.remove();
}



}

// addToLocalstorage
function addItemsToLocalStorages(tweet){
//adding tweets but this an arrray 
let tweetes = getTweettoLocalStorage();
tweetes.push(tweet);
// convert Array to string !
localStorage.setItem('tweet' , JSON.stringify(tweetes));
}

// get localstorages
function getTweettoLocalStorage(){
let tweets;
const tweetLs = localStorage.getItem('tweet');
if(tweetLs == null){
tweets = [] ;
}else{
// converte  string  to  object  return as Object
tweets = JSON.parse(tweetLs);
}
return tweets;
}
