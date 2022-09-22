const calorieEl = document.querySelector('.total-calories');
const array = [];
let arraySum = function(total){
    // sets calorieEl value to the sum of the array
    calorieEl.value = total;
    // creates a span element
    var totalEl = document.createElement('span');
    // gives that element a value
    totalEl.textContent = calorieEl.value;
    // appends that value to the html
    calorieEl.appendChild(totalEl);
}

var getCalories = function() {
    var postApi = (`/api/posts`);
   
    // make a request to the api
    fetch(postApi).then(function(response) {
        // request was successful;
        if (response.ok) {
            response.json()
            .then(function(data) {
                if(data){
                    // get data for each post
                    data.forEach(post =>{
                        // push calories from posts to the array
                        array.push(post);
                    })
                    const sum = array.reduce((accumulator, object) => {
                        return accumulator + object.calories;
                    }, 0);
                    
                    arraySum(sum);
                }
            })
        } else {
            alert("Error: Post Not Found");
        }
    })
    .catch(function(error) {
        alert("unable to retriev data");
    });
};




getCalories();
