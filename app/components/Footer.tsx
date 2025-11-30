import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              DevEvents
            </Link>
            <p className="text-gray-400 text-sm">
              The premier platform for discovering and hosting developer events worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/events" className="hover:text-blue-400">Browse Events</Link></li>
              <li><Link href="/post" className="hover:text-blue-400">Post Event</Link></li>
              <li><Link href="/communities" className="hover:text-blue-400">Communities</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-blue-400">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DevEvents Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social icons placeholders */}
            <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
