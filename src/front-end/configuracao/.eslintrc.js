module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // Regras personalizadas para seguir os padrões de desenvolvimento
    'react/react-in-jsx-scope': 'off', // Não é necessário importar React no Next.js
    'react/prop-types': 'off', // Usamos TypeScript para tipagem
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }], // Permitir JSX apenas em arquivos .tsx
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Não exigir tipos de retorno explícitos
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignorar variáveis não utilizadas que começam com _
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Permitir console.warn e console.error, mas avisar sobre console.log
    'quotes': ['error', 'single'], // Usar aspas simples
    'semi': ['error', 'always'], // Sempre usar ponto e vírgula
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};