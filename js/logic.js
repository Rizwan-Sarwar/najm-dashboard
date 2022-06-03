const btnToggle = () => {
    var element = document.getElementById("circle-toggle");
    element.classList.toggle("btn_toggle-right");
}


var opts = {
    angle: -0.01, // The span of the gauge arc
    lineWidth: 0.05, // The line thickness
    radiusScale: 0.80, // Relative radius
    pointer: {
        length: 0.61, // // Relative to gauge radius
        strokeWidth: 0.018, // The thickness
        color: '#000000' // Fill color
    },
    staticLabels: {
        font: "8px sans-serif", // Specifies font
        labels: [0, 10, 20, 30, 40, 50, 60], // Print labels at these values
        color: "#000000", // Optional: Label text color
        fractionDigits: 0 // Optional: Numerical precision. 0=round off.
    },
    staticZones: [
        { strokeStyle: "green", min: 0, max: 15 }, // Red from 100 to 130
        { strokeStyle: "Yellow", min: 15, max: 30 }, // Yellow
        { strokeStyle: "orange", min: 30, max: 45 }, // Green
        { strokeStyle: "red", min: 45, max: 60 }, // Yellow
    ],
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support

};

// GUAGE 1
var target = document.getElementById('guage_1'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 60; // set max gauge value
gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 20; // set animation speed (32 is default value)
gauge.set(10); // set actual value



// GUAGE 2
var target = document.getElementById('guage_2'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 60; // set max gauge value
gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 20; // set animation speed (32 is default value)
gauge.set(30); // set actual value



// GUAGE 3
var target = document.getElementById('guage_3'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 60; // set max gauge value
gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 20; // set animation speed (32 is default value)
gauge.set(20); // set actual value



// chart.js 
const chartBar = {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],

    },
}
const ctx_1 = document.getElementById('chart_1').getContext('2d');
const chart_1 = new Chart(ctx_1, chartBar);


const chartLine = {
    type: "line",
    data: {
        labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        datasets: [{
            data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
            borderColor: "green",
            fill: false
        }, {
            data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
            borderColor: "blue",
            fill: false
        }]
    },
    options: {
        legend: { display: false }
    }
};
const ctx_2 = document.getElementById('chart_2');
const chart_2 = new Chart(ctx_2, chartLine);


const ctx_3 = document.getElementById('chart_3').getContext('2d');
const chart_3 = new Chart(ctx_3, chartBar);


const chartBar_2 = {
    type: "line",
    data: {
        labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
        }]
    },
    options: {
        legend: { display: false },
    }
};


const ctx_4 = document.getElementById('chart_4').getContext('2d');
const chart_4 = new Chart(ctx_4, chartBar_2);



const chartPie = {
    type: "pie",
    data: {
        // labels: ["Italy", "France", "Spain", "USA"],
        datasets: [{
            backgroundColor: [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
            ],
            data: [55, 49, 44, 24],
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production 2018"
        }
    }
};

const ctx_5 = document.getElementById('chart_5');
const chart_5 = new Chart(ctx_5, chartPie);