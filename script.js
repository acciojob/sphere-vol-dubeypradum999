function volume_sphere() {
    // Retrieve the radius value from the input field
    const radiusInput = document.getElementById('radius').value;

    // Convert input to a number
    const radius = parseFloat(radiusInput);

    // Validate the input (check if it's a non-negative number)
    if (isNaN(radius) || radius < 0) {
        // Display 'NaN' if input is invalid
        document.getElementById('volume').value = 'NaN';
    } else {
        // Calculate the volume of the sphere using the formula: V = (4/3) * π * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Round the result to four decimal places
        const roundedVolume = volume.toFixed(4);

        // Display the calculated volume in the output field
        document.getElementById('volume').value = roundedVolume;
    }
}

