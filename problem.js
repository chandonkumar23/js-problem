// Problem NO:1

function calculateTax(income, expense) {

    if (typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }

    let taxableAmount = income - expense;
    
    let tax = taxableAmount * 0.20;

    return tax;
}
// console.log(calculateTax(-5000, 2000));


// Problem NO:2
function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
   
    let [username, domain] = email.split('@');

    if (!username || !domain) {
        return "Invalid Email";
    }

    return `${username} sent you an email from ${domain}`;
}
// console.log(sendNotification("zihad@gmail.com")); 

// Problem NO:3
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== ' ') { 
            return true;
        }
    }
    
    return false;
}
// console.log(checkDigitsInName("Suman"));    


// Problem NO:4
function calculateFinalScore(input) {
    if (typeof input !== 'object' || input === null) {
        return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFFamily } = input;

    if (typeof name !== 'string' || 
        typeof testScore !== 'number' || 
        typeof schoolGrade !== 'number' || 
        typeof isFFamily !== 'boolean' ||
        testScore > 50 || schoolGrade > 30) {
        return "Invalid Input";
    }

    let finalScore = testScore + schoolGrade;

    if (isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;
}
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));  

// Problem NO:5

function waitingTime(times, serialNumber) {
    if (!Array.isArray(times) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    const totalTime = times.reduce((sum, time) => sum + time, 0);
    const avgTime = Math.round(totalTime / times.length);

    const peopleAhead = serialNumber - times.length - 1;

    const waitingTime = avgTime * peopleAhead;

    return waitingTime;
}
// console.log(waitingTime(7, 10));        