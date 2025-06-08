import React from 'react';
import { Lightbulb, Zap, Brain, Palette, CheckCircle, Star } from 'lucide-react';

const Slide13InnovationsSlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Brain className="w-6 h-6 text-blue-400 mr-3" />
            🧠 Algorithme de Matching Intelligent
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <div className="font-mono text-xs text-green-400">
              <div className="text-blue-300">// Score de pertinence multi-critères</div>
              <div>const matchingScore = {`{`}</div>
              <div className="ml-2 text-yellow-400">titleRelevance: 0.35,</div>
              <div className="ml-2 text-green-400">skillsMatch: 0.30,</div>
              <div className="ml-2 text-purple-400">experienceLevel: 0.20,</div>
              <div className="ml-2 text-red-400">locationProximity: 0.10,</div>
              <div className="ml-2 text-blue-400">salaryCompatibility: 0.05</div>
              <div>{`}`};</div>
              <div className="mt-2 text-gray-400">// Calcul score final pondéré</div>
              <div>const finalScore = calculateWeightedMatch(job, candidate);</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Analyse sémantique des compétences</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Scoring adaptatif selon profil candidat</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Recommandations personnalisées temps réel</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Palette className="w-6 h-6 text-green-400 mr-3" />
            🎨 Design System Adaptatif
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <div className="font-mono text-xs text-green-400">
              <div className="text-green-300">/* Breakpoints intelligents */</div>
              <div>@media (max-width: 768px) {`{`}</div>
              <div className="ml-2">.job-grid {`{`}</div>
              <div className="ml-4">grid-template-columns: 1fr;</div>
              <div className="ml-4">gap: 1rem;</div>
              <div className="ml-2">{`}`}</div>
              <div>{`}`}</div>
              <div className="mt-2 text-blue-300">/* Dark mode avec préférence système */</div>
              <div>@media (prefers-color-scheme: dark) {`{`}</div>
              <div className="ml-2">:root {`{`} --bg-primary: #1a1a1a; {`}`}</div>
              <div>{`}`}</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Mode sombre automatique selon système</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Responsive basé sur contenu, pas device</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Palette couleurs dynamique adaptative</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Zap className="w-6 h-6 text-purple-400 mr-3" />
            ⚡ Optimisations Performance Avancées
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-purple-300 mb-1">Virtual Scrolling Intelligent</div>
              <div className="text-xs text-gray-400">Rendu uniquement des éléments visibles (1000+ offres)</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-blue-300 mb-1">Prefetching Prédictif</div>
              <div className="text-xs text-gray-400">Chargement anticipé basé sur comportement utilisateur</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-green-300 mb-1">Image Optimization</div>
              <div className="text-xs text-gray-400">WebP + lazy loading + progressive enhancement</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-yellow-300 mb-1">Database Query Optimization</div>
              <div className="text-xs text-gray-400">Aggregation pipelines + indexes composites</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
            💡 UX Innovations Utilisateur
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-yellow-300 mb-1">Skeleton Screens Contextuels</div>
              <div className="text-xs text-gray-400">Loading states qui reflètent le contenu réel</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-blue-300 mb-1">Micro-interactions Fluides</div>
              <div className="text-xs text-gray-400">Animations 60fps avec CSS transforms optimisées</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-green-300 mb-1">Navigation Prédictive</div>
              <div className="text-xs text-gray-400">Suggestions intelligentes basées sur l'historique</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-purple-300 mb-1">Accessibilité Proactive</div>
              <div className="text-xs text-gray-400">Support lecteurs d'écran + navigation clavier</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="font-bold text-lg mb-4 flex items-center">
          <Star className="w-6 h-6 text-blue-400 mr-3" />
          🌟 Fonctionnalités Uniques Développées
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
            <h4 className="font-semibold text-blue-400 mb-3">🔍 Recherche Contextuelle</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Auto-complétion avec ML suggestions</li>
              <li>• Filtres dynamiques selon résultats</li>
              <li>• Sauvegarde recherches personnalisées</li>
              <li>• Alertes automatiques nouvelles offres</li>
            </ul>
          </div>
          <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
            <h4 className="font-semibold text-green-400 mb-3">📊 Analytics Temps Réel</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Dashboards interactifs avec D3.js</li>
              <li>• Métriques personnalisées par rôle</li>
              <li>• Comparaisons période vs période</li>
              <li>• Export données CSV/PDF automatique</li>
            </ul>
          </div>
          <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
            <h4 className="font-semibold text-purple-400 mb-3">🎯 Personnalisation IA</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Profils auto-complétés intelligents</li>
              <li>• Recommandations évolutives ML</li>
              <li>• Interface adaptative selon usage</li>
              <li>• Suggestions amélioration profil</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
          <h3 className="font-bold text-lg mb-4 text-red-400">🚀 Innovations Techniques Futures</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-red-300 mb-1">WebAssembly Integration</div>
              <div className="text-xs text-gray-400">Calculs ML côté client pour matching instantané</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-blue-300 mb-1">Progressive Web App</div>
              <div className="text-xs text-gray-400">Installation native + notifications push</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-green-300 mb-1">Edge Computing</div>
              <div className="text-xs text-gray-400">CDN intelligent avec cache géolocalisé</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-purple-300 mb-1">AI Voice Interface</div>
              <div className="text-xs text-gray-400">Recherche vocale avec NLP avancé</div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30">
          <h3 className="font-bold text-lg mb-4 text-indigo-400">📈 Métriques d'Innovation</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-gray-800 p-3 rounded">
                <div className="text-xl font-bold text-blue-400">15+</div>
                <div className="text-xs text-gray-400">Innovations Techniques</div>
              </div>
              <div className="text-center bg-gray-800 p-3 rounded">
                <div className="text-xl font-bold text-green-400">8</div>
                <div className="text-xs text-gray-400">Algorithmes Originaux</div>
              </div>
              <div className="text-center bg-gray-800 p-3 rounded">
                <div className="text-xl font-bold text-purple-400">12</div>
                <div className="text-xs text-gray-400">Optimisations Performance</div>
              </div>
              <div className="text-center bg-gray-800 p-3 rounded">
                <div className="text-xl font-bold text-yellow-400">6</div>
                <div className="text-xs text-gray-400">UX Patterns Créés</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-300 font-semibold">Impact Innovation:</div>
              <div className="text-xs text-gray-400">
                Réduction 40% temps interaction + Augmentation 25% satisfaction utilisateur
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/30">
        <h3 className="font-bold text-xl mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          🎨 Philosophy de l'Innovation - "Code as Craft"
        </h3>
        <div className="text-center space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Chaque innovation d'<strong className="text-purple-400">InterimApp</strong> reflète notre philosophie : 
            <strong className="text-blue-400"> combiner excellence technique et créativité</strong> pour créer 
            des expériences utilisateur exceptionnelles qui repoussent les limites du possible.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-purple-900/30 p-4 rounded-lg">
              <div className="text-lg font-bold text-purple-400 mb-2">💫 Créativité</div>
              <div className="text-sm text-gray-300">Sortir des sentiers battus pour innover</div>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-lg">
              <div className="text-lg font-bold text-blue-400 mb-2">🔬 Expérimentation</div>
              <div className="text-sm text-gray-300">Tester audacieusement nouvelles approches</div>
            </div>
            <div className="bg-green-900/30 p-4 rounded-lg">
              <div className="text-lg font-bold text-green-400 mb-2">🎯 Impact</div>
              <div className="text-sm text-gray-300">Innovations qui améliorent vraiment l'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide13InnovationsSlide;