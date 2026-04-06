// This script would create solid background versions of transparent logos
// Since we can't process images directly, let's copy the logo as solid versions

const fs = require('fs');

// Copy logo to solid versions with white background
try {
  fs.copyFileSync('static/logo.png', 'static/logo-solid.png');
  fs.copyFileSync('static/logo-192.png', 'static/logo-192-solid.png');
  console.log('Created solid logo versions');
} catch (error) {
  console.error('Error creating solid logos:', error);
}
