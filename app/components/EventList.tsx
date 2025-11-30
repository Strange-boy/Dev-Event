import Link from 'next/link';
import { MapPinIcon, CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const events = [
  {
    id: 1,
    title: 'React Summit 2025',
    date: 'Nov 15, 2025',
    location: 'San Francisco, CA',
    category: 'Conference',
    image: '/react-summit.png',
    price: '$299',
  },
  {
    id: 2,
    title: 'AI & Machine Learning Expo',
    date: 'Dec 02, 2025',
    location: 'London, UK',
    category: 'Expo',
    image: '/ai-expo.png',
    price: 'Free',
  },
  {
    id: 3,
    title: 'Global Hackathon Series',
    date: 'Jan 10, 2026',
    location: 'Online',
    category: 'Hackathon',
    image: '/hackathon-v2.png',
    price: '$50',
  },
];

export default function EventList() {
  return (
    <section className="py-24 bg-gray-950 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Events</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Discover the most anticipated developer gatherings, from local meetups to global conferences.
            </p>
          </div>
          <Link 
            href="/events" 
            className="group flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            View all events 
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group relative flex flex-col bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
              
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-80"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-blue-600/90 backdrop-blur-md rounded-lg shadow-lg">
                    {event.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-20">
                   <span className="px-3 py-1 text-xs font-bold text-gray-900 bg-white/90 backdrop-blur-md rounded-lg shadow-lg">
                    {event.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-3">
                  <CalendarIcon className="w-4 h-4" />
                  {event.date}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                  <MapPinIcon className="w-4 h-4" />
                  {event.location}
                </div>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-xs text-gray-500">
                        {/* Avatar placeholder */}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-xs text-gray-400 font-medium pl-1">
                      +42
                    </div>
                  </div>
                  
                  <button className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1">
                    Register <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
