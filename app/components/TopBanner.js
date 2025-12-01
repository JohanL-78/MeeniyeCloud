'use client';

import { Truck } from 'lucide-react';

export default function TopBanner() {
  return (
    <div className="bg-[#A0785A] text-white py-2 px-4 text-center text-sm font-medium fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-center gap-2">
        <Truck className="w-4 h-4" />
        <span>Livraison en France hexagonale, DOM-TOM et Suisse</span>
      </div>
    </div>
  );
}
