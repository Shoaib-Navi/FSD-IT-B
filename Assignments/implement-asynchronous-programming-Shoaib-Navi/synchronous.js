//------------Rollno: 2300320130153 --------------------------

//Synchronous Version 
function login() {
    console.log("Logged in successfully.");
    return "UserToken123";   
}

function getData(token) {
    console.log("Data fetched for token:", token);
    return { name: "John Doe", score: 85 };
}

function displayData(data) {
    console.log("Displaying Data:", data);
}

function conductTest() {
    console.log("Test conducted.");
    return "TestResult: Pass";
}

function logout() {
    console.log("Logged out.");
}

function main() {
    const token = login();
    const data = getData(token);
    displayData(data);
    const testResult = conductTest();
    console.log(testResult);
    logout();
}

main();
