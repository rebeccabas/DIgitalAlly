import React from 'react';
import { MapPin } from 'lucide-react';

export default function GlobalMap() {
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
                    <div className="relative h-[600px] bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="h-12 w-12 text-purple-600 mx-auto" />
                            <p className="mt-4 text-gray-600">Interactive map visualization coming soon</p>
                            <p className="text-sm text-gray-500">Powered by real-time data analytics</p>
                        </div>
                    </div>

                    <div className="bg-white px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-semibold text-gray-900">Active Cases</h3>
                                <p className="text-2xl font-bold text-purple-600">1,234</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-semibold text-gray-900">Resolved</h3>
                                <p className="text-2xl font-bold text-green-600">789</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-semibold text-gray-900">Support Networks</h3>
                                <p className="text-2xl font-bold text-blue-600">456</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}