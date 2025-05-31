(function () {
    // Footer
    const fillYear  = document.querySelector("#fillYear");
    fillYear.textContent = new Date().getFullYear();

    // Work Experience
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026],
            datasets: [{
                label: 'HTML5',
                data: [2, 3, 4, 4.5, 4.5, 4.5, 5, 5, 5],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              },{
                label: 'CSS3',
                data: [1.5, 2, 3, 4, 4, 4, 4, 4, 5],
                fill: false,
                borderColor: 'rgb(75, 126, 192)',
                tension: 0.1
              },{
                label: 'Javascript',
                data: [0.5, 1, 2, 3, 3, 3, 3.5, 4.5, 4],
                fill: false,
                borderColor: 'rgb(252, 238, 116)',
                tension: 0.1
              },{
                label: 'Drupal 8/9 (Aquia Cohesion)',
                data: [null, null, null, 3, 4, 4, null, null, null],
                fill: false,
                borderColor: 'rgb(167, 192, 75)',
                tension: 0.1
              },{
                label: 'React',
                data: [null, null, null, null, null, null, null, null, 3],
                fill: false,
                borderColor: 'rgb(67, 92, 175)',
                tension: 0.1
              },{
                label: 'Angular (2 to 18+)',
                data: [3, 3.5, 2, 0, 0, 0, 0, 2.5, null],
                fill: false,
                borderColor: 'rgb(192, 75, 85)',
                tension: 0.1
              }]
        },
    });
})();