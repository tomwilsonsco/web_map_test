Published using QGIS2Web add-in for QGIS
1. Create QGIS project with symbology, labels, scale-dependencies as wish. In this case rasters have scale dependencies.
2. Open qgis2web publisher (QGIS menu bar > Web > qgis2web > Create web map) 
3. Use the OpenLayers option
4. Under Appearance uncheck "Match project CRS" (otherwise renders really slowly with basemap).
5. Export to local drive.
6. Edit layers > layers.js removing title text leaving title: "" - for each layer do not wish to show in contents.
7. Upload all folders to github repo and publish with github pages.
