import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          DevEvents
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/events" 
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            View Events
          </Link>
          <Link 
            href="/post-event" 
            className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Create Event
          </Link>
        </div>
      </div>
    </nav>
  );
}
