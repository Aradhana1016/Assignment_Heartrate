
//Explaination of the Program
1.A variable "measurementsByDay" is initialized as an empty object. It will store measurements categorized by the day they were recorded.

2.The forEach method is used to iterate through an array of measurements. For each measurement, the timestamp of the start time is extracted and split at the 'T' character to obtain the date component only.

3.If the measurementsByDay object doesn't already have an array for the current date, a new empty array is created for that date.

4.The current measurement is then added to the array for its respective date in the measurementsByDay object.

5.Another object, results, is initialized to store the calculated results for each day.

6.The Object.keys method is used to iterate through the measurementsByDay object, allowing access to each date.

7.For each date, the code retrieves the measurements recorded on that day.

8.The BPM values for the measurements of the current day are extracted and stored in an array called bpmValues.

9.The minimum BPM value for the day is calculated using the Math.min function.

10.The maximum BPM value for the day is calculated using the Math.max function.

11.A function calculateMedian is referenced here to find the median BPM for the day. It appears to be a custom function that calculates the median from an array of numbers.

12.The latest timestamp for the day is determined by finding the measurement with the latest end time using the reduce method.

13.The results for the current day, including minBPM, maxBPM, medianBPM, and the latestTimestamp, are stored in the results object under the current date.

14.Finally, the results are printed to the console using console.log.

15.To run the program we will use the command "node heartanalyzer.js" and press enter.