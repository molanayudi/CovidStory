function updateMap()
{
    fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.features.map(element => {
            x = element.attributes.Latitude;
            y = element.attributes.Longitude;

            // Mark ont the map
            var color = ""
            if (element.attributes.Confirmed <= 10000){
                color = "yellow";
            } else if (element.attributes.Confirmed <= 25000){
                color = "orange";
            } else {
                color = "red";
            }

            new mapboxgl.Marker({
                draggable: false,
                color: color,
                })
                .setLngLat([y, x])
                .addTo(map);

        });
    })

}
updateMap ();
