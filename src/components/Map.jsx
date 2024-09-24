import './Map.css'
import 'mapbox-gl/dist/mapbox-gl.css';

import {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';

import { Star } from "@phosphor-icons/react";

mapboxgl.accessToken = 'pk.eyJ1IjoibWFuZ29tb3Vzc2UiLCJhIjoiY2x6bHRzZHFsMDZmeDJxcjRieXdvajV2cyJ9.UJwKZl7o748yJ8JFzC56uA';

const studyMarkers = [
    [103.84474903245534, 1.280365453214223],
    [-21.93420175870227, 64.14571514215304],
    [11.577470952794744, 48.14750903485899],
    [9.73485597838009, 47.415344848832966]
];

function Map() {
    const [mapStyle, setMapStyle] = useState('mapbox://styles/mangomousse/clzu2tw9e00ho01qo04ac0wtx');
    let [map, setMap] = useState(null);
    const markersRef = useRef([]);  // To store the created markers

    const initializeMarkers = () => {
        if (markersRef.current.length === 0 && map) {
            studyMarkers.forEach((latLong) =>  {
                const el = document.createElement('div');
                el.className = 'marker';
                const marker = new mapboxgl.Marker({ element: el, offset: [0, -15] })
                    .setLngLat(latLong);
                markersRef.current.push(marker);
            });
        }
        updateMarkers();
    };

    const updateMarkers = () => {
        if (map) {
            map.setStyle(mapStyle);
            if (mapStyle.includes('clzu2tw9e00ho01qo04ac0wtx')) {
                markersRef.current.forEach(marker => marker.addTo(map));
            } else {
                markersRef.current.forEach(marker => marker.remove());
            }
        }
    }

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
            map.on('load', initializeMarkers);
        }
    }, [map]);

    useEffect(() => {
        updateMarkers();
    }, [mapStyle]);

    return (
        <div className="map whiteShadowFilter">
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