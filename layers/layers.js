ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32636").setExtent([-519689.221448, 238216.805797, 860886.719136, 1515892.676275]);
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
var lyr_id_113_20210404_111959_ssc19_u0001_visual_clip_1 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_113_20210404_111959_ssc19_u0001_visual_clip_1.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [435339.500000, 489925.000000, 436340.500000, 490922.000000]
    })
});
var lyr_id_111_20210404_111959_ssc19_u0001_visual_clip_2 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_111_20210404_111959_ssc19_u0001_visual_clip_2.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [433177.000000, 491032.000000, 434178.000000, 492029.500000]
    })
});
var lyr_id_97_20210415_110643_ssc8_u0001_visual_clip_3 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_97_20210415_110643_ssc8_u0001_visual_clip_3.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [430667.500000, 514182.000000, 431668.000000, 515179.000000]
    })
});
var lyr_id_106_20210415_071557_ssc17_u0001_visual_clip_4 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_106_20210415_071557_ssc17_u0001_visual_clip_4.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [432188.500000, 489706.500000, 433189.500000, 490703.500000]
    })
});
var lyr_id_105_20210414_080346_ssc12_u0001_visual_clip_5 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_105_20210414_080346_ssc12_u0001_visual_clip_5.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [433795.500000, 487129.500000, 434796.000000, 488126.500000]
    })
});
var lyr_id_104_20210414_080346_ssc12_u0001_visual_clip_6 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_104_20210414_080346_ssc12_u0001_visual_clip_6.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [431973.500000, 484643.500000, 432974.500000, 485641.000000]
    })
});
var lyr_id_96_20210415_110643_ssc8_u0001_visual_clip_7 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_96_20210415_110643_ssc8_u0001_visual_clip_7.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [430645.500000, 514248.500000, 431646.000000, 515245.500000]
    })
});
var lyr_id_95_20210415_110643_ssc8_u0001_visual_clip_8 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_95_20210415_110643_ssc8_u0001_visual_clip_8.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [432519.000000, 513019.500000, 433519.500000, 514017.000000]
    })
});
var lyr_id_94_20210415_110643_ssc8_u0001_visual_clip_9 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_94_20210415_110643_ssc8_u0001_visual_clip_9.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [432863.000000, 513229.500000, 433863.500000, 514226.500000]
    })
});
var lyr_id_92_20210415_080051_ssc13_u0001_visual_clip_10 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_92_20210415_080051_ssc13_u0001_visual_clip_10.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [430252.500000, 557018.500000, 431252.500000, 558015.500000]
    })
});
var lyr_id_88_20210414_080346_ssc12_u0001_visual_clip_11 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_88_20210414_080346_ssc12_u0001_visual_clip_11.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [430863.000000, 483229.500000, 431864.000000, 484227.000000]
    })
});
var lyr_id_119_20210324_075819_ssc12_u0001_visual_clip_12 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_119_20210324_075819_ssc12_u0001_visual_clip_12.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [557828.000000, 467503.000000, 558829.000000, 468500.000000]
    })
});
var lyr_id_118_20210324_075819_ssc12_u0001_visual_clip_13 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_118_20210324_075819_ssc12_u0001_visual_clip_13.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [558471.500000, 467901.500000, 559472.500000, 468898.500000]
    })
});
var lyr_id_117_20210324_075819_ssc12_u0001_visual_clip_14 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_117_20210324_075819_ssc12_u0001_visual_clip_14.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [557393.000000, 470421.000000, 558394.000000, 471418.000000]
    })
});
var lyr_id_116_20210324_075819_ssc12_u0001_visual_clip_15 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_116_20210324_075819_ssc12_u0001_visual_clip_15.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [555881.500000, 473824.500000, 556882.500000, 474821.500000]
    })
});
var lyr_id_58_20210316_084450_ssc1_u0001_visual_clip_16 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_58_20210316_084450_ssc1_u0001_visual_clip_16.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [316718.500000, 858267.500000, 317716.500000, 859268.000000]
    })
});
var lyr_id_52_20210302_055304_ssc14_u0001_visual_clip_17 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_52_20210302_055304_ssc14_u0001_visual_clip_17.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [443019.000000, 499733.000000, 444019.500000, 500730.500000]
    })
});
var lyr_id_51_20210305_075307_ssc4_u0001_visual_clip_18 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_51_20210305_075307_ssc4_u0001_visual_clip_18.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [459892.500000, 489719.500000, 460893.000000, 490716.500000]
    })
});
var lyr_id_50_20210304_110048_ssc7_u0001_visual_clip_19 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_50_20210304_110048_ssc7_u0001_visual_clip_19.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [454188.000000, 484653.000000, 455188.500000, 485650.000000]
    })
});
var lyr_id_46_20210304_110048_ssc7_u0001_visual_clip_20 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_46_20210304_110048_ssc7_u0001_visual_clip_20.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [450217.500000, 487291.500000, 451218.000000, 488288.500000]
    })
});
var lyr_id_45_20210220_092951_ssc15_u0001_visual_clip_21 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_45_20210220_092951_ssc15_u0001_visual_clip_21.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [353619.000000, 856438.000000, 354616.500000, 857438.000000]
    })
});
var lyr_id_44_20210310_110005_ssc9_u0001_visual_clip_22 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_44_20210310_110005_ssc9_u0001_visual_clip_22.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [354033.000000, 855533.500000, 355030.500000, 856533.500000]
    })
});
var lyr_id_42_20210220_110943_ssc10_u0001_visual_clip_23 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_42_20210220_110943_ssc10_u0001_visual_clip_23.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [355798.500000, 857496.500000, 356795.500000, 858496.000000]
    })
});
var lyr_id_40_20210221_091140_ssc14_u0001_visual_clip_24 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_40_20210221_091140_ssc14_u0001_visual_clip_24.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [371164.000000, 891704.000000, 372160.500000, 892703.500000]
    })
});
var lyr_id_37_20210228_080741_ssc13_u0001_visual_clip_25 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_37_20210228_080741_ssc13_u0001_visual_clip_25.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [370054.000000, 614780.500000, 371054.500000, 615779.000000]
    })
});
var lyr_id_24_20210216_081102_ssc3_u0001_visual_clip_26 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_24_20210216_081102_ssc3_u0001_visual_clip_26.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [369243.000000, 620370.000000, 370243.500000, 621368.500000]
    })
});
var lyr_id_23_20210219_111321_ssc8_u0001_visual_clip_27 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_23_20210219_111321_ssc8_u0001_visual_clip_27.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [359167.500000, 613818.000000, 360168.500000, 614817.000000]
    })
});
var lyr_id_22_20210227_131816_ssc18_u0001_visual_clip_28 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_22_20210227_131816_ssc18_u0001_visual_clip_28.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [255746.500000, 643548.000000, 256749.000000, 644549.000000]
    })
});
var lyr_id_21_20210301_121819_ssc17_u0001_visual_clip_29 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_21_20210301_121819_ssc17_u0001_visual_clip_29.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [354031.500000, 642424.000000, 355032.000000, 643423.000000]
    })
});
var lyr_id_14_20210226_111311_ssc6_u0001_visual_clip_30 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_14_20210226_111311_ssc6_u0001_visual_clip_30.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [359126.500000, 613713.500000, 360127.000000, 614712.000000]
    })
});
var lyr_id_13_20210223_083350_ssc1_u0001_visual_clip_31 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_13_20210223_083350_ssc1_u0001_visual_clip_31.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [281516.500000, 684572.500000, 282518.000000, 685573.000000]
    })
});
var lyr_id_7_20210223_111109_ssc11_u0001_visual_clip_32 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_7_20210223_111109_ssc11_u0001_visual_clip_32.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [223170.000000, 724664.500000, 224172.000000, 725666.500000]
    })
});
var lyr_id_3_20210301_111346_ssc7_u0001_visual_clip_33 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_3_20210301_111346_ssc7_u0001_visual_clip_33.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [219687.000000, 732093.500000, 220689.500000, 733096.000000]
    })
});
var lyr_id_65_20210311_082357_ssc2_u0001_visual_clip_34 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_65_20210311_082357_ssc2_u0001_visual_clip_34.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [2984547.565328, 961892.116132, 2985552.193738, 962907.943945]
    })
});
var lyr_id_141_20210323_081311_ssc4_u0001_visual_clip_35 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_141_20210323_081311_ssc4_u0001_visual_clip_35.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [3119945.098493, 851433.428424, 3120953.090280, 852450.627202]
    })
});
var lyr_id_133_20210322_105731_ssc6_u0001_visual_clip_36 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_133_20210322_105731_ssc6_u0001_visual_clip_36.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [559801.000000, 544110.000000, 560801.500000, 545107.000000]
    })
});
var lyr_id_128_20210322_105731_ssc6_u0001_visual_clip_37 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_128_20210322_105731_ssc6_u0001_visual_clip_37.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [559680.500000, 542308.000000, 560681.000000, 543305.000000]
    })
});
var lyr_id_110_20210325_105755_ssc7_u0001_visual_clip_38 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_110_20210325_105755_ssc7_u0001_visual_clip_38.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [433216.500000, 498184.000000, 434217.000000, 499181.500000]
    })
});
var lyr_id_108_20210413_080048_ssc3_u0001_visual_clip_39 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_108_20210413_080048_ssc3_u0001_visual_clip_39.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [435342.000000, 492843.500000, 436343.000000, 493840.500000]
    })
});
var lyr_id_99_20210410_105934_ssc8_u0001_visual_clip_40 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_99_20210410_105934_ssc8_u0001_visual_clip_40.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [432405.000000, 522471.000000, 433405.500000, 523468.500000]
    })
});
var lyr_id_89_20210410_075352_ssc2_u0001_visual_clip_41 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_89_20210410_075352_ssc2_u0001_visual_clip_41.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [430348.000000, 563839.000000, 431348.000000, 564836.000000]
    })
});
var lyr_id_76_20210321_080906_ssc12_u0001_visual_clip_42 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_76_20210321_080906_ssc12_u0001_visual_clip_42.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [425787.500000, 1156287.500000, 426776.000000, 1157286.500000]
    })
});
var lyr_id_64_20210311_082357_ssc2_u0001_visual_clip_43 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_64_20210311_082357_ssc2_u0001_visual_clip_43.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [2984390.865581, 964707.957229, 2985395.059229, 965723.855794]
    })
});
var lyr_id_47_20210304_110048_ssc7_u0001_visual_clip_44 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_47_20210304_110048_ssc7_u0001_visual_clip_44.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [451570.500000, 487840.500000, 452571.000000, 488837.000000]
    })
});
var lyr_id_144_20210407_111224_ssc8_u0001_visual_clip_45 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_144_20210407_111224_ssc8_u0001_visual_clip_45.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [399122.500000, 1116628.500000, 400113.000000, 1117628.000000]
    })
});
var lyr_id_143_20210407_080516_ssc2_u0001_visual_clip_46 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_143_20210407_080516_ssc2_u0001_visual_clip_46.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [403178.000000, 1095703.500000, 404169.000000, 1096703.000000]
    })
});
var lyr_id_142_20210323_081311_ssc4_u0001_visual_clip_47 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_142_20210323_081311_ssc4_u0001_visual_clip_47.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [3119835.844072, 850891.264038, 3120843.821065, 851908.448057]
    })
});
var lyr_id_140_20210325_075903_ssc2_u0001_visual_clip_48 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_140_20210325_075903_ssc2_u0001_visual_clip_48.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [565889.000000, 555324.500000, 566889.000000, 556321.500000]
    })
});
var lyr_id_139_20210319_083330_ssc1_u0001_visual_clip_49 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_139_20210319_083330_ssc1_u0001_visual_clip_49.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [694680.500000, 610365.000000, 695682.000000, 611364.500000]
    })
});
var lyr_id_138_20210319_083330_ssc1_u0001_visual_clip_50 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_138_20210319_083330_ssc1_u0001_visual_clip_50.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [693518.000000, 610052.000000, 694519.500000, 611051.500000]
    })
});
var lyr_id_137_20210322_105731_ssc6_u0001_visual_clip_51 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_137_20210322_105731_ssc6_u0001_visual_clip_51.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [561121.500000, 543038.500000, 562121.500000, 544036.000000]
    })
});
var lyr_id_136_20210322_105731_ssc6_u0001_visual_clip_52 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_136_20210322_105731_ssc6_u0001_visual_clip_52.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [561742.000000, 543559.000000, 562742.000000, 544556.000000]
    })
});
var lyr_id_135_20210322_105731_ssc6_u0001_visual_clip_53 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_135_20210322_105731_ssc6_u0001_visual_clip_53.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [561220.500000, 544022.500000, 562220.500000, 545020.000000]
    })
});
var lyr_id_134_20210322_105731_ssc6_u0001_visual_clip_54 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_134_20210322_105731_ssc6_u0001_visual_clip_54.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [561032.000000, 543901.000000, 562032.000000, 544898.000000]
    })
});
var lyr_id_132_20210322_105731_ssc6_u0001_visual_clip_55 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_132_20210322_105731_ssc6_u0001_visual_clip_55.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [560079.000000, 543347.500000, 561079.000000, 544344.500000]
    })
});
var lyr_id_131_20210322_105731_ssc6_u0001_visual_clip_56 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_131_20210322_105731_ssc6_u0001_visual_clip_56.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [558693.000000, 543313.000000, 559693.000000, 544310.500000]
    })
});
var lyr_id_130_20210322_105731_ssc6_u0001_visual_clip_57 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_130_20210322_105731_ssc6_u0001_visual_clip_57.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [559580.500000, 542882.500000, 560580.500000, 543880.000000]
    })
});
var lyr_id_129_20210322_105731_ssc6_u0001_visual_clip_58 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_129_20210322_105731_ssc6_u0001_visual_clip_58.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [559857.500000, 542706.000000, 560858.000000, 543703.500000]
    })
});
var lyr_id_127_20210322_105731_ssc6_u0001_visual_clip_59 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_127_20210322_105731_ssc6_u0001_visual_clip_59.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [559614.000000, 542518.000000, 560614.000000, 543515.000000]
    })
});
var lyr_id_126_20210320_044923_ssc17_u0001_visual_clip_60 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_126_20210320_044923_ssc17_u0001_visual_clip_60.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [560609.500000, 531431.500000, 561610.000000, 532428.500000]
    })
});
var lyr_id_125_20210329_074856_ssc4_u0001_visual_clip_61 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_125_20210329_074856_ssc4_u0001_visual_clip_61.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [561512.000000, 526093.000000, 562512.500000, 527090.000000]
    })
});
var lyr_id_124_20210404_111318_ssc7_u0001_visual_clip_62 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_124_20210404_111318_ssc7_u0001_visual_clip_62.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [435774.000000, 462930.500000, 436775.000000, 463927.500000]
    })
});
var lyr_id_123_20210404_111318_ssc7_u0001_visual_clip_63 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_123_20210404_111318_ssc7_u0001_visual_clip_63.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [436274.000000, 463571.000000, 437275.000000, 464568.000000]
    })
});
var lyr_id_122_20210329_074856_ssc4_u0001_visual_clip_64 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_122_20210329_074856_ssc4_u0001_visual_clip_64.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [561876.500000, 527873.000000, 562877.000000, 528870.000000]
    })
});
var lyr_id_121_20210329_074856_ssc4_u0001_visual_clip_65 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_121_20210329_074856_ssc4_u0001_visual_clip_65.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [562189.500000, 525297.500000, 563189.500000, 526294.500000]
    })
});
var lyr_id_120_20210329_074856_ssc4_u0001_visual_clip_66 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_120_20210329_074856_ssc4_u0001_visual_clip_66.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [560649.000000, 523936.500000, 561649.500000, 524933.500000]
    })
});
var lyr_id_115_20210325_105755_ssc7_u0001_visual_clip_67 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_115_20210325_105755_ssc7_u0001_visual_clip_67.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [435900.000000, 497165.000000, 436901.000000, 498162.000000]
    })
});
var lyr_id_114_20210325_105755_ssc7_u0001_visual_clip_68 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_114_20210325_105755_ssc7_u0001_visual_clip_68.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [436177.500000, 496888.500000, 437178.000000, 497885.500000]
    })
});
var lyr_id_109_20210325_105755_ssc7_u0001_visual_clip_69 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_109_20210325_105755_ssc7_u0001_visual_clip_69.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [432938.500000, 497963.500000, 433939.500000, 498960.500000]
    })
});
var lyr_id_107_20210413_080048_ssc3_u0001_visual_clip_70 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_107_20210413_080048_ssc3_u0001_visual_clip_70.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [435519.000000, 492434.000000, 436520.000000, 493431.500000]
    })
});
var lyr_id_103_20210320_080847_ssc3_u0001_visual_clip_71 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_103_20210320_080847_ssc3_u0001_visual_clip_71.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [427075.000000, 409600.500000, 428077.000000, 410597.500000]
    })
});
var lyr_id_102_20210323_075626_ssc3_u0001_visual_clip_72 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_102_20210323_075626_ssc3_u0001_visual_clip_72.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [433679.500000, 534320.500000, 434680.000000, 535317.500000]
    })
});
var lyr_id_100_20210410_105934_ssc8_u0001_visual_clip_73 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_100_20210410_105934_ssc8_u0001_visual_clip_73.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [432283.000000, 522383.000000, 433283.500000, 523380.000000]
    })
});
var lyr_id_98_20210410_105934_ssc8_u0001_visual_clip_74 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_98_20210410_105934_ssc8_u0001_visual_clip_74.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [432493.500000, 522471.000000, 433494.000000, 523468.500000]
    })
});
var lyr_id_93_20210331_075407_ssc3_u0001_visual_clip_75 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_93_20210331_075407_ssc3_u0001_visual_clip_75.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [430867.500000, 562666.500000, 431867.500000, 563664.000000]
    })
});
var lyr_id_91_20210410_075352_ssc2_u0001_visual_clip_76 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_91_20210410_075352_ssc2_u0001_visual_clip_76.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [430315.000000, 564170.500000, 431315.000000, 565168.000000]
    })
});
var lyr_id_90_20210410_075352_ssc2_u0001_visual_clip_77 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_90_20210410_075352_ssc2_u0001_visual_clip_77.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [430259.000000, 563993.500000, 431259.500000, 564991.000000]
    })
});
var lyr_id_85_20210321_110114_ssc15_u0001_visual_clip_78 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_85_20210321_110114_ssc15_u0001_visual_clip_78.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [213342.500000, 723476.000000, 214345.000000, 724478.500000]
    })
});
var lyr_id_84_20210325_111236_ssc8_u0001_visual_clip_79 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_84_20210325_111236_ssc8_u0001_visual_clip_79.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [216048.000000, 741654.000000, 217050.500000, 742656.500000]
    })
});
var lyr_id_83_20210325_111236_ssc8_u0001_visual_clip_80 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_83_20210325_111236_ssc8_u0001_visual_clip_80.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [216044.500000, 740946.000000, 217047.000000, 741948.500000]
    })
});
var lyr_id_82_20210321_111459_ssc11_u0001_visual_clip_81 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_82_20210321_111459_ssc11_u0001_visual_clip_81.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [216955.000000, 730927.000000, 217957.500000, 731929.500000]
    })
});
var lyr_id_81_20210319_083210_ssc1_u0001_visual_clip_82 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_81_20210319_083210_ssc1_u0001_visual_clip_82.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [467913.500000, 1231223.500000, 468899.000000, 1232221.000000]
    })
});
var lyr_id_80_20210317_110148_ssc7_u0001_visual_clip_83 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_80_20210317_110148_ssc7_u0001_visual_clip_83.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [487031.000000, 1321102.000000, 488013.000000, 1322099.500000]
    })
});
var lyr_id_79_20210317_075851_ssc2_u0001_visual_clip_84 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_79_20210317_075851_ssc2_u0001_visual_clip_84.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [480009.000000, 1298427.500000, 480991.500000, 1299425.000000]
    })
});
var lyr_id_78_20210325_075748_ssc2_u0001_visual_clip_85 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_78_20210325_075748_ssc2_u0001_visual_clip_85.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [487122.000000, 1118457.000000, 488109.500000, 1119454.000000]
    })
});
var lyr_id_77_20210317_075918_ssc2_u0001_visual_clip_86 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_77_20210317_075918_ssc2_u0001_visual_clip_86.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [419903.000000, 1109546.500000, 420893.000000, 1110545.500000]
    })
});
var lyr_id_75_20210318_053124_ssc19_u0001_visual_clip_87 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_75_20210318_053124_ssc19_u0001_visual_clip_87.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [418333.000000, 1153753.000000, 419322.000000, 1154752.000000]
    })
});
var lyr_id_74_20210318_111443_ssc10_u0001_visual_clip_88 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_74_20210318_111443_ssc10_u0001_visual_clip_88.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [414296.000000, 1154935.500000, 415285.000000, 1155934.500000]
    })
});
var lyr_id_73_20210317_111743_ssc8_u0001_visual_clip_89 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_73_20210317_111743_ssc8_u0001_visual_clip_89.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [406772.500000, 1158903.000000, 407761.500000, 1159902.500000]
    })
});
var lyr_id_71_20210320_113700_ssc10_u0001_visual_clip_90 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_71_20210320_113700_ssc10_u0001_visual_clip_90.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [2994316.250192, 1002092.078885, 2995320.104063, 1003108.138767]
    })
});
var lyr_id_70_20210320_113700_ssc10_u0001_visual_clip_91 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_70_20210320_113700_ssc10_u0001_visual_clip_91.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [2994476.544612, 999164.657294, 2995480.322556, 1000180.641327]
    })
});
var lyr_id_69_20210312_082610_ssc4_u0001_visual_clip_92 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_69_20210312_082610_ssc4_u0001_visual_clip_92.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [3080796.620633, 980510.835817, 3081803.472147, 981529.908047]
    })
});
var lyr_id_68_20210312_082610_ssc4_u0001_visual_clip_93 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_68_20210312_082610_ssc4_u0001_visual_clip_93.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [3080436.958505, 980873.663407, 3081444.316491, 981892.228482]
    })
});
var lyr_id_66_20210312_112143_ssc9_u0001_visual_clip_94 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_66_20210312_112143_ssc9_u0001_visual_clip_94.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [2989046.455944, 974423.082371, 2990050.268263, 975439.104905]
    })
});
var lyr_id_62_20210311_082357_ssc2_u0001_visual_clip_95 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_62_20210311_082357_ssc2_u0001_visual_clip_95.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [2985096.705989, 961326.168702, 2986100.802285, 962341.970025]
    })
});
var lyr_id_61_20210312_112143_ssc9_u0001_visual_clip_96 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_61_20210312_112143_ssc9_u0001_visual_clip_96.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [2985610.711781, 973073.378183, 2986615.078385, 974089.449344]
    })
});
var lyr_id_60_20210325_081845_ssc3_u0001_visual_clip_97 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_60_20210325_081845_ssc3_u0001_visual_clip_97.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [180178.500000, 781731.000000, 181181.500000, 782735.000000]
    })
});
var lyr_id_59_20210306_112208_ssc7_u0001_visual_clip_98 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_59_20210306_112208_ssc7_u0001_visual_clip_98.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [3338272.898858, 772166.175060, 3339288.603629, 773189.632295]
    })
});
var lyr_id_57_20210306_081039_ssc13_u0001_visual_clip_99 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_57_20210306_081039_ssc13_u0001_visual_clip_99.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [312629.500000, 877638.500000, 313627.500000, 878639.500000]
    })
});
var lyr_id_56_20210310_080322_ssc4_u0001_visual_clip_100 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_56_20210310_080322_ssc4_u0001_visual_clip_100.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [325775.500000, 854884.500000, 326773.500000, 855885.000000]
    })
});
var lyr_id_54_20210301_080258_ssc2_u0001_visual_clip_101 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_54_20210301_080258_ssc2_u0001_visual_clip_101.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [404882.000000, 396488.500000, 405884.000000, 397485.500000]
    })
});
var lyr_id_53_20210227_075934_ssc3_u0001_visual_clip_102 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_53_20210227_075934_ssc3_u0001_visual_clip_102.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [397475.500000, 394150.500000, 398477.500000, 395148.000000]
    })
});
var lyr_id_49_20210304_110048_ssc7_u0001_visual_clip_103 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_49_20210304_110048_ssc7_u0001_visual_clip_103.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [452932.500000, 487132.000000, 453933.000000, 488129.000000]
    })
});
var lyr_id_48_20210304_110048_ssc7_u0001_visual_clip_104 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_48_20210304_110048_ssc7_u0001_visual_clip_104.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [451316.000000, 487359.500000, 452316.500000, 488356.500000]
    })
});
var lyr_id_38_20210224_080553_ssc14_u0001_visual_clip_105 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_38_20210224_080553_ssc14_u0001_visual_clip_105.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [370625.500000, 608877.000000, 371626.000000, 609875.500000]
    })
});
var lyr_id_6_20210226_081412_ssc2_u0001_visual_clip_106 = new ol.layer.Image({
    opacity: 1,
    title: "",


    source: new ol.source.ImageStatic({
        url: "./layers/id_6_20210226_081412_ssc2_u0001_visual_clip_106.png",
        attributions: ' ',
        projection: 'EPSG:32636',
        alwaysInRange: true,
        imageExtent: [302351.000000, 673407.500000, 303352.500000, 674408.000000]
    })
});

var lyr_googlesatellite_107 = new ol.layer.Tile({
    'title': 'google satellite',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});
var format_south_sudan_sub_pop_108 = new ol.format.GeoJSON();
var features_south_sudan_sub_pop_108 = format_south_sudan_sub_pop_108.readFeatures(json_south_sudan_sub_pop_108,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636' });
var jsonSource_south_sudan_sub_pop_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_south_sudan_sub_pop_108.addFeatures(features_south_sudan_sub_pop_108);
var lyr_south_sudan_sub_pop_108 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_south_sudan_sub_pop_108,
    style: style_south_sudan_sub_pop_108,
    interactive: true,
    title: '<img src="styles/legend/south_sudan_sub_pop_108.png" /> Sub-population zones'
});
var format_Locationscaptured2021_109 = new ol.format.GeoJSON();
var features_Locationscaptured2021_109 = format_Locationscaptured2021_109.readFeatures(json_Locationscaptured2021_109,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636' });
var jsonSource_Locationscaptured2021_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locationscaptured2021_109.addFeatures(features_Locationscaptured2021_109);
var lyr_Locationscaptured2021_109 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Locationscaptured2021_109,
    style: style_Locationscaptured2021_109,
    interactive: true,
    title: '<img src="styles/legend/Locationscaptured2021_109.png" /> Locations captured 2021'
});

lyr_OpenStreetMap_0.setVisible(true); lyr_id_113_20210404_111959_ssc19_u0001_visual_clip_1.setVisible(true); lyr_id_111_20210404_111959_ssc19_u0001_visual_clip_2.setVisible(true); lyr_id_97_20210415_110643_ssc8_u0001_visual_clip_3.setVisible(true); lyr_id_106_20210415_071557_ssc17_u0001_visual_clip_4.setVisible(true); lyr_id_105_20210414_080346_ssc12_u0001_visual_clip_5.setVisible(true); lyr_id_104_20210414_080346_ssc12_u0001_visual_clip_6.setVisible(true); lyr_id_96_20210415_110643_ssc8_u0001_visual_clip_7.setVisible(true); lyr_id_95_20210415_110643_ssc8_u0001_visual_clip_8.setVisible(true); lyr_id_94_20210415_110643_ssc8_u0001_visual_clip_9.setVisible(true); lyr_id_92_20210415_080051_ssc13_u0001_visual_clip_10.setVisible(true); lyr_id_88_20210414_080346_ssc12_u0001_visual_clip_11.setVisible(true); lyr_id_119_20210324_075819_ssc12_u0001_visual_clip_12.setVisible(true); lyr_id_118_20210324_075819_ssc12_u0001_visual_clip_13.setVisible(true); lyr_id_117_20210324_075819_ssc12_u0001_visual_clip_14.setVisible(true); lyr_id_116_20210324_075819_ssc12_u0001_visual_clip_15.setVisible(true); lyr_id_58_20210316_084450_ssc1_u0001_visual_clip_16.setVisible(true); lyr_id_52_20210302_055304_ssc14_u0001_visual_clip_17.setVisible(true); lyr_id_51_20210305_075307_ssc4_u0001_visual_clip_18.setVisible(true); lyr_id_50_20210304_110048_ssc7_u0001_visual_clip_19.setVisible(true); lyr_id_46_20210304_110048_ssc7_u0001_visual_clip_20.setVisible(true); lyr_id_45_20210220_092951_ssc15_u0001_visual_clip_21.setVisible(true); lyr_id_44_20210310_110005_ssc9_u0001_visual_clip_22.setVisible(true); lyr_id_42_20210220_110943_ssc10_u0001_visual_clip_23.setVisible(true); lyr_id_40_20210221_091140_ssc14_u0001_visual_clip_24.setVisible(true); lyr_id_37_20210228_080741_ssc13_u0001_visual_clip_25.setVisible(true); lyr_id_24_20210216_081102_ssc3_u0001_visual_clip_26.setVisible(true); lyr_id_23_20210219_111321_ssc8_u0001_visual_clip_27.setVisible(true); lyr_id_22_20210227_131816_ssc18_u0001_visual_clip_28.setVisible(true); lyr_id_21_20210301_121819_ssc17_u0001_visual_clip_29.setVisible(true); lyr_id_14_20210226_111311_ssc6_u0001_visual_clip_30.setVisible(true); lyr_id_13_20210223_083350_ssc1_u0001_visual_clip_31.setVisible(true); lyr_id_7_20210223_111109_ssc11_u0001_visual_clip_32.setVisible(true); lyr_id_3_20210301_111346_ssc7_u0001_visual_clip_33.setVisible(true); lyr_id_65_20210311_082357_ssc2_u0001_visual_clip_34.setVisible(true); lyr_id_141_20210323_081311_ssc4_u0001_visual_clip_35.setVisible(true); lyr_id_133_20210322_105731_ssc6_u0001_visual_clip_36.setVisible(true); lyr_id_128_20210322_105731_ssc6_u0001_visual_clip_37.setVisible(true); lyr_id_110_20210325_105755_ssc7_u0001_visual_clip_38.setVisible(true); lyr_id_108_20210413_080048_ssc3_u0001_visual_clip_39.setVisible(true); lyr_id_99_20210410_105934_ssc8_u0001_visual_clip_40.setVisible(true); lyr_id_89_20210410_075352_ssc2_u0001_visual_clip_41.setVisible(true); lyr_id_76_20210321_080906_ssc12_u0001_visual_clip_42.setVisible(true); lyr_id_64_20210311_082357_ssc2_u0001_visual_clip_43.setVisible(true); lyr_id_47_20210304_110048_ssc7_u0001_visual_clip_44.setVisible(true); lyr_id_144_20210407_111224_ssc8_u0001_visual_clip_45.setVisible(true); lyr_id_143_20210407_080516_ssc2_u0001_visual_clip_46.setVisible(true); lyr_id_142_20210323_081311_ssc4_u0001_visual_clip_47.setVisible(true); lyr_id_140_20210325_075903_ssc2_u0001_visual_clip_48.setVisible(true); lyr_id_139_20210319_083330_ssc1_u0001_visual_clip_49.setVisible(true); lyr_id_138_20210319_083330_ssc1_u0001_visual_clip_50.setVisible(true); lyr_id_137_20210322_105731_ssc6_u0001_visual_clip_51.setVisible(true); lyr_id_136_20210322_105731_ssc6_u0001_visual_clip_52.setVisible(true); lyr_id_135_20210322_105731_ssc6_u0001_visual_clip_53.setVisible(true); lyr_id_134_20210322_105731_ssc6_u0001_visual_clip_54.setVisible(true); lyr_id_132_20210322_105731_ssc6_u0001_visual_clip_55.setVisible(true); lyr_id_131_20210322_105731_ssc6_u0001_visual_clip_56.setVisible(true); lyr_id_130_20210322_105731_ssc6_u0001_visual_clip_57.setVisible(true); lyr_id_129_20210322_105731_ssc6_u0001_visual_clip_58.setVisible(true); lyr_id_127_20210322_105731_ssc6_u0001_visual_clip_59.setVisible(true); lyr_id_126_20210320_044923_ssc17_u0001_visual_clip_60.setVisible(true); lyr_id_125_20210329_074856_ssc4_u0001_visual_clip_61.setVisible(true); lyr_id_124_20210404_111318_ssc7_u0001_visual_clip_62.setVisible(true); lyr_id_123_20210404_111318_ssc7_u0001_visual_clip_63.setVisible(true); lyr_id_122_20210329_074856_ssc4_u0001_visual_clip_64.setVisible(true); lyr_id_121_20210329_074856_ssc4_u0001_visual_clip_65.setVisible(true); lyr_id_120_20210329_074856_ssc4_u0001_visual_clip_66.setVisible(true); lyr_id_115_20210325_105755_ssc7_u0001_visual_clip_67.setVisible(true); lyr_id_114_20210325_105755_ssc7_u0001_visual_clip_68.setVisible(true); lyr_id_109_20210325_105755_ssc7_u0001_visual_clip_69.setVisible(true); lyr_id_107_20210413_080048_ssc3_u0001_visual_clip_70.setVisible(true); lyr_id_103_20210320_080847_ssc3_u0001_visual_clip_71.setVisible(true); lyr_id_102_20210323_075626_ssc3_u0001_visual_clip_72.setVisible(true); lyr_id_100_20210410_105934_ssc8_u0001_visual_clip_73.setVisible(true); lyr_id_98_20210410_105934_ssc8_u0001_visual_clip_74.setVisible(true); lyr_id_93_20210331_075407_ssc3_u0001_visual_clip_75.setVisible(true); lyr_id_91_20210410_075352_ssc2_u0001_visual_clip_76.setVisible(true); lyr_id_90_20210410_075352_ssc2_u0001_visual_clip_77.setVisible(true); lyr_id_85_20210321_110114_ssc15_u0001_visual_clip_78.setVisible(true); lyr_id_84_20210325_111236_ssc8_u0001_visual_clip_79.setVisible(true); lyr_id_83_20210325_111236_ssc8_u0001_visual_clip_80.setVisible(true); lyr_id_82_20210321_111459_ssc11_u0001_visual_clip_81.setVisible(true); lyr_id_81_20210319_083210_ssc1_u0001_visual_clip_82.setVisible(true); lyr_id_80_20210317_110148_ssc7_u0001_visual_clip_83.setVisible(true); lyr_id_79_20210317_075851_ssc2_u0001_visual_clip_84.setVisible(true); lyr_id_78_20210325_075748_ssc2_u0001_visual_clip_85.setVisible(true); lyr_id_77_20210317_075918_ssc2_u0001_visual_clip_86.setVisible(true); lyr_id_75_20210318_053124_ssc19_u0001_visual_clip_87.setVisible(true); lyr_id_74_20210318_111443_ssc10_u0001_visual_clip_88.setVisible(true); lyr_id_73_20210317_111743_ssc8_u0001_visual_clip_89.setVisible(true); lyr_id_71_20210320_113700_ssc10_u0001_visual_clip_90.setVisible(true); lyr_id_70_20210320_113700_ssc10_u0001_visual_clip_91.setVisible(true); lyr_id_69_20210312_082610_ssc4_u0001_visual_clip_92.setVisible(true); lyr_id_68_20210312_082610_ssc4_u0001_visual_clip_93.setVisible(true); lyr_id_66_20210312_112143_ssc9_u0001_visual_clip_94.setVisible(true); lyr_id_62_20210311_082357_ssc2_u0001_visual_clip_95.setVisible(true); lyr_id_61_20210312_112143_ssc9_u0001_visual_clip_96.setVisible(true); lyr_id_60_20210325_081845_ssc3_u0001_visual_clip_97.setVisible(true); lyr_id_59_20210306_112208_ssc7_u0001_visual_clip_98.setVisible(true); lyr_id_57_20210306_081039_ssc13_u0001_visual_clip_99.setVisible(true); lyr_id_56_20210310_080322_ssc4_u0001_visual_clip_100.setVisible(true); lyr_id_54_20210301_080258_ssc2_u0001_visual_clip_101.setVisible(true); lyr_id_53_20210227_075934_ssc3_u0001_visual_clip_102.setVisible(true); lyr_id_49_20210304_110048_ssc7_u0001_visual_clip_103.setVisible(true); lyr_id_48_20210304_110048_ssc7_u0001_visual_clip_104.setVisible(true); lyr_id_38_20210224_080553_ssc14_u0001_visual_clip_105.setVisible(true); lyr_id_6_20210226_081412_ssc2_u0001_visual_clip_106.setVisible(true); lyr_googlesatellite_107.setVisible(false); lyr_south_sudan_sub_pop_108.setVisible(true); lyr_Locationscaptured2021_109.setVisible(true);
var layersList = [lyr_OpenStreetMap_0, lyr_id_113_20210404_111959_ssc19_u0001_visual_clip_1, lyr_id_111_20210404_111959_ssc19_u0001_visual_clip_2, lyr_id_97_20210415_110643_ssc8_u0001_visual_clip_3, lyr_id_106_20210415_071557_ssc17_u0001_visual_clip_4, lyr_id_105_20210414_080346_ssc12_u0001_visual_clip_5, lyr_id_104_20210414_080346_ssc12_u0001_visual_clip_6, lyr_id_96_20210415_110643_ssc8_u0001_visual_clip_7, lyr_id_95_20210415_110643_ssc8_u0001_visual_clip_8, lyr_id_94_20210415_110643_ssc8_u0001_visual_clip_9, lyr_id_92_20210415_080051_ssc13_u0001_visual_clip_10, lyr_id_88_20210414_080346_ssc12_u0001_visual_clip_11, lyr_id_119_20210324_075819_ssc12_u0001_visual_clip_12, lyr_id_118_20210324_075819_ssc12_u0001_visual_clip_13, lyr_id_117_20210324_075819_ssc12_u0001_visual_clip_14, lyr_id_116_20210324_075819_ssc12_u0001_visual_clip_15, lyr_id_58_20210316_084450_ssc1_u0001_visual_clip_16, lyr_id_52_20210302_055304_ssc14_u0001_visual_clip_17, lyr_id_51_20210305_075307_ssc4_u0001_visual_clip_18, lyr_id_50_20210304_110048_ssc7_u0001_visual_clip_19, lyr_id_46_20210304_110048_ssc7_u0001_visual_clip_20, lyr_id_45_20210220_092951_ssc15_u0001_visual_clip_21, lyr_id_44_20210310_110005_ssc9_u0001_visual_clip_22, lyr_id_42_20210220_110943_ssc10_u0001_visual_clip_23, lyr_id_40_20210221_091140_ssc14_u0001_visual_clip_24, lyr_id_37_20210228_080741_ssc13_u0001_visual_clip_25, lyr_id_24_20210216_081102_ssc3_u0001_visual_clip_26, lyr_id_23_20210219_111321_ssc8_u0001_visual_clip_27, lyr_id_22_20210227_131816_ssc18_u0001_visual_clip_28, lyr_id_21_20210301_121819_ssc17_u0001_visual_clip_29, lyr_id_14_20210226_111311_ssc6_u0001_visual_clip_30, lyr_id_13_20210223_083350_ssc1_u0001_visual_clip_31, lyr_id_7_20210223_111109_ssc11_u0001_visual_clip_32, lyr_id_3_20210301_111346_ssc7_u0001_visual_clip_33, lyr_id_65_20210311_082357_ssc2_u0001_visual_clip_34, lyr_id_141_20210323_081311_ssc4_u0001_visual_clip_35, lyr_id_133_20210322_105731_ssc6_u0001_visual_clip_36, lyr_id_128_20210322_105731_ssc6_u0001_visual_clip_37, lyr_id_110_20210325_105755_ssc7_u0001_visual_clip_38, lyr_id_108_20210413_080048_ssc3_u0001_visual_clip_39, lyr_id_99_20210410_105934_ssc8_u0001_visual_clip_40, lyr_id_89_20210410_075352_ssc2_u0001_visual_clip_41, lyr_id_76_20210321_080906_ssc12_u0001_visual_clip_42, lyr_id_64_20210311_082357_ssc2_u0001_visual_clip_43, lyr_id_47_20210304_110048_ssc7_u0001_visual_clip_44, lyr_id_144_20210407_111224_ssc8_u0001_visual_clip_45, lyr_id_143_20210407_080516_ssc2_u0001_visual_clip_46, lyr_id_142_20210323_081311_ssc4_u0001_visual_clip_47, lyr_id_140_20210325_075903_ssc2_u0001_visual_clip_48, lyr_id_139_20210319_083330_ssc1_u0001_visual_clip_49, lyr_id_138_20210319_083330_ssc1_u0001_visual_clip_50, lyr_id_137_20210322_105731_ssc6_u0001_visual_clip_51, lyr_id_136_20210322_105731_ssc6_u0001_visual_clip_52, lyr_id_135_20210322_105731_ssc6_u0001_visual_clip_53, lyr_id_134_20210322_105731_ssc6_u0001_visual_clip_54, lyr_id_132_20210322_105731_ssc6_u0001_visual_clip_55, lyr_id_131_20210322_105731_ssc6_u0001_visual_clip_56, lyr_id_130_20210322_105731_ssc6_u0001_visual_clip_57, lyr_id_129_20210322_105731_ssc6_u0001_visual_clip_58, lyr_id_127_20210322_105731_ssc6_u0001_visual_clip_59, lyr_id_126_20210320_044923_ssc17_u0001_visual_clip_60, lyr_id_125_20210329_074856_ssc4_u0001_visual_clip_61, lyr_id_124_20210404_111318_ssc7_u0001_visual_clip_62, lyr_id_123_20210404_111318_ssc7_u0001_visual_clip_63, lyr_id_122_20210329_074856_ssc4_u0001_visual_clip_64, lyr_id_121_20210329_074856_ssc4_u0001_visual_clip_65, lyr_id_120_20210329_074856_ssc4_u0001_visual_clip_66, lyr_id_115_20210325_105755_ssc7_u0001_visual_clip_67, lyr_id_114_20210325_105755_ssc7_u0001_visual_clip_68, lyr_id_109_20210325_105755_ssc7_u0001_visual_clip_69, lyr_id_107_20210413_080048_ssc3_u0001_visual_clip_70, lyr_id_103_20210320_080847_ssc3_u0001_visual_clip_71, lyr_id_102_20210323_075626_ssc3_u0001_visual_clip_72, lyr_id_100_20210410_105934_ssc8_u0001_visual_clip_73, lyr_id_98_20210410_105934_ssc8_u0001_visual_clip_74, lyr_id_93_20210331_075407_ssc3_u0001_visual_clip_75, lyr_id_91_20210410_075352_ssc2_u0001_visual_clip_76, lyr_id_90_20210410_075352_ssc2_u0001_visual_clip_77, lyr_id_85_20210321_110114_ssc15_u0001_visual_clip_78, lyr_id_84_20210325_111236_ssc8_u0001_visual_clip_79, lyr_id_83_20210325_111236_ssc8_u0001_visual_clip_80, lyr_id_82_20210321_111459_ssc11_u0001_visual_clip_81, lyr_id_81_20210319_083210_ssc1_u0001_visual_clip_82, lyr_id_80_20210317_110148_ssc7_u0001_visual_clip_83, lyr_id_79_20210317_075851_ssc2_u0001_visual_clip_84, lyr_id_78_20210325_075748_ssc2_u0001_visual_clip_85, lyr_id_77_20210317_075918_ssc2_u0001_visual_clip_86, lyr_id_75_20210318_053124_ssc19_u0001_visual_clip_87, lyr_id_74_20210318_111443_ssc10_u0001_visual_clip_88, lyr_id_73_20210317_111743_ssc8_u0001_visual_clip_89, lyr_id_71_20210320_113700_ssc10_u0001_visual_clip_90, lyr_id_70_20210320_113700_ssc10_u0001_visual_clip_91, lyr_id_69_20210312_082610_ssc4_u0001_visual_clip_92, lyr_id_68_20210312_082610_ssc4_u0001_visual_clip_93, lyr_id_66_20210312_112143_ssc9_u0001_visual_clip_94, lyr_id_62_20210311_082357_ssc2_u0001_visual_clip_95, lyr_id_61_20210312_112143_ssc9_u0001_visual_clip_96, lyr_id_60_20210325_081845_ssc3_u0001_visual_clip_97, lyr_id_59_20210306_112208_ssc7_u0001_visual_clip_98, lyr_id_57_20210306_081039_ssc13_u0001_visual_clip_99, lyr_id_56_20210310_080322_ssc4_u0001_visual_clip_100, lyr_id_54_20210301_080258_ssc2_u0001_visual_clip_101, lyr_id_53_20210227_075934_ssc3_u0001_visual_clip_102, lyr_id_49_20210304_110048_ssc7_u0001_visual_clip_103, lyr_id_48_20210304_110048_ssc7_u0001_visual_clip_104, lyr_id_38_20210224_080553_ssc14_u0001_visual_clip_105, lyr_id_6_20210226_081412_ssc2_u0001_visual_clip_106, lyr_googlesatellite_107, lyr_south_sudan_sub_pop_108, lyr_Locationscaptured2021_109];
lyr_south_sudan_sub_pop_108.set('fieldAliases', { 'ADM1_EN': 'ADM1_EN', 'id': 'id', 'subpop_id': 'sub-population zone', });
lyr_Locationscaptured2021_109.set('fieldAliases', { 'record_number': 'camp id', 'y': 'y', 'x': 'x', 'planet_id': 'image id', 'quality': 'quality', 'comment': 'comment', 'received_date': 'image capture date', });
lyr_south_sudan_sub_pop_108.set('fieldImages', { 'ADM1_EN': 'Hidden', 'id': 'Hidden', 'subpop_id': 'TextEdit', });
lyr_Locationscaptured2021_109.set('fieldImages', { 'record_number': 'Range', 'y': 'Hidden', 'x': 'Hidden', 'planet_id': 'TextEdit', 'quality': 'TextEdit', 'comment': 'TextEdit', 'received_date': 'DateTime', });
lyr_south_sudan_sub_pop_108.set('fieldLabels', { 'subpop_id': 'header label', });
lyr_Locationscaptured2021_109.set('fieldLabels', { 'record_number': 'header label', 'planet_id': 'inline label', 'quality': 'inline label', 'comment': 'inline label', 'received_date': 'inline label', });
lyr_Locationscaptured2021_109.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});