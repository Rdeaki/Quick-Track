const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'white', 'Yellow'],
        datasets: [{
            label: '# of Calories',
            data: [84, 16],
            backgroundColor: [
                'rgb(60,179,113)',
                'rgb(255,255,255)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
            
        }]
    },
    

});

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}