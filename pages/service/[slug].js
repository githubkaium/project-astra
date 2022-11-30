/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import serviceData from '../../utils/service_data';

export default function SingleService() {
  const { query } = useRouter();
  const { slug } = query;
  const item = serviceData.data.find((x) => x.slug === slug);
  if (!item) {
    return <div>No Service available</div>;
  }
  return (
    <Layout title={item.title}>
      <div className="flex justify-around">
        <div>
          <img
            src={item.image}
            alt="infoimg"
            className="rounded shadow max-h-80"
          />
        </div>
        <div>
          <h1 className="font-bold text-lg text-center py-1">{item.title}</h1>
          <div>
            {serviceData.data.map((desc) => (
              <div desc={desc} key={desc.slug}>
                {desc.title == item.title &&
                  desc.description.map((list) => (
                    <li className="py-1" list={list} key={list[0]}>
                      {list}
                    </li>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
