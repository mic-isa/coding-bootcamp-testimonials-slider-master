let reviews = [
{  
    text:' "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so  excited about the future."' ,
    
    name: 'Tanya Sinclair ' ,
    
    job: 'UX Engineer ' ,

    img: 'images/image-tanya.jpg',
    
},

{
    text: '"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about  starting up as a professional developer."' ,
    
    name: 'John Tarkpor',

    job: 'Junior Front-end Developer',

    img: 'images/image-john.jpg',
}

]

// select items
const img = document.querySelector('.image-name');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.icon-prev');
const nextBtn = document.querySelector('.icon-next');

// set starting item
let currentItem = 0;


// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    currentItem = 0;
    showPerson(currentItem);
});

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
 
  showPerson(currentItem);
});

