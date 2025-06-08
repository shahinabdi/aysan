import React from 'react';
import { TestTube, Shield, BarChart3, CheckCircle, Code, Target } from 'lucide-react';

const Slide7TestingSlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <TestTube className="w-6 h-6 text-green-400 mr-3" />
            🧪 Couverture Tests Backend
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Tests Unitaires (modèles, utils)</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-700 rounded-full h-3 mr-2">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '95%'}}></div>
                </div>
                <span className="text-green-400 text-sm font-bold">95%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Tests d'Intégration (workflows)</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-700 rounded-full h-3 mr-2">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '90%'}}></div>
                </div>
                <span className="text-green-400 text-sm font-bold">90%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Tests API Routes (endpoints)</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-700 rounded-full h-3 mr-2">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '88%'}}></div>
                </div>
                <span className="text-green-400 text-sm font-bold">88%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Tests Sécurité (auth, validation)</span>
              <div className="flex items-center">
                <div className="w-24 bg-gray-700 rounded-full h-3 mr-2">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '100%'}}></div>
                </div>
                <span className="text-green-400 text-sm font-bold">100%</span>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-900/30 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">90%</div>
              <div className="text-sm text-gray-300">Coverage Globale</div>
              <div className="text-xs text-gray-400">80+ tests automatisés</div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Code className="w-6 h-6 text-blue-400 mr-3" />
            🔧 Outils de Qualité
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center bg-gray-800 p-3 rounded-lg">
              <TestTube className="w-5 h-5 text-green-400 mr-3" />
              <div>
                <div className="font-semibold text-gray-200">Pytest + Coverage.py</div>
                <div className="text-xs text-gray-400">Framework de tests principal avec rapports HTML</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-800 p-3 rounded-lg">
              <Shield className="w-5 h-5 text-red-400 mr-3" />
              <div>
                <div className="font-semibold text-gray-200">Bandit + Safety</div>
                <div className="text-xs text-gray-400">Scan sécurité et vulnérabilités dépendances</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-800 p-3 rounded-lg">
              <Code className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <div className="font-semibold text-gray-200">Ruff + Black + mypy</div>
                <div className="text-xs text-gray-400">Linting, formatage et type checking</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-800 p-3 rounded-lg">
              <BarChart3 className="w-5 h-5 text-yellow-400 mr-3" />
              <div>
                <div className="font-semibold text-gray-200">SonarQube Analysis</div>
                <div className="text-xs text-gray-400">Qualité code et détection code smells</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="font-bold text-lg mb-4 flex items-center">
          <Target className="w-6 h-6 text-purple-400 mr-3" />
          🎯 Tests Mock Intelligents pour CI/CD
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-400 mb-3">Système de Mock MongoDB</h4>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs">
              <pre className="text-green-400">
{`class MockDatabase:
    def __init__(self):
        self.collections = {
            "users": [], "jobs": [], 
            "companies": [], "applications": []
        }
    
    def insert_one(self, collection, document):
        doc['_id'] = self._generate_objectid()
        self.collections[collection].append(doc)
        return doc['_id']`}
              </pre>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-400 mb-3">Avantages du Mocking</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Tests CI/CD sans dépendances externes
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Exécution 10x plus rapide que vraie DB
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Tests déterministes et reproductibles
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Simulation des cas d'erreur facilement
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Isolation complète entre tests
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">85+</div>
          <div className="text-sm font-semibold text-gray-300">Tests Automatisés</div>
          <div className="text-xs text-gray-500">Backend + Frontend</div>
        </div>
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30 text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">&lt;200ms</div>
          <div className="text-sm font-semibold text-gray-300">Temps Réponse API</div>
          <div className="text-xs text-gray-500">P95 Performance</div>
        </div>
        <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30 text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">A+</div>
          <div className="text-sm font-semibold text-gray-300">Security Rating</div>
          <div className="text-xs text-gray-500">0 Vulnérabilités Critiques</div>
        </div>
      </div>
    </div>
  );
};

export default Slide7TestingSlide;