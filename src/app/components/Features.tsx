import React from 'react';
import {
  FiShoppingBag,
  FiDollarSign,
  FiHeadphones,
  FiLock,
} from 'react-icons/fi';

type Props = {};

const featuresList = [
  {
    title: 'Free Shipping',
    subtitle: 'On all orders above $200',
    icon: <FiShoppingBag size={24} />,
  },
  {
    title: 'Money Back Guarantee',
    subtitle: '45 days for exchange',
    icon: <FiDollarSign size={24} />,
  },
  {
    title: 'Online Support',
    subtitle: '24x7 Customer Care',
    icon: <FiHeadphones size={24} />,
  },
  {
    title: 'Secure Payment',
    subtitle: 'Secure Payment',
    icon: <FiLock size={24} />,
  },
];

export default function Features({}: Props) {
  return (
    <div className="py-12 border-t border-b border-slate-200">
      <div className="flex justify-around">
        {featuresList.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-4">{feature.icon}</div>
            <div>
              <div className="text-xl font-light">{feature.title}</div>
              <div className="text-sm font-light text-slate-500">
                {feature.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
