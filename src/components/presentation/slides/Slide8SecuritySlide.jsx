import React from 'react';
import { Shield, Lock, Key, AlertTriangle, CheckCircle, Globe } from 'lucide-react';

const Slide8SecuritySlide = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Lock className="w-6 h-6 text-blue-400 mr-3" />
            🔐 Authentification JWT Robuste
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <div className="font-mono text-xs text-green-400">
              <div className="text-blue-300">JWT Payload Structure:</div>
              <div className="text-gray-300">{`{`}</div>
              <div className="ml-2 text-yellow-400">"user_id": "ObjectId",</div>
              <div className="ml-2 text-yellow-400">"user_type": "user|company",</div>
              <div className="ml-2 text-green-400">"exp": timestamp, // 1 heure</div>
              <div className="ml-2 text-green-400">"iat": timestamp, // émission</div>
              <div className="ml-2 text-purple-400">"jti": "unique_id" // anti-replay</div>
              <div className="text-gray-300">{`}`}</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Tokens avec expiration courte (1h)</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">JTI unique pour éviter replay attacks</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Refresh tokens sécurisés (rotation)</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Signature HMAC-SHA256 avec secret fort</span>
            </div>
          </div>
        </div>
        
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Key className="w-6 h-6 text-red-400 mr-3" />
            🔒 Hashage Mots de Passe bcrypt
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <div className="font-mono text-xs text-green-400">
              <div className="text-purple-300">password_hash = bcrypt.hashpw(</div>
              <div className="ml-2 text-yellow-400">password.encode('utf-8'),</div>
              <div className="ml-2 text-blue-400">bcrypt.gensalt(rounds=12)</div>
              <div className="text-purple-300">)</div>
              <div className="mt-2 text-gray-400"># 12 rounds = très sécurisé</div>
              <div className="text-gray-400"># Temps calcul: ~250ms</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">12 rounds bcrypt (résistant brute force)</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Salt unique généré automatiquement</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Résistance rainbow tables</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Validation force mots de passe</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="font-bold text-lg mb-4 flex items-center">
          <Shield className="w-6 h-6 text-green-400 mr-3" />
          ✅ Validation Multi-Niveaux et Sécurité
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-400 mb-3">Validation Côté Serveur (Marshmallow)</h4>
            <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs">
              <pre className="text-green-400">
{`class UserSchema(Schema):
    email = fields.Email(
        required=True, 
        validate=validate_unique_email
    )
    password = fields.Str(
        required=True,
        validate=validate_strong_password
    )
    nom = fields.Str(
        validate=Length(min=2, max=50)
    )`}
              </pre>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-400 mb-3">Validation Côté Client (TypeScript)</h4>
            <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs">
              <pre className="text-green-400">
{`interface LoginForm {
  email: string;    // Email regex
  password: string; // Min 8, 1 maj, 1 chiffre
  userType: 'user' | 'company';
}

const validatePassword = (pwd: string) => {
  return /^(?=.*[A-Z])(?=.*\\d).{8,}$/.test(pwd);
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <Globe className="w-6 h-6 text-purple-400 mr-3" />
            🌐 Sécurité Web & CORS
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-purple-300 mb-1">CORS Configuration</div>
              <div className="text-xs text-gray-400">Origins autorisées, credentials sécurisés</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-blue-300 mb-1">Rate Limiting</div>
              <div className="text-xs text-gray-400">1000 req/min par IP, protection DDoS</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-green-300 mb-1">Headers Sécurité</div>
              <div className="text-xs text-gray-400">CSP, HSTS, X-Frame-Options</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <div className="font-semibold text-yellow-300 mb-1">Input Sanitization</div>
              <div className="text-xs text-gray-400">Protection XSS, injection SQL</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
            🛡️ Protection OWASP Top 10
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center bg-gray-800 p-2 rounded">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Broken Access Control</span>
            </div>
            <div className="flex items-center bg-gray-800 p-2 rounded">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Cryptographic Failures</span>
            </div>
            <div className="flex items-center bg-gray-800 p-2 rounded">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Injection Attacks</span>
            </div>
            <div className="flex items-center bg-gray-800 p-2 rounded">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Insecure Design</span>
            </div>
            <div className="flex items-center bg-gray-800 p-2 rounded">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300">Security Misconfiguration</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-500/30">
        <h3 className="font-bold text-lg mb-4 text-center text-green-400">🏆 Audit de Sécurité - Résultats</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">A+</div>
            <div className="text-sm font-semibold text-gray-300">Security Grade</div>
            <div className="text-xs text-gray-500">Mozilla Observatory</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
            <div className="text-sm font-semibold text-gray-300">Vulnérabilités Critiques</div>
            <div className="text-xs text-gray-500">Bandit + Safety</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-sm font-semibold text-gray-300">OWASP Compliance</div>
            <div className="text-xs text-gray-500">Top 10 Protection</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">SSL A+</div>
            <div className="text-sm font-semibold text-gray-300">TLS Configuration</div>
            <div className="text-xs text-gray-500">SSL Labs Test</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide8SecuritySlide;