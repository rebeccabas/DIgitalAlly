export interface Incident {
    id: string;
    latitude: number;
    longitude: number;
    timestamp: string;
    severity: number;
    status: 'active' | 'resolved' | 'pending';
    description: string;
    category: string;
}

export interface Cluster {
    center: [number, number];
    points: Incident[];
}