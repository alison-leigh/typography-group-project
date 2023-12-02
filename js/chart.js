function displayResultsChart() {
    var ctx = document.getElementById('resultsChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: userLabels,
            datasets: [{
                label: 'Your Personality Rankings',
                data: userStats,
                borderWidth: 2,
            }]
        },
        options: {
            indexAxis: 'y',
        }
    });
}
