var b = require('bonescript');

function resetOn() {
  b.digitalWrite("P8_8", 1);
  b.digitalWrite("P8_7", 1);

}

resetOn();
