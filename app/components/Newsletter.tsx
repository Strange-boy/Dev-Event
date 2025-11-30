export default function Newsletter() {
  return (
    <section className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl p-8 md:p-16 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay in the loop
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get the latest developer events, hackathons, and conferences delivered straight to your inbox weekly.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-5 py-4 bg-gray-950/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-600/20"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              We care about your data in our <a href="#" className="underline hover:text-gray-300">privacy policy</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
