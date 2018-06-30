
function utilFactory () {
  return {
    toastError: function (message) {
      Materialize.toast(message, 2000, 'red darken-2');    
    },
    toastSuccess: function (message) {
      Materialize.toast(message, 2000, 'green darken-3');
    }
  }
}

contactInformationApp.factory('utilFactory', utilFactory);