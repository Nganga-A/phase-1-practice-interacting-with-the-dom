document.addEventListener('DOMContentLoaded', function () {
    
    let counter = document.getElementById('counter');
    let minusButton = document.getElementById('minus');
    let plusButton = document.getElementById('plus');
    let heartButton = document.getElementById('heart');
    let pauseButton = document.getElementById('pause');
    let commentList = document.getElementById('list');
    let commentForm = document.getElementById('comment-form');
  
    // Timer interval - increment every second
    let timer = setInterval(incrementCounter, 1000);
  
    // Object to store like counts for each number
    let likes = {};
  
    // increment function
    function incrementCounter() {
      counter.innerText = parseInt(counter.innerText) + 1;
    }
  
    // Event listener for the minus button
    minusButton.addEventListener('click', function () {
      counter.innerText = parseInt(counter.innerText) - 1;
    });
  
    // Event listener for the plus button
    plusButton.addEventListener('click', function () {
      counter.innerText = parseInt(counter.innerText) + 1;
    });
  
    // Event listener for the heart button 
    heartButton.addEventListener('click', function () {
      let currentNumber = counter.innerText;
  
      if (!likes[currentNumber]) {
        likes[currentNumber] = 1;
      } else {
        likes[currentNumber]++;
      }
  
      let likeItem = document.createElement('li');
      likeItem.innerText = `${currentNumber} has been liked ${likes[currentNumber]} time(s).`;
      likesList.appendChild(likeItem);
    });
  
    // Event listener for the pause button (to pause/resume the counter)
    pauseButton.addEventListener('click', function () {
      if (pauseButton.innerText === 'pause') {
        // Pause the timer
        clearInterval(timer); //removes intervals hence stops
        // Disable buttons and comment input
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        commentForm.comment.disabled = true;
        commentForm.submit.disabled = true;
        // Change button label to "resume"
        pauseButton.innerText = 'resume';
      } else {
        // Resume the timer
        timer = setInterval(incrementCounter, 1000);
        // Enable buttons and comment input
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        commentForm.comment.disabled = false;
        commentForm.submit.disabled = false;
        // Change button label back to "pause"
        pauseButton.innerText = 'pause';
      }
    });
  
    // Event listener for the comment form submission
    commentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      let comment = commentForm.comment.value;
      let commentItem = document.createElement('div');
      commentItem.innerText = comment;
      commentList.appendChild(commentItem);
      commentForm.reset();
    });
  });
  