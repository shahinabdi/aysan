#!/usr/bin/env node

// Script de build custom pour Netlify qui ignore les warnings ESLint
process.env.CI = 'false';
process.env.GENERATE_SOURCEMAP = 'false';

const { spawn } = require('child_process');

console.log('🚀 Starting Netlify build...');
console.log('CI=false to treat warnings as warnings, not errors');

const build = spawn('npm', ['run', 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    CI: 'false',
    GENERATE_SOURCEMAP: 'false'
  }
});

build.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Build completed successfully!');
  } else {
    console.error('❌ Build failed with code:', code);
    process.exit(code);
  }
});

build.on('error', (err) => {
  console.error('❌ Build error:', err);
  process.exit(1);
});