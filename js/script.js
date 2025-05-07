/* Created by: Angelo Garcia
* Created on: May 6, 2025
* This file contains the CSS for index.html
*/
function calculateVolume() {
  // Get the radius input value
  const radius = parseFloat(document.getElementById('radius-input').value);

  // Validate the input
  if (isNaN(radius) || radius <= 0) {
    document.getElementById('result').innerHTML = "<span style='color: red;'>Please enter a valid positive number for the radius.</span>";
    return;
  }

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the result
  document.getElementById('result').innerHTML = `The volume of the sphere is: ${volume.toFixed(2)} cubic units.`;
}
