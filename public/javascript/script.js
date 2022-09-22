const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
            label: '# of Calories',
            data: [25,25,25,25],
            backgroundColor: [
                'red',
                'blue',
                'yellow',
                'green',
            ],
            hoverOffset: 4,
            
        }]
    },
    

});


