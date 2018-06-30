
function contactInformationFactory () {
  var id = 0;
  return {
    newContactInfoModel: function () {
      return {
        id: undefined,
        firstName: undefined,
        lastName: undefined,
        name: undefined,
        email: undefined,
        phone: undefined,
        isActive: true
      }
    },			
    generateId: function () {
      return ++id;
    }
  }
}

contactInformationApp.factory('contactInformationFactory', contactInformationFactory);
