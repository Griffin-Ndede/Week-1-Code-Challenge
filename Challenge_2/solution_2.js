// check if the speed is less than 70km/hr
// if the speed is less than 70km/hr return "Ok"
// calculate excess speed above the 70km/hr speed limit
// calculate demerit points (1 point for every 5km/hr above 70km/hr)
// if the speed is not divisible by 5 round the number down to get the demerit points 
// check if the driver has more than 12 points
// if points is greater than 12 return "license suspended"
// if points is less than 12 return the number of points

  
function speedDetector(speed) {
    if (isNaN(speed)) {
        return "Invalid input";
      } else if (speed < 70) {
        return "Ok";
    } else {
      const excessSpeed = speed - 70;
      const demeritPoints = Math.floor(excessSpeed / 5);
  
      if (demeritPoints > 12) {
        return "License suspended";
      } else {
        return  demeritPoints;
      }
    }
  }
  
  function displaySpeed() {
    const speed = prompt("Enter speed");
    const result = speedDetector(Number(speed));
    document.getElementById("speed").textContent = result;
  }
  