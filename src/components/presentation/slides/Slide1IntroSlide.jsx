import React from 'react';
import { Users, Building2, Briefcase, BarChart3 } from 'lucide-react';

const Slide1IntroSlide = () => {
  return (
    <div className="text-center space-y-8">
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8">
        <Briefcase className="w-16 h-16 text-white" />
      </div>
      <div className="space-y-4">
        <p className="text-xl text-gray-300">Solution Full-Stack Moderne</p>
        <p className="text-lg text-gray-400">React TypeScript + Flask Python + MongoDB</p>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-12">
        <div className="text-center">
          <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <p className="text-sm text-gray-400">Candidats</p>
        </div>
        <div className="text-center">
          <Building2 className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <p className="text-sm text-gray-400">Entreprises</p>
        </div>
        <div className="text-center">
          <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <p className="text-sm text-gray-400">Analytics</p>
        </div>
      </div>
    </div>
  );
};

export default Slide1IntroSlide;