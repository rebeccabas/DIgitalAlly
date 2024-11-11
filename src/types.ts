export interface Incident {
    id: string;
    latitude: number;
    longitude: number;
    timestamp: string;
    description: string;
    category: string;
}

export interface Cluster {
    center: [number, number];
    points: Incident[];
}