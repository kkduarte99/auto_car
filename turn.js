var b = require('bonescript');
var led_right = "P8_7";
var state = 0;

b.pinMode(led_right, 'out');
toggleLED = function() {
 state = state ? 0 : 1;
 b.digitalWrite(led_right, state);
};

timer = setInterval(toggleLED, 100);

stopTimer = function() {
 clearInterval(timer);
};

setTimeout(stopTimer, 30000);
