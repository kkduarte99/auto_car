var b = require('bonescript');
var motor_a = "P8_7";
var motor_b = "P8_8";
var off = 0;
var on = 1;
var reset_function;

b.pinMode(motor_a, 'out');
b.pinMode(motor_b, 'out');

left = function() {
    console.log("left");
  b.digitalWrite(motor_a, on);
  b.digitalWrite(motor_b, off);
}

right = function() {
    console.log("right");
  b.digitalWrite(motor_a, off);
  b.digitalWrite(motor_b, on);
}

brake_motor = function() {
  console.log("brake");
  b.digitalWrite(motor_a, on);
  b.digitalWrite(motor_b, on);
}


motor_action = function( direction, duration) {
   if(direction === 1){
      left();
   }else if(direction === 0) {
      right();
   }
  setTimeout( brake_motor, duration);
 duration};

motor_action(1, 300);
