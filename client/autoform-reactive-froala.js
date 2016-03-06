AutoForm.addInputType('reactiveFroala', {
  template: 'afReactiveFroala',
  valueOut: function() {
    var output = $(this).froalaEditor('html.get', true, true);
    return output;
  }
});
