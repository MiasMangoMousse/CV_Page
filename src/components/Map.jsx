import './Map.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import MapPin from '../assets/map-pin.svg';

import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import { Star } from "@phosphor-icons/react";

mapboxgl.accessToken = 'pk.eyJ1IjoibWFuZ29tb3Vzc2UiLCJhIjoiY2x6bHRzZHFsMDZmeDJxcjRieXdvajV2cyJ9.UJwKZl7o748yJ8JFzC56uA';

const studyMarkers = [
    new mapboxgl.Marker({ element: createCustomMarker(MapPin), offset: [0, -15] }).setLngLat([103.84474903245534, 1.280365453214223]),
    new mapboxgl.Marker({ element: createCustomMarker(MapPin), offset: [0, -15] }).setLngLat([-21.93420175870227, 64.14571514215304]),
    new mapboxgl.Marker({ element: createCustomMarker(MapPin), offset: [0, -15] }).setLngLat([11.577470952794744, 48.14750903485899]),
    new mapboxgl.Marker({ element: createCustomMarker(MapPin), offset: [0, -15]}).setLngLat([9.73485597838009, 47.415344848832966])
];

function createCustomMarker(icon) {
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.style.backgroundImage = `url(${icon})`;
    markerElement.style.width = '30px';
    markerElement.style.height = '30px';
    return markerElement;
}

function Map() {
    const [mapStyle, setMapStyle] = useState('mapbox://styles/mangomousse/clzu2tw9e00ho01qo04ac0wtx');
    let [map, setMap] = useState(null);

    useEffect(() => {
        const mapContainer = document.getElementById('mapContainer');
        if (mapContainer && !map) {
            const mapInstance = new mapboxgl.Map({
                container: mapContainer,
                style: mapStyle,
                scrollZoom: false,
                center: [61.5, 31.5],
                zoom: 1.3,
                projection: 'globe',
            });

            mapInstance.addControl(new mapboxgl.NavigationControl());
            setMap(mapInstance);
            return () => mapInstance.remove();
        }
    }, []);

    useEffect(() => {
        if (map) {
            map.setStyle(mapStyle);
            if(mapStyle.includes('clzu2tw9e00ho01qo04ac0wtx')){
                studyMarkers.forEach((marker) => marker.addTo(map));
                studyMarkers.forEach((marker) => marker.addTo(map));
            } else {
                studyMarkers.forEach((marker) => marker.remove());
            }
        }
    }, [map, mapStyle]);

    return (
        <div className="map whiteShadow">
            <div id="mapContainer" />
            <div className="mapButtons">
                <button className="retroShadowButton"
                        onClick={() => setMapStyle('mapbox://styles/mangomousse/clzu2tw9e00ho01qo04ac0wtx')}>
                    <Star className="mapButtonIcon" weight={mapStyle.includes("clzu2tw9e00ho01qo04ac0wtx") ? "fill" : "regular"} color={mapStyle.includes("clzu2tw9e00ho01qo04ac0wtx") ? "hotpink" : "deeppink"} alt={"Countries I studied in"} />
                    Countries I studied in
                </button>
                <button className="retroShadowButton"
                        onClick={() => setMapStyle('mapbox://styles/mangomousse/clzo7j1lm007j01pb87j0596m')}>
                    <Star className="mapButtonIcon" weight={mapStyle.includes("clzo7j1lm007j01pb87j0596m") ? "fill" : "regular"} color={mapStyle.includes("clzo7j1lm007j01pb87j0596m") ? "lightgreen" : "seagreen"} alt={"Countries I traveled to"} />
                    Countries I traveled to
                </button>
            </div>
        </div>
    );
}

export default Map;