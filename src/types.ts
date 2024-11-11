export interface Incident {
    latitude: number;
    longitude: number;
    timestamp: string;
    description: string;
    category: string;
    anonymous: boolean;
}

export interface Cluster {
    center: [number, number];
    points: Incident[];
}