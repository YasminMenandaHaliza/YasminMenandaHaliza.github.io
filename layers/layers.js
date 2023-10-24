var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Stasiun_Sepeda_1 = new ol.format.GeoJSON();
var features_Stasiun_Sepeda_1 = format_Stasiun_Sepeda_1.readFeatures(json_Stasiun_Sepeda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stasiun_Sepeda_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stasiun_Sepeda_1.addFeatures(features_Stasiun_Sepeda_1);
var lyr_Stasiun_Sepeda_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stasiun_Sepeda_1, 
                style: style_Stasiun_Sepeda_1,
                interactive: true,
                title: '<img src="styles/legend/Stasiun_Sepeda_1.png" /> Stasiun_Sepeda'
            });
var format_CoWorking_Space_2 = new ol.format.GeoJSON();
var features_CoWorking_Space_2 = format_CoWorking_Space_2.readFeatures(json_CoWorking_Space_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoWorking_Space_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoWorking_Space_2.addFeatures(features_CoWorking_Space_2);
var lyr_CoWorking_Space_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoWorking_Space_2, 
                style: style_CoWorking_Space_2,
                interactive: true,
                title: '<img src="styles/legend/CoWorking_Space_2.png" /> Co-Working_Space'
            });
var format_Jalur_Sepeda_3 = new ol.format.GeoJSON();
var features_Jalur_Sepeda_3 = format_Jalur_Sepeda_3.readFeatures(json_Jalur_Sepeda_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalur_Sepeda_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalur_Sepeda_3.addFeatures(features_Jalur_Sepeda_3);
var lyr_Jalur_Sepeda_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalur_Sepeda_3, 
                style: style_Jalur_Sepeda_3,
                interactive: true,
                title: '<img src="styles/legend/Jalur_Sepeda_3.png" /> Jalur_Sepeda'
            });
var format_Luasan_CWS_4 = new ol.format.GeoJSON();
var features_Luasan_CWS_4 = format_Luasan_CWS_4.readFeatures(json_Luasan_CWS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luasan_CWS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luasan_CWS_4.addFeatures(features_Luasan_CWS_4);
var lyr_Luasan_CWS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Luasan_CWS_4, 
                style: style_Luasan_CWS_4,
                interactive: true,
                title: '<img src="styles/legend/Luasan_CWS_4.png" /> Luasan_CWS'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Stasiun_Sepeda_1.setVisible(true);lyr_CoWorking_Space_2.setVisible(true);lyr_Jalur_Sepeda_3.setVisible(true);lyr_Luasan_CWS_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Stasiun_Sepeda_1,lyr_CoWorking_Space_2,lyr_Jalur_Sepeda_3,lyr_Luasan_CWS_4];
lyr_Stasiun_Sepeda_1.set('fieldAliases', {'fid': 'fid', 'nama_stasiun': 'nama_stasiun', 'alamat_stasiun': 'alamat_stasiun', 'deskripsi_stasiun': 'deskripsi_stasiun', 'foto_stasiun': 'foto_stasiun', });
lyr_CoWorking_Space_2.set('fieldAliases', {'fid': 'fid', 'nama_cws': 'nama_cws', 'jam_operasional': 'jam_operasional', 'hari_operasional': 'hari_operasional', 'fasilitas': 'fasilitas', 'alamat_cws': 'alamat_cws', 'sosial_media': 'sosial_media', 'range_harga': 'range_harga', 'deskripsi_cws': 'deskripsi_cws', 'foto_cws': 'foto_cws', });
lyr_Jalur_Sepeda_3.set('fieldAliases', {'fid': 'fid', 'dari': 'dari', 'menuju': 'menuju', 'jrk': 'jrk', });
lyr_Luasan_CWS_4.set('fieldAliases', {'fid': 'fid', 'Nama_CWS': 'Nama_CWS', 'Luas_CWS': 'Luas_CWS', });
lyr_Stasiun_Sepeda_1.set('fieldImages', {'fid': 'Hidden', 'nama_stasiun': 'TextEdit', 'alamat_stasiun': 'TextEdit', 'deskripsi_stasiun': 'TextEdit', 'foto_stasiun': 'ExternalResource', });
lyr_CoWorking_Space_2.set('fieldImages', {'fid': 'Hidden', 'nama_cws': 'TextEdit', 'jam_operasional': 'TextEdit', 'hari_operasional': 'TextEdit', 'fasilitas': 'TextEdit', 'alamat_cws': 'TextEdit', 'sosial_media': 'TextEdit', 'range_harga': 'TextEdit', 'deskripsi_cws': 'TextEdit', 'foto_cws': 'ExternalResource', });
lyr_Jalur_Sepeda_3.set('fieldImages', {'fid': 'Hidden', 'dari': 'TextEdit', 'menuju': 'TextEdit', 'jrk': '', });
lyr_Luasan_CWS_4.set('fieldImages', {'fid': '', 'Nama_CWS': '', 'Luas_CWS': '', });
lyr_Stasiun_Sepeda_1.set('fieldLabels', {'nama_stasiun': 'no label', 'alamat_stasiun': 'no label', 'deskripsi_stasiun': 'no label', 'foto_stasiun': 'no label', });
lyr_CoWorking_Space_2.set('fieldLabels', {'nama_cws': 'header label', 'jam_operasional': 'header label', 'hari_operasional': 'no label', 'fasilitas': 'header label', 'alamat_cws': 'no label', 'sosial_media': 'no label', 'range_harga': 'no label', 'deskripsi_cws': 'no label', 'foto_cws': 'no label', });
lyr_Jalur_Sepeda_3.set('fieldLabels', {'dari': 'no label', 'menuju': 'no label', 'jrk': 'no label', });
lyr_Luasan_CWS_4.set('fieldLabels', {'fid': 'no label', 'Nama_CWS': 'no label', 'Luas_CWS': 'no label', });
lyr_Luasan_CWS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});