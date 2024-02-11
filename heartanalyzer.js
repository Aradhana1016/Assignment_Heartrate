const fs = require('fs');

// Read the JSON data from the file
const rawData = fs.readFileSync('heartrate.json');
const measurements = JSON.parse(rawData);

// Function to calculate median
function calculateMedian(values) {
    const sorted = values.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

// Group measurements by day
const measurementsByDay = {};
measurements.forEach(measurement => {
    const date = measurement.timestamps.startTime.split('T')[0];
    if (!measurementsByDay[date]) {
        measurementsByDay[date] = [];
    }
    measurementsByDay[date].push(measurement);
});

// Calculate min, max, median, and latest timestamp for each day
const results = {};
Object.keys(measurementsByDay).forEach(date => {
    const measurementsOfDay = measurementsByDay[date];
    const bpmValues = measurementsOfDay.map(measurement => measurement.beatsPerMinute);
    const min = Math.min(...bpmValues);
    const max= Math.max(...bpmValues);
    const median = calculateMedian(bpmValues);
    const latestDataTimestamp = measurementsOfDay.reduce((latest, measurement) => {
        const endTime = new Date(measurement.timestamps.endTime);
        return endTime > latest ? endTime : latest;
    }, new Date(0));

    results[date]= {
        date,
        min,
        max,
        median,
        latestDataTimestamp
    };
});

// Output the results
console.log(results);
