
function ContactInformationController($scope, contactInformationFactory, utilFactory, CONSTANTS) {
  $scope.contacts = [];
  $scope.contact = {};
  $scope.contactFormName = CONSTANTS.addContact;  
  
  $scope.saveContact = function (id, form) {
    if (!$scope.contact.firstName || !$scope.contact.lastName || !$scope.contact.email || !$scope.contact.phone) {
      // Return if field/fields empty.
      utilFactory.toastError(CONSTANTS.errorMsg);
      return;
    }

    if (id !== undefined && $scope.contact.id !== undefined) {
      // For Contact Edit.
      angular.forEach($scope.contacts, function (contact) {
        if (contact.id == id) {
          $scope.contact.name = buildNameString($scope.contact.firstName, $scope.contact.lastName);
          contact = angular.copy($scope.contact);
          utilFactory.toastSuccess(CONSTANTS.editSuccessMsg);
        }
      });
    } else {
      // For new contact.
      $scope.contact.id = contactInformationFactory.generateId();
      $scope.contact.name = buildNameString($scope.contact.firstName, $scope.contact.lastName);
      $scope.contacts.push($scope.contact);
      utilFactory.toastSuccess(CONSTANTS.addSuccessMsg);
    }
    $scope.clearForm(form);
  }
  
  $scope.clearForm = function (form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.contact = getContactInfoModel();
    $scope.contactFormName = CONSTANTS.addContact;
  }
  
  $scope.editContact = function (id) {
    $scope.contact = getContactById(id) || getContactInfoModel();
    $scope.contactFormName = CONSTANTS.editContact;
  }
  
  $scope.deleteContact = function (id) {
    $scope.contacts = $scope.contacts.filter(function (contact) {
      return contact.id != id;
    });
    utilFactory.toastSuccess(CONSTANTS.deleteSuccessMsg);
    $scope.clearForm();
  }

  function buildNameString (fName, lName) {
    return fName + ' ' + lName;
  }

  function getContactById (id) {
    var contact = $scope.contacts.filter(function (contact) {
      return contact.id == id;
    });
    
    return contact[0] || undefined;
  }
  
  function getContactInfoModel () {
    return contactInformationFactory.newContactInfoModel()
  }		
  
  function init () {
    $scope.contact = getContactInfoModel() || {};
  }
  
  init();
}

contactInformationApp.controller('ContactInformationController', ['$scope', 'contactInformationFactory', 'utilFactory', 'CONSTANTS', ContactInformationController])
