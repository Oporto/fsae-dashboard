function updateVS(){
    console.log("hugh");
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

window.setInterval(updateVS,200);