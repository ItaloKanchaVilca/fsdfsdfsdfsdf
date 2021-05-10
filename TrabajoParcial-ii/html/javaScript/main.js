
function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(50);
        
    // Multiple markers location, latitude, and longitude
    var markers = [
        ['Brooklyn Museum, NY', -16.426659508030728, -71.61002029044725],
        ['Brooklyn Public Library, NY', -16.384360293900873, -71.51631960481214],
        ['Brooklyn Museum, NY', -16.391019113082287, -71.57164179611304],
        ['Brooklyn Public Library, NY', -16.359485634090444, -71.52019828243101],
        ['Brooklyn Museum, NY', -16.435079086993326, -71.54367448907162],
        ['Brooklyn Public Library, NY', -16.42274330049114, -71.51958585964908],
        ['Brooklyn Public Library, NY', -16.373979916038877, -71.51305334903162],
        ['Brooklyn Museum, NY', -16.404336068420086, -71.52019828148745],
        ['Brooklyn Public Library, NY', -16.39748186689187, -71.49304753815528],
        ['Brooklyn Museum, NY', -16.423134924727098, -71.48937300146369],
        ['Brooklyn Public Library, NY',-16.35008336159726, -71.60226293514592],
        ['Brooklyn Museum, NY', -16.417219849942647, -71.60932239325315],
        ['Brooklyn Public Library, NY', -16.422702674189114, -71.55420434287956],
        ['Brooklyn Museum, NY', -16.420996441655173, -71.48854623325565],
        ['Brooklyn Public Library, NY',-16.342760624492215, -71.56290317349136],
        ['Brooklyn Museum, NY', -16.345439611908716, -71.5438460547986],
        ['Brooklyn Public Library, NY',-16.35720342606154, -71.57212827553371],
        ['Brooklyn Public Library, NY',-16.39377154704104, -71.51155819708508],
        ['Brooklyn Museum, NY', -16.39982675188839, -71.51568521641981],
        ['Brooklyn Public Library, NY',-16.41868983631286, -71.53911212029053],
        ['Brooklyn Museum, NY', -16.388065508640302, -71.52575999891344],
        ['Brooklyn Public Library, NY',-16.39027807398319, -71.54797307356806],
        ['Brooklyn Museum, NY', -16.4026974970608, -71.58844297953232],
        ['Brooklyn Public Library, NY', -16.39426624642581, -71.58762542001367],
        ['Brooklyn Museum, NY', -16.388579848017788, -71.60050198243226],
        ['Brooklyn Public Library, NY', -16.382697192241583, -71.58333323254081],
        ['Brooklyn Museum, NY', -16.395834878839253, -71.61971463112029],
        ['Brooklyn Public Library, NY',-16.373676775192795, -71.6043853901458],
        ['Brooklyn Public Library, NY',-16.380736267520305, -71.61787512220336],
        ['Brooklyn Museum, NY',-16.376422163694688, -71.64362824704051],
        ['Brooklyn Public Library, NY', -16.35735530819226, -71.55951995416528],
        ['Brooklyn Museum, NY', -16.356448278800478, -71.55436383266974],
        ['Brooklyn Public Library, NY',-16.363951758793277, -71.55487944481929],
        ['Brooklyn Museum, NY', -16.354533785869044, -71.55437545479874],
        ['Brooklyn Public Library, NY',-16.35718138519096, -71.54895912300672],
        ['Brooklyn Museum, NY', -16.362231336179455, -71.55304692058561],
        ['Brooklyn Public Library, NY',-16.359583805353026, -71.54425815579101],
        ['Brooklyn Museum, NY', -16.370124687105083, -71.55013436481065],
        ['Brooklyn Public Library, NY',-16.362280364189395, -71.56996018306822],
        ['Brooklyn Public Library, NY',-16.346443676620996, -71.54364498615419],
        ['Brooklyn Museum, NY',-16.348451998623634, -71.55310033678144],
        ['Brooklyn Public Library, NY',-16.37063268990173, -71.56813902447678],
        ['Brooklyn Museum, NY', -16.36758196367904, -71.58111526357389],
        ['Brooklyn Public Library, NY',-16.336734288814096, -71.61103383627201],
        ['Prospect Park Zoo, NY',-16.449959310655714, -71.56041404511102]
        
    ];
                        
    // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Aguayo González Jaime Francisco</h3>' +
        '<p>Hombre - DNI:78945612 - 60 años</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Chávez Heredia	Andrea</h3>' +
        '<p>Mujer - DNI: 12345678  Edad :18 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Morales Gonzalez Diana Laura</h3>' +
        '<p>Mujer - DNI: 12345678  Edad:25 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Ornelas Guzmán	Erandhi Claudel</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:30 años</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Zamora Peinado	Rosa Luz</h3>' +
        '<p>Mujer - DNI: 12345678  Edad : 29 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Meré Hidalgo Pablo</h3>' +
        '<p>Hombre - DNI:78945612 - Edad: 30 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Lunar Pérez Julia Andrea</h3>' +
        '<p>Mujer - DNI: 12345678  Edad : 40</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Hernández Prado Miguel Ángel</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:31 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Hernández Palacios	Jaime Daniel</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:34 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Guerrero Padrés Miguel Alejandro</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:37 años' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Gómez Vargas	José Ignacio</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:74 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>García Arreguín Montserrat Carolina</h3>' +
        '<p>>Mujer - DNI: 12345678  Edad : 25 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Flores Aguilar	Aniyensy Sarai</h3>' +
        '<p>>Mujer - DNI: 12345678  Edad :25 años</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Delgado Barrón	Luis Felipe</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:35 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Aguayo González	Jaime Francisco</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:30 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Aguayo González Jaime Francisco</h3>' +
        '<p>Hombre - DNI:78945612 - 60 años</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Chávez Heredia	Andrea</h3>' +
        '<p>Mujer - DNI: 12345678  Edad :18 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Morales Gonzalez Diana Laura</h3>' +
        '<p>Mujer - DNI: 12345678  Edad:25 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Ornelas Guzmán	Erandhi Claudel</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:30 años</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Zamora Peinado	Rosa Luz</h3>' +
        '<p>Mujer - DNI: 12345678  Edad : 29 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Meré Hidalgo Pablo</h3>' +
        '<p>Hombre - DNI:78945612 - Edad: 30 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Lunar Pérez Julia Andrea</h3>' +
        '<p>Mujer - DNI: 12345678  Edad : 40</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Hernández Prado Miguel Ángel</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:31 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Hernández Palacios	Jaime Daniel</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:34 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Guerrero Padrés Miguel Alejandro</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:37 años' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Gómez Vargas	José Ignacio</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:74 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>García Arreguín Montserrat Carolina</h3>' +
        '<p>>Mujer - DNI: 12345678  Edad : 25 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Flores Aguilar	Aniyensy Sarai</h3>' +
        '<p>>Mujer - DNI: 12345678  Edad :25 años</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Delgado Barrón	Luis Felipe</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:35 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Aguayo González	Jaime Francisco</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:30 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Aguayo González Jaime Francisco</h3>' +
        '<p>Hombre - DNI:78945612 - 60 años</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Chávez Heredia	Andrea</h3>' +
        '<p>Mujer - DNI: 12345678  Edad :18 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Morales Gonzalez Diana Laura</h3>' +
        '<p>Mujer - DNI: 12345678  Edad:25 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Ornelas Guzmán	Erandhi Claudel</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:30 años</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Zamora Peinado	Rosa Luz</h3>' +
        '<p>Mujer - DNI: 12345678  Edad : 29 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Meré Hidalgo Pablo</h3>' +
        '<p>Hombre - DNI:78945612 - Edad: 30 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Lunar Pérez Julia Andrea</h3>' +
        '<p>Mujer - DNI: 12345678  Edad : 40</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Hernández Prado Miguel Ángel</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:31 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Hernández Palacios	Jaime Daniel</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:34 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Guerrero Padrés Miguel Alejandro</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:37 años' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Gómez Vargas	José Ignacio</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:74 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>García Arreguín Montserrat Carolina</h3>' +
        '<p>>Mujer - DNI: 12345678  Edad : 25 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Flores Aguilar	Aniyensy Sarai</h3>' +
        '<p>>Mujer - DNI: 12345678  Edad :25 años</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Delgado Barrón	Luis Felipe</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:35 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Delgado Barrón	Luis Felipe</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:35 años</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Aguayo González	Jaime Francisco</h3>' +
        '<p>Hombre - DNI:78945612 - Edad:30 años</p>' +
        '</div>']
    ];
        
    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);
