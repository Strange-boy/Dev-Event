'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const ThreeBackground = dynamic(() => import('./ThreeBackground'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 pt-32 pb-20 lg:pt-48 lg:pb-32">
      <ThreeBackground />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm text-gray-300 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          Over 500+ events added this week
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Never Miss a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Developer Event
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          The ultimate hub for hackathons, conferences, and tech meetups. 
          Curated for developers, by developers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/events" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            Browse Events
          </Link>
          <Link 
            href="/post-event" 
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg font-medium transition-all hover:scale-105"
          >
            Post an Event
          </Link>
        </div>
      </div>
    </section>
  );
}
