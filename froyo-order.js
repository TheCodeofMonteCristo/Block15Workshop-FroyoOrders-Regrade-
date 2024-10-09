/* Overall Pseudocode Explaining how this JavaScript document functions, and is arranged:





Key Concepts:
User Input Handling: prompt() gathers input directly from the user.
String Manipulation: split() turns the input string into an array.
Object Manipulation: The code dynamically creates an object where each flavor is a key, and its count is the value.
Formatting: formatOrderSummary() converts the object into a human-readable string.
This code is useful for summarizing any list of comma-separated items and could easily be adapted to other use cases beyond froyo orders.
*/









// Prompt the user to enter a list of comma-separated froyo flavors and store the input in a variable.
const orderInput = prompt('Enter a list of comma-separated froyo flavors:\nEx. vanilla,coffee,strawberry');

// Pass the user's input to the calculateOrderSummary function to generate an order summary object.
const orderObject = calculateOrderSummary(orderInput);

// Log a message to the console indicating that the order object will be displayed next.
console.log('The console will output the object like this:');

// Output the order summary object to the console for debugging and verification purposes.
console.log(orderObject);

// Log another message to introduce the formatted order summary that will be displayed.
console.log('Here is a nicely formatted message:');

// Call the formatOrderSummary function with the orderObject and log the resulting formatted message.
console.log(formatOrderSummary(orderObject));

/**
 * Calculates the count of each flavor type from the user's input order.
 * 
 * @param {string} order - A string of comma-separated flavors input by the user.
 * @returns {object} - An object that contains each flavor as a key and the count of its occurrences as the value.
 */
function calculateOrderSummary(order) {
    // Split the input string into an array of flavors using the comma as the delimiter.
    const orderArray = order.split(',');

    // Initialize an empty object to hold the summary of flavor counts.
    const orderSummary = {};

    // Iterate over each item in the order array to populate the order summary.
    for (const item of orderArray) {
        // If the flavor is not already in the summary, initialize its count to 1.
        if (!orderSummary[item]) {
            orderSummary[item] = 1;
        } else {
            // If the flavor exists, increment its count by 1.
            orderSummary[item]++;
        }
    }
    // Return the completed order summary object containing flavor counts.
    return orderSummary;
}

/**
 * Formats the order summary into a user-friendly string for display.
 * 
 * @param {object} order - An object that contains froyo flavors as keys and their corresponding counts as values.
 * @returns {string} - A formatted message summarizing the customer's order in a readable format.
 */
function formatOrderSummary(order) {
    // Initialize an empty string to build the summary message.
    let orderSummaryString = '';

    // Iterate over each flavor in the order object to create a summary message.
    for (const item in order) {
        // Append each flavor and its count to the summary string, ensuring a clear format.
        orderSummaryString += item + ' froyo: ' + order[item] + '\n';
    }
    
    // Return a complete formatted message that includes all ordered flavors and their counts.
    return 'You have ordered the following: ' + orderSummaryString;
}