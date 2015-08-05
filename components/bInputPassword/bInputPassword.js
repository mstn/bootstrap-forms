ReactiveForms.createElement({
  template: 'bInputPassword',
  validationEvent: 'keyup',
  reset: function (el) {
    $(el).val('');
  }
});
