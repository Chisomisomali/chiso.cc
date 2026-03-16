#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('[v0] Starting build verification...\n');

const filesToCheck = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/geek/page.tsx',
  'components/TerminalEmulator.tsx',
  'components/navigation.tsx',
  'lib/terminal-commands.ts',
  'app/globals.css',
];

let errors = [];
let warnings = [];

// Check if all files exist
console.log('[v0] Checking if all required files exist...');
filesToCheck.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing file: ${file}`);
    console.log(`  ✗ ${file} - NOT FOUND`);
  } else {
    console.log(`  ✓ ${file}`);
  }
});

// Check for common syntax issues
console.log('\n[v0] Checking for syntax issues...');

const layoutContent = fs.readFileSync(path.join(__dirname, '..', 'app/layout.tsx'), 'utf-8');
if (layoutContent.includes('const inter = Inter')) {
  console.log('  ✓ Inter font configured in layout.tsx');
} else {
  warnings.push('Inter font may not be properly configured');
  console.log('  ⚠ Inter font configuration not found');
}

if (layoutContent.includes('--font-inter')) {
  console.log('  ✓ Font variable --font-inter is used');
} else {
  warnings.push('Font variable not properly set');
  console.log('  ⚠ Font variable not found');
}

const globalsContent = fs.readFileSync(path.join(__dirname, '..', 'app/globals.css'), 'utf-8');
if (globalsContent.includes('--font-inter')) {
  console.log('  ✓ globals.css uses --font-inter');
} else {
  warnings.push('globals.css may not reference --font-inter');
  console.log('  ⚠ --font-inter not found in globals.css');
}

const pageContent = fs.readFileSync(path.join(__dirname, '..', 'app/page.tsx'), 'utf-8');
if (pageContent.includes('export default function HomePage()')) {
  console.log('  ✓ HomePage component exported correctly');
} else {
  errors.push('HomePage component not properly exported');
  console.log('  ✗ HomePage component export issue');
}

if (pageContent.includes('return (')) {
  console.log('  ✓ HomePage has return statement');
} else {
  errors.push('HomePage missing return statement');
  console.log('  ✗ HomePage return statement issue');
}

console.log('\n[v0] Build verification complete!\n');

if (errors.length > 0) {
  console.log('❌ ERRORS FOUND:');
  errors.forEach(err => console.log(`  - ${err}`));
  process.exit(1);
} else if (warnings.length > 0) {
  console.log('⚠️  WARNINGS:');
  warnings.forEach(warn => console.log(`  - ${warn}`));
  console.log('\n✅ No critical errors found. Build should proceed.');
  process.exit(0);
} else {
  console.log('✅ All checks passed! Build is ready to proceed.');
  process.exit(0);
}
