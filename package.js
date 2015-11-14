Package.describe({
  name: 'patrickml:http-status',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A Configuration to help developers use the correct http status codes',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/patrickml/http-status',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('http-status.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('patrickml:http-status');
  api.addFiles('http-status-tests.js');
});
