import React from 'react';
import { Puzzle, Lightbulb, Target, Settings, CheckCircle, Zap } from 'lucide-react';

const Slide12ChallengesSlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Puzzle className="w-6 h-6 text-blue-400 mr-3" />
            🧩 Défi: Submodules Git
          </h3>
          <div className="mb-4">
            <h4 className="font-semibold text-red-400 mb-2">Problème:</h4>
            <p className="text-sm text-gray-300">
              Orchestrer le développement de deux repositories séparés (frontend/backend) 
              tout en maintenant la cohérence et la synchronisation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-400 mb-2">Solution Innovante:</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-green-400">
              <div>.gitmodules configuration</div>
              <div>├── Auto-sync dépendances</div>
              <div>├── Builds coordonnés Docker</div>
              <div>├── Versions lockées stabilité</div>
              <div>└── Scripts synchronisation auto</div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Target className="w-6 h-6 text-green-400 mr-3" />
            🎯 Défi: Tests CI/CD Sans DB
          </h3>
          <div className="mb-4">
            <h4 className="font-semibold text-red-400 mb-2">Problème:</h4>
            <p className="text-sm text-gray-300">
              Exécuter des tests complets en environnement CI sans MongoDB réel, 
              tout en gardant la fidélité des tests.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-400 mb-2">Solution Créative:</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-green-400">
              <div>class MockDatabase:</div>
              <div className="ml-2">def __init__(self):</div>
              <div className="ml-4">self.collections = {`{`}</div>
              <div className="ml-6">"users": [], "jobs": []</div>
              <div className="ml-4">{`}`}</div>
              <div className="ml-2"># Simulation MongoDB complète</div>
            </div>
          </div>
        </div>

        <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Settings className="w-6 h-6 text-purple-400 mr-3" />
            ⚙️ Défi: Auth Multi-Types
          </h3>
          <div className="mb-4">
            <h4 className="font-semibold text-red-400 mb-2">Problème:</h4>
            <p className="text-sm text-gray-300">
              Gérer candidats et entreprises avec un seul système d'authentification 
              unifié mais flexible.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-400 mb-2">Solution Élégante:</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-green-400">
              <div>interface AuthUser {`{`}</div>
              <div className="ml-2">id: string;</div>
              <div className="ml-2">type: 'user' | 'company';</div>
              <div className="ml-2">profile: UserProfile | CompanyProfile;</div>
              <div>{`}`}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
            💡 Innovation: Recherche Intelligente
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-300 mb-2">Algorithme Multi-Critères</h4>
              <div className="bg-gray-900 rounded p-3 font-mono text-xs text-green-400">
                <div>const searchAlgorithm = {`{`}</div>
                <div className="ml-2">titleMatch: 0.4,</div>
                <div className="ml-2">skillsMatch: 0.3,</div>
                <div className="ml-2">locationMatch: 0.2,</div>
                <div className="ml-2">salaryMatch: 0.1</div>
                <div>{`}`};</div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Score de pertinence intelligent</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Pondération dynamique selon contexte</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Résultats triés par relevance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Zap className="w-6 h-6 text-red-400 mr-3" />
            ⚡ Innovation: Cache Adaptatif
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-red-300 mb-2">Cache Intelligent LRU</h4>
              <div className="bg-gray-900 rounded p-3 font-mono text-xs text-green-400">
                <div>@lru_cache(maxsize=128)</div>
                <div>def get_popular_jobs():</div>
                <div className="ml-2"># Jobs consultés avec TTL dynamique</div>
                <div className="ml-2">return cached_jobs</div>
                <div className="mt-2"># Invalidation intelligente</div>
                <div>if job_views[job_id] {'>'} threshold:</div>
                <div className="ml-2">cache.delete(f"job:{`{job_id}`}")</div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Cache basé sur fréquence d'accès</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">TTL adaptatif selon popularité</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Invalidation sélective intelligente</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="font-bold text-lg mb-4 text-center text-purple-400">🔧 Autres Défis Techniques Relevés avec Succès</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold text-blue-400">Performance & Optimisation</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-900 p-3 rounded flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Optimisation indexes MongoDB (requêtes 5x plus rapides)</span>
              </div>
              <div className="bg-gray-900 p-3 rounded flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Code splitting React avec lazy loading routes</span>
              </div>
              <div className="bg-gray-900 p-3 rounded flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Connection pooling PyMongo pour réduction latence</span>
              </div>
              <div className="bg-gray-900 p-3 rounded flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Debounce recherche (80% réduction requêtes API)</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-green-400">Sécurité & Validation</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-900 p-3 rounded flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Validation multi-niveaux (client + serveur)</span>
              </div>
              <div className="bg-gray-900 p-3 rounded flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Protection OWASP Top 10 complète</span>
              </div>
              <div className="bg-gray-900 p-3 rounded flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">Rate limiting intelligent par endpoint</span>
              </div>
              <div className="bg-gray-900 p-3 rounded flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-gray-300">JWT avec anti-replay et refresh tokens</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-500/30">
        <h3 className="font-bold text-xl mb-4 text-center text-green-400">🏆 Apprentissages Clés de la Résolution de Défis</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Puzzle className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-blue-400 mb-2">Résolution Créative</h4>
            <p className="text-sm text-gray-300">
              Chaque défi technique a stimulé l'innovation et poussé l'équipe 
              à développer des solutions originales et efficaces.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-green-400 mb-2">Pensée Systémique</h4>
            <p className="text-sm text-gray-300">
              Les défis ont renforcé la capacité à anticiper les problèmes 
              et concevoir des architectures robustes et évolutives.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-purple-400 mb-2">Expertise Approfondie</h4>
            <p className="text-sm text-gray-300">
              La résolution de défis complexes a considérablement enrichi 
              l'expertise technique de chaque membre de l'équipe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide12ChallengesSlide;