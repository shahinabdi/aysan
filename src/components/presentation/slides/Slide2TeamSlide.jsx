import React from 'react';
import { Github } from 'lucide-react';

const Slide2TeamSlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-lg">AD</span>
          </div>
          <h3 className="font-bold text-lg mb-2">Aysan DEHGHAN</h3>
          <p className="text-blue-400 text-sm mb-3">Lead Developer & Architecture</p>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• Full-Stack Expert</li>
            <li>• DevOps & CI/CD</li>
            <li>• Team Leadership</li>
          </ul>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h3 className="font-bold text-lg mb-2">Aurélien</h3>
          <p className="text-green-400 text-sm mb-3">Frontend Specialist & UX/UI</p>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• React TypeScript</li>
            <li>• Responsive Design</li>
            <li>• User Experience</li>
          </ul>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <h3 className="font-bold text-lg mb-2">Vincent</h3>
          <p className="text-purple-400 text-sm mb-3">Backend Developer & DevOps</p>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• Flask API Expert</li>
            <li>• MongoDB Design</li>
            <li>• Security & Testing</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="font-bold text-lg mb-4 flex items-center">
          <Github className="w-5 h-5 mr-2 text-gray-400" />
          Méthodologie Git Flow
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-400 mb-2">Structure avec Submodules</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Repository principal avec orchestration</li>
              <li>• Submodule frontend (React)</li>
              <li>• Submodule backend (Flask)</li>
              <li>• Synchronisation automatisée</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-400 mb-2">Workflow Collaboratif</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Branches feature/* pour développement</li>
              <li>• Code reviews obligatoires</li>
              <li>• Tests automatisés avant merge</li>
              <li>• Deploy automatique vers staging</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2TeamSlide;