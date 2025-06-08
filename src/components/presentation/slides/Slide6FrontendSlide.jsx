import React from 'react';
import { Smartphone, Palette, Code, Search, CheckCircle, Moon, Zap } from 'lucide-react';

const Slide6FrontendSlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Smartphone className="w-6 h-6 text-blue-400 mr-3" />
            🎨 Pages Principales
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <div>
                <div className="font-semibold text-gray-200">Home.tsx</div>
                <div className="text-xs text-gray-400">Page d'accueil avec hero section moderne</div>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <div>
                <div className="font-semibold text-gray-200">Jobs.tsx</div>
                <div className="text-xs text-gray-400">Liste offres + recherche avancée temps réel</div>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <div>
                <div className="font-semibold text-gray-200">UserDashboard.tsx</div>
                <div className="text-xs text-gray-400">Tableau de bord candidat avec analytics</div>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <div>
                <div className="font-semibold text-gray-200">CompanyDashboard.tsx</div>
                <div className="text-xs text-gray-400">Gestion recrutement pour entreprises</div>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
              <div>
                <div className="font-semibold text-gray-200">CreateJob.tsx</div>
                <div className="text-xs text-gray-400">Formulaire création offre avec validation</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Palette className="w-6 h-6 text-green-400 mr-3" />
            🌙 Fonctionnalités UX/UI Avancées
          </h3>
          <div className="space-y-3">
            <div className="flex items-center text-sm bg-gray-800 p-2 rounded">
              <Moon className="w-4 h-4 text-blue-400 mr-3" />
              <span className="text-gray-300">Dark/Light Mode avec persistance localStorage</span>
            </div>
            <div className="flex items-center text-sm bg-gray-800 p-2 rounded">
              <Search className="w-4 h-4 text-green-400 mr-3" />
              <span className="text-gray-300">Recherche temps réel avec debounce</span>
            </div>
            <div className="flex items-center text-sm bg-gray-800 p-2 rounded">
              <Zap className="w-4 h-4 text-yellow-400 mr-3" />
              <span className="text-gray-300">Loading states & skeleton screens</span>
            </div>
            <div className="flex items-center text-sm bg-gray-800 p-2 rounded">
              <CheckCircle className="w-4 h-4 text-purple-400 mr-3" />
              <span className="text-gray-300">Navigation clavier accessible (WCAG)</span>
            </div>
            <div className="flex items-center text-sm bg-gray-800 p-2 rounded">
              <Smartphone className="w-4 h-4 text-red-400 mr-3" />
              <span className="text-gray-300">Responsive design mobile-first</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Code className="w-6 h-6 text-purple-400 mr-3" />
            ⚡ Gestion d'État TypeScript
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <div className="font-mono text-xs text-green-400">
              <div className="text-purple-300">interface AuthContextType {`{`}</div>
              <div className="ml-2 text-blue-300">user: User | Company | null;</div>
              <div className="ml-2 text-blue-300">userType: 'user' | 'company';</div>
              <div className="ml-2 text-blue-300">isAuthenticated: boolean;</div>
              <div className="ml-2 text-green-300">login: (credentials) =&gt; Promise&lt;boolean&gt;;</div>
              <div className="ml-2 text-green-300">logout: () =&gt; void;</div>
              <div className="text-purple-300">{`}`}</div>
            </div>
          </div>
          <div className="text-sm">
            <h4 className="font-semibold text-purple-400 mb-2">Custom Hooks Réutilisables</h4>
            <ul className="text-xs text-gray-300 space-y-1">
              <li>• useAuth() - Gestion authentification globale</li>
              <li>• useTheme() - Mode sombre/clair système</li>
              <li>• useDebounce() - Recherche optimisée</li>
              <li>• useAPI() - Appels HTTP avec cache et retry</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
          <h3 className="font-bold text-lg mb-4 text-yellow-400">🔍 Recherche Intelligente</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded-lg">
              <h4 className="font-semibold text-sm text-yellow-300 mb-2">Filtres Multi-Critères</h4>
              <div className="text-xs text-gray-300 space-y-1">
                <div>• <span className="text-blue-400">Recherche textuelle</span> sur titre et description</div>
                <div>• <span className="text-green-400">Localisation</span> avec autocomplétion</div>
                <div>• <span className="text-purple-400">Type de contrat</span> (CDI, CDD, Interim)</div>
                <div>• <span className="text-yellow-400">Fourchette salariale</span> avec slider</div>
                <div>• <span className="text-red-400">Compétences</span> avec tags multiples</div>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <h4 className="font-semibold text-sm text-green-300 mb-2">Performance Optimisée</h4>
              <div className="text-xs text-gray-300 space-y-1">
                <div>• Debounce 300ms pour éviter spam API</div>
                <div>• Pagination intelligente (infinite scroll)</div>
                <div>• Cache des résultats en mémoire</div>
                <div>• URL state pour partage/bookmark</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="font-bold text-lg mb-4 text-blue-400">📊 Tableaux de Bord Interactifs</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
            <h4 className="font-semibold text-blue-400 mb-3">👤 Dashboard Candidat</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Statistiques visuelles des candidatures par statut
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Historique complet avec filtrage date/statut
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Recommandations basées sur le profil
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Actions rapides (modifier profil, retirer candidature)
              </li>
            </ul>
          </div>
          <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
            <h4 className="font-semibold text-green-400 mb-3">🏢 Dashboard Entreprise</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Métriques performance des offres publiées
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Gestion centralisée candidatures reçues
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Analytics de recrutement avec graphiques
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Actions en lot (accepter/refuser multiples)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide6FrontendSlide;