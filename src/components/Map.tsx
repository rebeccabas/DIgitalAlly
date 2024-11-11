import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import * as turf from '@turf/turf';
import 'leaflet/dist/leaflet.css';
import { Incident, Cluster } from '../types';

interface MapViewProps {
    incidents: Incident[];
}

const MapView: React.FC<MapViewProps> = ({ incidents }) => {
    const [clusters, setClusters] = useState<Cluster[]>([]);

    useEffect(() => {
        if (!incidents || incidents.length === 0) {
            setClusters([]);
            return;
        }

        try {
            // Convert incidents to GeoJSON points
            const points = turf.featureCollection(
                incidents.map(incident =>
                    turf.point([incident.longitude, incident.latitude], { incident })
                )
            );

            // Perform clustering
            const clustered = turf.clustersKmeans(points, {
                numberOfClusters: Math.min(6, incidents.length),
                mutate: true
            });

            // Group points by cluster
            const clusterGroups = new Map<number, Incident[]>();
            clustered.features.forEach(feature => {
                const cluster = feature.properties?.cluster;
                const incident = feature.properties?.incident;
                if (typeof cluster === 'number' && incident) {
                    if (!clusterGroups.has(cluster)) {
                        clusterGroups.set(cluster, []);
                    }
                    clusterGroups.get(cluster)?.push(incident);
                }
            });

            // Calculate cluster centers and create cluster objects
            const newClusters: Cluster[] = Array.from(clusterGroups.entries()).map(([_, points]) => {
                const center = turf.center(
                    turf.featureCollection(
                        points.map(p => turf.point([p.longitude, p.latitude]))
                    )
                );
                return {
                    center: [
                        center.geometry.coordinates[1],
                        center.geometry.coordinates[0]
                    ] as [number, number],
                    points
                };
            });

            setClusters(newClusters);
        } catch (error) {
            console.error('Error clustering incidents:', error);
            setClusters([]);
        }
    }, [incidents]);

    return (
        <MapContainer
            center={[27.7172, 85.3240]}
            zoom={8}
            className="w-full h-[600px] rounded-lg shadow-lg"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {clusters.map((cluster, index) => (
                <CircleMarker
                    key={index}
                    center={cluster.center}
                    radius={Math.max(15, Math.min(30, cluster.points.length * 5))}
                    fillColor="#ef4444"
                    color="#b91c1c"
                    weight={2}
                    opacity={0.8}
                    fillOpacity={0.6}
                >
                    <Popup>
                        <div className="p-2">
                            <h3 className="font-bold text-lg mb-2">Cluster {index + 1}</h3>
                            <p className="text-sm mb-1">Incidents: {cluster.points.length}</p>
                            <ul className="text-sm max-h-40 overflow-y-auto">
                                {cluster.points.map((incident, i) => (
                                    <li key={i} className="mb-1 border-b pb-1">
                                        <span className="font-semibold">{incident.category}</span>
                                        <br />
                                        {incident.anonymous ? (
                                            <span className="text-xs text-gray-600 italic">Anonymous report</span>
                                        ) : (
                                            <span className="text-xs text-gray-600">{incident.description}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Popup>
                </CircleMarker>
            ))}
        </MapContainer>
    );
};

export default MapView;