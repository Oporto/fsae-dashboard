function update(){
    fetch('https://rawdataendpoints-yyoqnujuaq-uk.a.run.app/processed_slice', {
      cache: "no-store"
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      updateGForce(data.gx,data.gy);
      updateStr(data.str);
      updateBar(data.slip);
      updateTilt(data.tpoints, data.tilt);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
setInterval(update(),500);