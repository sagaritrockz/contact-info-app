//controller.js
	function ContactInformationController($scope, contactInformationFactory, utilFactory) {
		var self = this
			self.contacts = [],
			self.contact = {};
		
		self.saveContact = function (id, form) {
			if (!self.contact.firstName || !self.contact.lastName || !self.contact.email || !self.contact.phone) {
				// Return if field/fields empty.
        utilFactory.toastError('Error: incomplete contact can\'t be created');
				return;
			}

			if (id !== undefined && self.contact.id !== undefined) {
				// For Contact Edit.
				angular.forEach(self.contacts, function (contact) {
					if (contact.id == id) {
						contact = angular.copy(self.contact);
					}
				});
        utilFactory.toastSuccess('Success: contact edited!');
			} else {
				// For new contact.
				self.contact.id = contactInformationFactory.generateId();
				self.contacts.push(self.contact);
        utilFactory.toastSuccess('Success: contact created!');
			}
			self.clearForm();
      form.$setPristine();
      form.$setUntouched();
		}
		
		self.clearForm = function () {
			self.contact = getContactInfoModel();
		}
		
		self.editContact = function (id) {
			self.contact = getContactById(id) || getContactInfoModel();
		}
		
		self.deleteContact = function (id) {
			self.contacts = self.contacts.filter(function (contact) {
				return contact.id != id;
			});
      self.clearForm();
		}
		
		function getContactById (id) {
			var contact = self.contacts.filter(function (contact) {
				return contact.id == id;
			});
			
			return contact[0] || undefined;
		}
		
		function getContactInfoModel () {
			return contactInformationFactory.newContactInfoModel()
		}		
		
		function init () {
			self.contact = getContactInfoModel() || {};
		}
		
		init();
	}
	
	contactInformationApp.controller('ContactInformationController', ['$scope', 'contactInformationFactory', 'utilFactory', ContactInformationController])
