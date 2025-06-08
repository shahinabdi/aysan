import React from 'react';
import { Smartphone, Server, Database, Code, CheckCircle } from 'lucide-react';

const Slide3ArchitectureSlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <div className="flex items-center mb-4">
            <Smartphone className="w-8 h-8 text-blue-400 mr-3" />
            <h3 className="font-bold text-lg">Frontend</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              React 18.2.0 + TypeScript
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Tailwind CSS + Dark Mode
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              React Router v6
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Axios + Context API
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Responsive Design
            </li>
          </ul>
        </div>
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
          <div className="flex items-center mb-4">
            <Server className="w-8 h-8 text-green-400 mr-3" />
            <h3 className="font-bold text-lg">Backend</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Flask 2.3.3 + Python 3.11
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              API REST + Swagger Docs
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              JWT + bcrypt Security
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Pytest + 90% Coverage
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              CORS + Rate Limiting
            </li>
          </ul>
        </div>
        <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
          <div className="flex items-center mb-4">
            <Database className="w-8 h-8 text-purple-400 mr-3" />
            <h3 className="font-bold text-lg">Database</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              MongoDB 5.0 + PyMongo
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Indexes Optimisés
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Relations NoSQL
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Aggregation Pipelines
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Backup Automatisé
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="font-bold text-lg mb-4 flex items-center">
          <Code className="w-5 h-5 mr-2 text-blue-400" />
          DevOps & Déploiement
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-400 mb-2">Containerisation</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Docker multi-service</li>
              <li>• Docker Compose orchestration</li>
              <li>• Images optimisées production</li>
              <li>• Volumes persistants</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-400 mb-2">CI/CD Pipeline</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• GitHub Actions automatisé</li>
              <li>• Tests sur Python 3.9-3.11</li>
              <li>• Security scanning (Bandit)</li>
              <li>• Deploy staging automatique</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3ArchitectureSlide;