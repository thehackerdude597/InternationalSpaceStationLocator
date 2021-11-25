async function getISS(){
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
                             
    const data = await response.json();
    const {longitude, latitude} = data;
    console.log(data);

    $(document).ready(function(){
        $(".display-lat").html(latitude);
        $(".display-long").html(longitude);


    });
    
  }
  getISS()