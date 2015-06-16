Package.describe({
  name: 'em0ney:jstz',
  version: '1.0.5',
  summary: 'Meteor packaged version of JSTZ - jsTimezoneDetect',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('jstz.js');
  api.export('jstz');
});
