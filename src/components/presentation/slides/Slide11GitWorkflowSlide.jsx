import React from 'react';
import { GitBranch, GitMerge, GitPullRequest, Settings, CheckCircle, Code } from 'lucide-react';

const Slide11GitWorkflowSlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <GitBranch className="w-6 h-6 text-blue-400 mr-3" />
            🌳 Architecture Git avec Submodules
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4 font-mono text-xs">
            <pre className="text-green-400">
{`InterimApp/ (Repository Principal)
├── .gitmodules                    
├── frontend/                      
│   └── → AysanDehghan-dev/
│       Interim-app-frontend.git
├── backend/                       
│   └── → AysanDehghan-dev/
│       Interim-app-backend.git
└── docker-compose.yml            `}
            </pre>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Orchestration centralisée des services</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Développement indépendant frontend/backend</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Versioning cohérent des dépendances</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <GitMerge className="w-6 h-6 text-green-400 mr-3" />
            🔄 Workflow Git Flow Implémenté
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-blue-300 mb-1">main - Production</div>
              <div className="text-xs text-gray-400">Version stable, déployée en production</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-green-300 mb-1">develop - Intégration</div>
              <div className="text-xs text-gray-400">Branche d'intégration continue</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-purple-300 mb-1">feature/* - Fonctionnalités</div>
              <div className="text-xs text-gray-400">Développement nouvelles features</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-yellow-300 mb-1">hotfix/* - Corrections</div>
              <div className="text-xs text-gray-400">Corrections urgentes production</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-red-300 mb-1">release/* - Versions</div>
              <div className="text-xs text-gray-400">Préparation releases production</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="font-bold text-lg mb-4 flex items-center">
          <GitPullRequest className="w-6 h-6 text-purple-400 mr-3" />
          📋 Processus de Code Review Rigoureux
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
            <h4 className="font-semibold text-blue-400 mb-3">1. Feature Branch Creation</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Nomenclature: feature/auth-jwt-system</li>
              <li>• Description détaillée des changements</li>
              <li>• Tests automatiques requis</li>
              <li>• Documentation mise à jour</li>
            </ul>
          </div>
          <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
            <h4 className="font-semibold text-green-400 mb-3">2. Pull Request Process</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Review obligatoire par 2 développeurs</li>
              <li>• Tests CI/CD doivent passer</li>
              <li>• Performance benchmarks validés</li>
              <li>• Sécurité et qualité vérifiées</li>
            </ul>
          </div>
          <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
            <h4 className="font-semibold text-purple-400 mb-3">3. Merge to Develop</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Squash commits pour historique propre</li>
              <li>• Tag de version automatique</li>
              <li>• Déploiement staging automatique</li>
              <li>• Notification équipe succès/échec</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Settings className="w-6 h-6 text-yellow-400 mr-3" />
            🛠️ Gestion des Submodules
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <div className="font-mono text-xs text-green-400 space-y-1">
              <div className="text-yellow-300"># Initialisation des submodules</div>
              <div>git submodule init</div>
              <div>git submodule update</div>
              <div className="mt-2 text-yellow-300"># Mise à jour automatique</div>
              <div>git submodule update --remote --merge</div>
              <div className="mt-2 text-yellow-300"># Synchronisation complète</div>
              <div>git submodule foreach git pull origin main</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Versions lockées pour stabilité</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Scripts de synchronisation automatique</span>
            </div>
          </div>
        </div>

        <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Code className="w-6 h-6 text-red-400 mr-3" />
            📊 Métriques Git & Collaboration
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-gray-800 p-3 rounded">
                <div className="text-xl font-bold text-blue-400">127</div>
                <div className="text-xs text-gray-400">Commits Total</div>
              </div>
              <div className="text-center bg-gray-800 p-3 rounded">
                <div className="text-xl font-bold text-green-400">24</div>
                <div className="text-xs text-gray-400">Pull Requests</div>
              </div>
              <div className="text-center bg-gray-800 p-3 rounded">
                <div className="text-xl font-bold text-purple-400">18</div>
                <div className="text-xs text-gray-400">Feature Branches</div>
              </div>
              <div className="text-center bg-gray-800 p-3 rounded">
                <div className="text-xl font-bold text-yellow-400">3</div>
                <div className="text-xs text-gray-400">Contributors Actifs</div>
              </div>
            </div>
            <div className="text-sm text-gray-300">
              <div className="font-semibold text-red-400 mb-1">Qualité des Reviews:</div>
              <div className="text-xs">• Temps moyen review: 4h</div>
              <div className="text-xs">• Taux d'approbation: 96%</div>
              <div className="text-xs">• Bugs détectés en review: 12</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900/20 to-green-900/20 rounded-xl p-6 border border-blue-500/30">
        <h3 className="font-bold text-lg mb-4 text-center text-blue-400">🚀 Timeline Git Flow - Développement InterimApp</h3>
        <div className="flex items-center justify-between text-sm">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold">1</span>
            </div>
            <div className="font-semibold text-blue-400">Setup Initial</div>
            <div className="text-xs text-gray-400">Repositories + Submodules</div>
          </div>
          <div className="text-gray-500">→</div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold">2</span>
            </div>
            <div className="font-semibold text-green-400">Feature Development</div>
            <div className="text-xs text-gray-400">Auth + API + Frontend</div>
          </div>
          <div className="text-gray-500">→</div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold">3</span>
            </div>
            <div className="font-semibold text-purple-400">Code Reviews</div>
            <div className="text-xs text-gray-400">Quality Assurance</div>
          </div>
          <div className="text-gray-500">→</div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold">4</span>
            </div>
            <div className="font-semibold text-yellow-400">Integration</div>
            <div className="text-xs text-gray-400">Develop Branch</div>
          </div>
          <div className="text-gray-500">→</div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold">5</span>
            </div>
            <div className="font-semibold text-red-400">Production</div>
            <div className="text-xs text-gray-400">Main Branch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide11GitWorkflowSlide;