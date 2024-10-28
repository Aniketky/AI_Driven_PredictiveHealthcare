import React from 'react';
import { Brain, Activity, Users, LineChart, Shield, Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import StatsPanel from './components/StatsPanel';
import Footer from './components/Footer';

function App() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-indigo-600" />,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning models for predictive health analytics and personalized interventions"
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Secure Blockchain",
      description: "Hybrid blockchain architecture ensuring data privacy with zero-knowledge proofs"
    },
    {
      icon: <Activity className="w-8 h-8 text-indigo-600" />,
      title: "Real-time Monitoring",
      description: "Continuous health tracking through IoT devices and environmental sensors"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Community Engagement",
      description: "Social features and gamification to encourage active participation"
    },
    {
      icon: <LineChart className="w-8 h-8 text-indigo-600" />,
      title: "Predictive Resources",
      description: "AI-driven forecasting for optimal healthcare resource allocation"
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "Global Impact",
      description: "Scalable solution addressing health disparities worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Transforming Healthcare Through Technology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <StatsPanel />
      <Footer />
    </div>
  );
}

export default App;