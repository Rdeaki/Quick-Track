async function postData() {
    var postApi = (`/api/posts`);
   
    // make a request to the api
    const response = await fetch(postApi);
    const data = await response.json();
    console.log(data);
    return data;
}

postData().then(data => {
    const calories = data.map(
        function(index){
            return index.calories;
        });

    const title = data.map(
        function(index){
            return index.title;
        });
        
    console.log(calories);
    myChart.data.labels = title;
    myChart.data.datasets[0].data = calories;
    myChart.update();
})


const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Green', 'Blue','Yellow'],
        datasets: [{
            label: '# of Calories',
            data: [84, 16],
            backgroundColor: [
                'rgb(255,0,0)',
                'rgb(0,204,0)',
                'rgb(0,0,255)',
                'rgb(255,255,0)'
            ],
            hoverOffset: 4,
            
        }]
    },
    

});

