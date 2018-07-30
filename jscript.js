var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18 || hourNow === 18) {
    greeting = 'Good Evening';
} else if (hourNow > 12 || hourNow === 12) {
    greeting = 'Good Afternoon';
} else if (hourNow > 0 || hourNow === 0) {
    greeting = 'Good Morning';
} else {
    greeting = 'Welcome';
}

document.write(greeting);