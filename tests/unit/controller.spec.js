
describe('ContactInformationController', function() {
  var controller, $scope, contactInformationFactory, utilFactory, CONSTANTS, testData;

  beforeEach(module('contactInformationApp'));

  beforeEach(inject(function($controller, _$rootScope_, _contactInformationFactory_, _utilFactory_, _CONSTANTS_) {
      $rootScope = _$rootScope_;
      $scope = _$rootScope_.$new();
      contactInformationFactory = _contactInformationFactory_;
      utilFactory = _utilFactory_;
      CONSTANTS = _CONSTANTS_;
      testData = {
        id: 1,
        getContactById : function() {},
        contactModel : {id: undefined, firstName: undefined, lastName: undefined, name: undefined, email: undefined, phone: undefined, isActive: true},
        filteredContacts: [{id: 2, firstName: 'Tony', lastName: 'Stark', name: 'Tony Stark', email: 'tony.stark@gmail.com', phone: '0987654321', isActive: true}],
        utilFactory: { toastSuccess : function () {} },
        CONSTANTS: {deleteSuccessMsg : '', addContact: 'Add Contact', editContact: 'Edit Contact', errorMsg: 'Error: incomplete contact can\'t be created'},
        contacts: [{id: 1, firstName: 'Bruce', lastName: 'Wayne', name: 'Bruce Wayne', email: 'bruce.wayne@gmail.com', phone: '1234567890', isActive: true}, {id: 2, firstName: 'Tony', lastName: 'Stark', name: 'Tony Stark', email: 'tony.stark@gmail.com', phone: '0987654321', isActive: true}],
        form : {
          $setPristine: function(){},
          $setUntouched: function(){}
        },
        getContactInfoModel : function() {},
        contactModel : {id: undefined, firstName: undefined, lastName: undefined, name: undefined, email: undefined, phone: undefined, isActive: true}
      }
      
      // Init the controller
      controller = $controller('ContactInformationController', {
          $scope: $scope,
          contactInformationFactory: contactInformationFactory,
          utilFactory: utilFactory, 
          CONSTANTS: CONSTANTS,
          testData: testData
      });
  }));
  

  it('ContactInformationController is defined', function() {
      expect(controller).toBeDefined();
  });
  
  it('editContact() edits the selected contact', function() {
    var getContactById =  testData.getContactById,
      getContactInfoModel = testData.getContactInfoModel,
      CONSTANTS = {editContact: testData.CONSTANTS.editContact}
      id = testData.id,
      contactModel = testData.contactModel;
    $scope.editContact(id);
    expect($scope.contact).toEqual(contactModel);
    expect($scope.contactFormName).toBe('Edit Contact');  
  });
 
  it('deleteContact() deletes a contact', function() {
    var id = testData.id,
      filteredContacts = testData.filteredContacts,
      CONSTANTS = {deleteSuccessMsg: testData.deleteSuccessMsg};
    $scope.contacts = testData.contacts;
    $scope.deleteContact(id);
    expect($scope.contacts).toEqual(filteredContacts);
  });

  it('clearForm() resets the contact form', function() {
    var form = testData.form,
      contactModel = testData.contactModel;
    $scope.contact = testData.contact;
    $scope.clearForm(form);
    expect($scope.contact).toEqual(contactModel);
    expect($scope.contactFormName).toBe(testData.CONSTANTS.addContact);  
  });
  
  it('saveContact() saves the contact information', function() {
    // first If condition.
    var form = testData.form,
      id = undefined;
    $scope.contact = testData.contactModel;
    $scope.saveContact(id, form);

    //  Else condition.
    var CONSTANTS = {errorMsg: testData.errorMsg};
    var contactInformationFactory = {generateId: function(){return 1;}};
    $scope.saveContact(id, form);
    $scope.contacts.push(testData.contacts[0]);
    expect($scope.contact).toEqual(testData.contactModel);
    expect($scope.contacts).toEqual(testData.contacts.slice(0,1));
    
    // Second If condtion.
    id = 1;
    var modifiedData = {}; 
    $scope.contacts[0].firstName = testData.contacts[1].firstName;
    $scope.contacts[0].lastName = testData.contacts[1].lastName;
    modifiedData = $scope.contacts[0];
    var buildNameString = function () {return testData.contacts[1].name};
    expect($scope.contacts[0]).toEqual(modifiedData);
  });

});
