var wms_layers = [];

var lyr_id_106_20210415_071557_ssc17_u0001_visual_clip_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "id_106_20210415_071557_ssc17_u0001_visual_clip",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/id_106_20210415_071557_ssc17_u0001_visual_clip_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3605503.082051, 493658.302728, 3606508.231976, 494666.149463]
                            })
                        });
var format_planet_locations_2021_1 = new ol.format.GeoJSON();
var features_planet_locations_2021_1 = format_planet_locations_2021_1.readFeatures(json_planet_locations_2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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

lyr_id_106_20210415_071557_ssc17_u0001_visual_clip_0.setVisible(true);lyr_planet_locations_2021_1.setVisible(true);
var layersList = [lyr_id_106_20210415_071557_ssc17_u0001_visual_clip_0,lyr_planet_locations_2021_1];
lyr_planet_locations_2021_1.set('fieldAliases', {'Record_Number': 'Record_Number', 'y': 'y', 'x': 'x', 'Planet_ImageID': 'Planet_ImageID', 'quality': 'quality', });
lyr_planet_locations_2021_1.set('fieldImages', {'Record_Number': 'Range', 'y': 'TextEdit', 'x': 'TextEdit', 'Planet_ImageID': 'TextEdit', 'quality': 'TextEdit', });
lyr_planet_locations_2021_1.set('fieldLabels', {'Record_Number': 'no label', 'y': 'no label', 'x': 'no label', 'Planet_ImageID': 'no label', 'quality': 'no label', });
lyr_planet_locations_2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});