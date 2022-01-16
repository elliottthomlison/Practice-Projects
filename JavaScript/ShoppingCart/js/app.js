// variables
const courses = document.querySelector('#courses-list')




// listeners

loadEventListeners()

function loadEventListeners() {
    
    //when a new courses is added 
    courses.addEventListener('click', buyCourse)
}




// functions 
function buyCourse(e) {
    e.preventDefault();
 
    //use delegation to find the course that was added
    if (e.target.classList.contains('add-to-cart')) {
        // read the course values
        // we are using such a general, yet specific targetting sequence because that way it can be replicated (via delegation)
        const course = e.target.parentElement.parentElement

        // read the values
        getCourseInfo(course);
    }
}

// reads the html info of the selected course
function getCourseInfo(course) {
    // create an object with course data
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    console.log(courseInfo)

}
