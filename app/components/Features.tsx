import { CalendarDaysIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';

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
            <div key={feature.name} className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.name}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
