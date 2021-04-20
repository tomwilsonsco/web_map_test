ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32636").setExtent([-519689.221448, 238216.805797, 860886.719136, 1515892.676275]);
var wms_layers = [];


        var lyr_googlesatellite_0 = new ol.layer.Tile({
            'title': 'google satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_south_sudan_sub_pop_2 = new ol.format.GeoJSON();
var features_south_sudan_sub_pop_2 = format_south_sudan_sub_pop_2.readFeatures(json_south_sudan_sub_pop_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_south_sudan_sub_pop_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_south_sudan_sub_pop_2.addFeatures(features_south_sudan_sub_pop_2);
var lyr_south_sudan_sub_pop_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_south_sudan_sub_pop_2, 
                style: style_south_sudan_sub_pop_2,
                interactive: true,
                title: '<img src="styles/legend/south_sudan_sub_pop_2.png" /> south_sudan_sub_pop'
            });
var format_Locationscaptured2021_3 = new ol.format.GeoJSON();
var features_Locationscaptured2021_3 = format_Locationscaptured2021_3.readFeatures(json_Locationscaptured2021_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_Locationscaptured2021_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locationscaptured2021_3.addFeatures(features_Locationscaptured2021_3);
var lyr_Locationscaptured2021_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Locationscaptured2021_3, 
                style: style_Locationscaptured2021_3,
                interactive: true,
                title: '<img src="styles/legend/Locationscaptured2021_3.png" /> Locations captured 2021'
            });

lyr_googlesatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_south_sudan_sub_pop_2.setVisible(true);lyr_Locationscaptured2021_3.setVisible(true);
var layersList = [lyr_googlesatellite_0,lyr_OpenStreetMap_1,lyr_south_sudan_sub_pop_2,lyr_Locationscaptured2021_3];
lyr_south_sudan_sub_pop_2.set('fieldAliases', {'ADM1_EN': 'ADM1_EN', 'id': 'id', 'subpop_id': 'subpop_id', });
lyr_Locationscaptured2021_3.set('fieldAliases', {'Record_Number': 'Record_Number', 'y': 'y', 'x': 'x', 'Planet_ImageID': 'Planet_ImageID', 'quality': 'quality', });
lyr_south_sudan_sub_pop_2.set('fieldImages', {'ADM1_EN': 'TextEdit', 'id': 'TextEdit', 'subpop_id': 'TextEdit', });
lyr_Locationscaptured2021_3.set('fieldImages', {'Record_Number': 'Range', 'y': 'TextEdit', 'x': 'TextEdit', 'Planet_ImageID': 'TextEdit', 'quality': 'TextEdit', });
lyr_south_sudan_sub_pop_2.set('fieldLabels', {'ADM1_EN': 'no label', 'id': 'no label', 'subpop_id': 'header label', });
lyr_Locationscaptured2021_3.set('fieldLabels', {'Record_Number': 'header label', 'y': 'no label', 'x': 'no label', 'Planet_ImageID': 'inline label', 'quality': 'no label', });
lyr_Locationscaptured2021_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});