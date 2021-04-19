ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32636").setExtent([-261547.382113, 371475.638440, 774835.737882, 1344774.568521]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_planet_locations_2021_1 = new ol.format.GeoJSON();
var features_planet_locations_2021_1 = format_planet_locations_2021_1.readFeatures(json_planet_locations_2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_planet_locations_2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_planet_locations_2021_1.addFeatures(features_planet_locations_2021_1);
var lyr_planet_locations_2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_planet_locations_2021_1, 
                style: style_planet_locations_2021_1,
                interactive: true,
                title: '<img src="styles/legend/planet_locations_2021_1.png" /> planet_locations_2021'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_planet_locations_2021_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_planet_locations_2021_1];
lyr_planet_locations_2021_1.set('fieldAliases', {'Record_Number': 'Record_Number', 'y': 'y', 'x': 'x', 'Planet_ImageID': 'Planet_ImageID', 'quality': 'quality', });
lyr_planet_locations_2021_1.set('fieldImages', {'Record_Number': 'Range', 'y': 'TextEdit', 'x': 'TextEdit', 'Planet_ImageID': 'TextEdit', 'quality': 'TextEdit', });
lyr_planet_locations_2021_1.set('fieldLabels', {'Record_Number': 'header label', 'y': 'no label', 'x': 'no label', 'Planet_ImageID': 'inline label', 'quality': 'no label', });
lyr_planet_locations_2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});