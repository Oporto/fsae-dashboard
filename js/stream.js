function updateVS(){
    fetch('https://rawdataendpoints-yyoqnujuaq-uk.a.run.app/processed_slice', {
      cache: "no-store"
    })
    .then((response) => response.json())
    .then((data) => {
      updateGForce(data.gx,data.gy);
      updateStr(data.str);
      updateBar(data.slip);
      updateTilt(data.tpoints, data.tilt);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

var streamInterval = window.setInterval(updateVS,200);

// Create event listener for when slider changes

// Add event listener to update output when slider value change
slider.addEventListener( 'input', function( event ) {
  if ( event.target.classList.contains( 'has-output-tooltip' ) ) {
    // Get new output position
    var newPosition = getSliderOutputPosition( event.target );

    // Set output position
    output.style[ 'left' ] = newPosition.position;
  }

  // Update output with slider value
  streamInterval = window.setInterval(updateVS,event.target.value);
  //output.value = event.target.value;
} );




