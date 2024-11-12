// import React from 'react';
// import { MapPin } from 'lucide-react';
// import MapView from './Map';
// import { mockIncidents } from '../data/mockData';

// export default function GlobalMap() {
//     return (
//         <section id="map" className="py-16 bg-gray-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//                         Global Incident Map
//                     </h2>
//                     <p className="mt-4 text-lg text-gray-500">
//                         Track and monitor women's rights violations worldwide
//                     </p>
//                 </div>

//                 <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
//                     <div className="relative h-[600px]">
//                         {/* Render the MapView component */}
//                         <MapView incidents={mockIncidents} />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import MapView from './Map';
import { fetchIncidents } from '../components/firebaseService';
import { Incident } from '../types';


export default function GlobalMap() {


    const [incidents, setIncidents] = useState<Incident[]>([]);

    useEffect(() => {
        const loadIncidents = async () => {
            const data = await fetchIncidents();
            setIncidents(data);
        };
        loadIncidents();
    }, []);


    return (
        <section id="map" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Global Incident Map
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Track and monitor women's rights violations worldwide
                    </p>
                </div>

                <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-[600px]">
                        <MapView incidents={incidents} />
                    </div>
                </div>
            </div>
        </section>
    );
}