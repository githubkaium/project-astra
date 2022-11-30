import React from 'react';
import serviceData from '../utils/service_data';
import ServiceCard from './ServiceCard';

export default function Service() {
  return (
    <div className="my-4">
      <div>
        <h1 className="font-bold text-lg text-center">Service we provide</h1>
      </div>
      <div className="my-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.data.map((item) => (
          <ServiceCard item={item} key={item.slug}></ServiceCard>
        ))}
      </div>
    </div>
  );
}
