Package.describe({
  name: 'mstn:bootstrap-forms',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/mstn/bootstrap-forms',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('templating');
  api.use('templates:forms@1.14.2');

  // furnax components
  api.addFiles([
    'components/bForm/bForm.html',
    'components/bForm/bForm.js',
    'components/bForm/bInput.html',
    'components/bForm/bInput.js',
    'components/bInputText/bInputText.html',
    'components/bInputText/bInputText.js',
    'components/bInputPassword/bInputPassword.html',
    'components/bInputPassword/bInputPassword.js'
  ], 'client');

});
