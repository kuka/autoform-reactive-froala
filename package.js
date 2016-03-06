Package.describe({
  name: 'kukasix:autoform-reactive-froala',
  version: '0.0.1',
  summary: 'Reactive Autoform Package of Froala v2. Has templates and S3 image upload.',
  git: 'https://github.com/kuka/autoform-reactive-froala',
  documentation: 'README.md'
});

Npm.depends({ "busboy": "0.2.9" });

Package.onUse(function(api) {
  api.use([
    'lepozepo:s3@5.1.5',
    'froala:editor@2.0.1_1',
    'templating@1.0.0',
    'aldeed:autoform@5.7.1', 
    'iron:router@1.0.12'
  ], [
    'client', 
    'server'
  ]);
  api.addFiles([
    'client/autoform-reactive-froala.js',
    'client/afReactiveFroala.html', 
    'client/afReactiveFroala.js'
  ], 'client');
  
  // there is a bug with Router.onBeforeAction
  api.addFiles([ 'server/imageUpload.js' ], 'server');
});
