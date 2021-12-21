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
var lyr_OUTPUT_class_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "OUTPUT_class",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/OUTPUT_class_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12280332.387479, -797692.767556, 12288317.406769, -773879.686017]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_OUTPUT_class_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OUTPUT_class_1];
