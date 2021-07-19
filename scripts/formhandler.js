(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);

    if (this.$formElement.length === 0) {
      throw new Error('Could not find selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function() {
    this.$formElement.on('submit', function(event) {
      event.preventDefault();

      var data = $(this).serializeArray();
      console.log(data);
      this.reset();
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
