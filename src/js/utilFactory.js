// utils.js
	function utilFactory () {
    return {
      toastError: function (message) {
        Materialize.toast(message, 5000, 'red darken-2');    
      },      
      toastSuccess: function (message) {    
        Materialize.toast(message, 5000, 'green darken-3');
      }
    }
  }

  contactInformationApp.factory('utilFactory', utilFactory);