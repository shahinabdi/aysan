import React from 'react';
import { Container, GitBranch, Zap, Settings, CheckCircle, Play, Database, Globe } from 'lucide-react';

const Slide9DevOpsSlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Container className="w-6 h-6 text-blue-400 mr-3" />
            🐳 Architecture Docker Multi-Service
          </h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded-lg flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
              <div>
                <div className="font-semibold text-sm text-blue-300">backend (Flask API)</div>
                <div className="text-xs text-gray-400">Port 5000, Python 3.11-slim, Gunicorn</div>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
              <div>
                <div className="font-semibold text-sm text-green-300">frontend (React App)</div>
                <div className="text-xs text-gray-400">Port 3000, Node 18-alpine, Nginx</div>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded mr-3"></div>
              <div>
                <div className="font-semibold text-sm text-purple-300">mongodb (Database)</div>
                <div className="text-xs text-gray-400">Port 27017, volumes persistants</div>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded mr-3"></div>
              <div>
                <div className="font-semibold text-sm text-yellow-300">mongo-express (Admin UI)</div>
                <div className="text-xs text-gray-400">Port 8081, interface de gestion</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <GitBranch className="w-6 h-6 text-green-400 mr-3" />
            ⚡ Pipeline CI/CD GitHub Actions
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-green-300 mb-1">🔍 Lint & Quality</div>
              <div className="text-xs text-gray-400">Ruff, Black, isort, mypy sur Python 3.9-3.11</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-blue-300 mb-1">🧪 Tests Automatisés</div>
              <div className="text-xs text-gray-400">Pytest avec mocks, coverage > 90%</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-red-300 mb-1">🛡️ Security Scan</div>
              <div className="text-xs text-gray-400">Bandit, Safety, vulnérabilités dépendances</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-purple-300 mb-1">🚀 Deploy Staging</div>
              <div className="text-xs text-gray-400">Déploiement automatique si tests passent</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="font-bold text-lg mb-4 flex items-center">
          <Settings className="w-6 h-6 text-purple-400 mr-3" />
          🎛️ Makefile avec 30+ Commandes Utilitaires
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-blue-400 mb-2">🚀 Gestion Services</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs space-y-1">
              <div className="text-green-400">make up          # Démarrer tous les services</div>
              <div className="text-yellow-400">make down        # Arrêter tous les services</div>
              <div className="text-blue-400">make logs        # Voir logs en temps réel</div>
              <div className="text-purple-400">make shell       # Accéder au container backend</div>
              <div className="text-red-400">make health      # Vérifier état des services</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-400 mb-2">🗄️ Base de Données</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs space-y-1">
              <div className="text-green-400">make seed        # Peupler avec données test</div>
              <div className="text-yellow-400">make clear-db    # Vider la base de données</div>
              <div className="text-blue-400">make reset-db    # Vider et repeupler</div>
              <div className="text-purple-400">make backup-db  # Sauvegarder la base</div>
              <div className="text-red-400">make restore-db  # Restaurer sauvegarde</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-purple-400 mb-2">🧪 Tests & Qualité</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs space-y-1">
              <div className="text-green-400">make test        # Lancer tous les tests</div>
              <div className="text-yellow-400">make coverage   # Tests avec couverture</div>
              <div className="text-blue-400">make format     # Formatter code (Ruff + Black)</div>
              <div className="text-purple-400">make lint       # Analyser qualité du code</div>
              <div className="text-red-400">make security   # Scan sécurité complet</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Globe className="w-6 h-6 text-blue-400 mr-3" />
            🌐 Configuration Production
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-blue-300 mb-1">Variables d'Environnement</div>
              <div className="font-mono text-xs text-gray-400">
                FLASK_ENV=production<br/>
                MONGODB_URL=mongodb+srv://...<br/>
                JWT_SECRET_KEY=256-bit-key
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Compression Gzip sur assets</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Headers cache optimisés (1 an)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">SSL/TLS avec Let's Encrypt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Zap className="w-6 h-6 text-yellow-400 mr-3" />
            ⚡ Optimisations & Monitoring
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-yellow-300 mb-1">Performance</div>
              <div className="text-xs text-gray-400">
                • Multi-stage Docker builds<br/>
                • Images Alpine lightweight<br/>
                • Rate limiting: 1000 req/min
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Health checks avec retry auto</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Logs structurés + métriques</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Horizontal scaling ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-500/30">
        <h3 className="font-bold text-lg mb-4 text-center text-green-400">🚀 Pipeline DevOps Complet</h3>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm font-semibold text-blue-400">Git Push</div>
            <div className="text-xs text-gray-400">Feature Branch</div>
          </div>
          <div className="text-gray-500">→</div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm font-semibold text-green-400">CI Tests</div>
            <div className="text-xs text-gray-400">Lint + Security</div>
          </div>
          <div className="text-gray-500">→</div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-2">
              <Container className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm font-semibold text-purple-400">Build Images</div>
            <div className="text-xs text-gray-400">Docker Multi-stage</div>
          </div>
          <div className="text-gray-500">→</div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-2">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm font-semibold text-yellow-400">Deploy</div>
            <div className="text-xs text-gray-400">Staging Auto</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide9DevOpsSlide;