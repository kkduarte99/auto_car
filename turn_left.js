var stop_left = -1;
var stop_right = 1;
var center = 0;

var led_right = {
  pin: "P8_7",
  state: 0
}

var led_left = {
  pin: "P8_8",
  state: 0
}

function left() {
  led_left.state = 1;
  led_right.state = 0;
  //console.log("right led: ", led_right.state);
  b.digitalWrite(led_left.pin, led_left.state);
  b.digitalWrite(led_right.pin, led_right.state);
  led_right.state = 1;
  b.digitalWrite(led_right.pin, led_right.state);
  //console.log("right led: ", led_right.state);
}

var user_input = 50;
for (var i = 0; i < user_input; i++){
  left();
}
