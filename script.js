const xyValues = [
    {x:23, y:42},
    {x:42, y:33},
    {x:83, y:10}
];

new Chart("myChart", {
    type:"scatter",
    data: {
        datasets: [{
            pointRadius:4,
            pointBackgroundColor:"red",
            data: xyValues
        }]
    },
    options: {
        legend: {display:false},
        scales: {
            xAxes: [{ticks: {min:0, max:100}}],
            yAxes: [{ticks: {min:0, max:100}}]
        }
    }
})
