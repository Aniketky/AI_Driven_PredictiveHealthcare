import React from 'react';

export default function StatsPanel() {
  const stats = [
    { label: 'Active Users', value: '100K+' },
    { label: 'Healthcare Providers', value: '1,000+' },
    { label: 'Communities Served', value: '500+' },
    { label: 'Success Rate', value: '94%' }
  ];

  return (
    <div className="bg-indigo-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-indigo-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}