Package.describe({
  name: 'kukasix:autoform-reactive-froala',
  version: '0.0.3',
  summary: 'Reactive Autoform Package of Froala v2. Has templates and S3 image upload.',
  git: 'https://github.com/kuka/autoform-reactive-froala',
  documentation: 'README.md'
});

Npm.depends({
  'aws-sdk' : '2.4.9',
  'busboy'  : '0.2.13'
});

Package.onUse(function(api) {
  api.use([
    'froala:editor@2.3.4',
    'templating@1.0.0',
    'aldeed:autoform@5.7.1', 
    'iron:router@1.0.12',
    'reactive-var@1.0.9'
  ], [
    'client', 
    'server'
  ]);

  api.addFiles([
    'client/autoform-reactive-froala.js',
    'client/afReactiveFroala.html', 
    'client/afReactiveFroala.js',
  ], 'client');

  api.addFiles([
   'server/imageUpload.js'
  ], 'server');
});
