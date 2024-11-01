import { Incident } from '../types';
export const mockIncidents: Incident[] = [
  {
    id: '1',
    latitude: 27.7172,
    longitude: 85.3240,
    timestamp: new Date().toISOString(),
    severity: 4,
    status: 'active',
    description: 'Workplace discrimination reported in Kathmandu',
    category: 'Discrimination'
  },
  {
    id: '2',
    latitude: 28.2380,
    longitude: 83.9956,
    timestamp: new Date().toISOString(),
    severity: 3,
    status: 'pending',
    description: 'Harassment case filed in Pokhara',
    category: 'Harassment'
  },
  {
    id: '3',
    latitude: 26.8525,
    longitude: 87.2868,
    timestamp: new Date().toISOString(),
    severity: 5,
    status: 'active',
    description: 'Domestic violence report in Biratnagar',
    category: 'Violence'
  },
  {
    id: '4',
    latitude: 27.4712,
    longitude: 84.4121,
    timestamp: new Date().toISOString(),
    severity: 2,
    status: 'resolved',
    description: 'Bullying incident in Chitwan',
    category: 'Harassment'
  },
  {
    id: '5',
    latitude: 28.1667,
    longitude: 84.0333,
    timestamp: new Date().toISOString(),
    severity: 4,
    status: 'pending',
    description: 'Workplace sexual harassment complaint in Baglung',
    category: 'Harassment'
  },
  {
    id: '6',
    latitude: 26.4525,
    longitude: 87.2736,
    timestamp: new Date().toISOString(),
    severity: 5,
    status: 'active',
    description: 'Severe physical assault in Damak',
    category: 'Violence'
  },
  {
    id: '7',
    latitude: 27.6767,
    longitude: 85.3475,
    timestamp: new Date().toISOString(),
    severity: 3,
    status: 'resolved',
    description: 'Racial discrimination in Lalitpur workplace',
    category: 'Discrimination'
  },
  {
    id: '8',
    latitude: 28.2354,
    longitude: 83.9910,
    timestamp: new Date().toISOString(),
    severity: 1,
    status: 'resolved',
    description: 'Minor verbal harassment in Pokhara suburb',
    category: 'Harassment'
  },
  {
    id: '9',
    latitude: 26.4525,
    longitude: 87.2736,
    timestamp: new Date().toISOString(),
    severity: 4,
    status: 'active',
    description: 'Gender-based workplace discrimination in Damak',
    category: 'Discrimination'
  },
  {
    id: '10',
    latitude: 27.7172,
    longitude: 85.3240,
    timestamp: new Date().toISOString(),
    severity: 2,
    status: 'pending',
    description: 'Online cyberbullying report in Kathmandu',
    category: 'Harassment'
  },
  {
    id: '11',
    latitude: 28.1094,
    longitude: 84.3069,
    timestamp: new Date().toISOString(),
    severity: 5,
    status: 'active',
    description: 'Severe child abuse report in Lamjung',
    category: 'Violence'
  },
  {
    id: '12',
    latitude: 26.4936,
    longitude: 87.2713,
    timestamp: new Date().toISOString(),
    severity: 3,
    status: 'pending',
    description: 'Ethnic discrimination incident in Jhapa',
    category: 'Discrimination'
  },
  {
    id: '13',
    latitude: 27.4712,
    longitude: 84.4121,
    timestamp: new Date().toISOString(),
    severity: 4,
    status: 'active',
    description: 'Repeated workplace harassment case in Chitwan',
    category: 'Harassment'
  },
  {
    id: '14',
    latitude: 28.2380,
    longitude: 83.9956,
    timestamp: new Date().toISOString(),
    severity: 2,
    status: 'resolved',
    description: 'Minor physical altercation in Pokhara',
    category: 'Violence'
  },
  {
    id: '15',
    latitude: 27.6767,
    longitude: 85.3475,
    timestamp: new Date().toISOString(),
    severity: 1,
    status: 'resolved',
    description: 'Subtle workplace discrimination',
    category: 'Discrimination'
  }
];