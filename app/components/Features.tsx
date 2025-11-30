'use client';

import { CalendarDaysIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Curated Lists',
    description: 'We manually verify every event to ensure high quality and relevance for developers.',
    icon: SparklesIcon,
  },
  {
    name: 'Calendar Sync',
    description: 'One-click integration with Google Calendar and Outlook so you never miss a date.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Community Driven',
    description: 'Join thousands of developers sharing insights, photos, and networking opportunities.',
    icon: UserGroupIcon,
  },
];

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <motion.div 
      className="relative p-8 rounded-2xl bg-gray-800/50 overflow-hidden group border border-gray-700/50"
      whileHover="hover"
      initial="initial"
    >
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Border Trace Effect */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-visible">
        <motion.rect
          width="100%"
          height="100%"
          rx="16"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeOpacity="0.5"
          variants={{
            initial: { pathLength: 0, opacity: 0 },
            hover: { pathLength: 1, opacity: 1 }
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative z-10">
        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
          <feature.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{feature.name}</h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why use our platform?</h2>
          <p className="text-gray-400">
            We build tools that help you stay connected with the tech community without the noise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.name} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
