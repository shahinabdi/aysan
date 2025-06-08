module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Désactiver les règles problématiques pour la production
    'react/jsx-no-comment-textnodes': 'warn',
    'no-unused-vars': 'warn',
    // Autres règles si nécessaire
    'no-console': 'warn',
    'no-debugger': 'warn'
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        // Règles spécifiques aux fichiers JS/JSX
        'react/jsx-no-comment-textnodes': 'off'
      }
    }
  ]
};