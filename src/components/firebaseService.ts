import { collection, getDocs } from 'firebase/firestore';
import { Incident } from '../types';
import { firestore } from '../components/firebaseConfig';



export async function fetchIncidents(): Promise<Incident[]> {
    const incidentCollection = collection(firestore, 'incidents1');
    const snapshot = await getDocs(incidentCollection);
    return snapshot.docs.map(doc => ({
        latitude: doc.data().location.latitude,
        longitude: doc.data().location.longitude,
        timestamp: doc.data().timestamp,
        description: doc.data().description,
        category: doc.data().type,
        anonymous: doc.data().anonymous
    }));
}