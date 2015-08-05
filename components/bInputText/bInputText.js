ReactiveForms.createElement({
  template: 'bInputText',
  validationEvent: 'keyup',
  reset: function (el) {
    $(el).val('');
  }
});
