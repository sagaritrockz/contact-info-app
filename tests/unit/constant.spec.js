describe('CONSTANTS', function () {
  var testData;
  beforeEach(module('contactInformationApp'));
	beforeEach(inject(function (_CONSTANTS_) {
    CONSTANTS = _CONSTANTS_;
    testData = {
        addContact: 'Add Contact',
        editContact: 'Edit Contact',
        errorMsg: 'Error: incomplete contact can\'t be created',
        addSuccessMsg: 'Success: contact created!',
        editSuccessMsg: 'Success: contact edited!',
        deleteSuccessMsg: 'Success: contact deleted!'
      };
  }));

  it('CONSTANTS is defined', function () {
      expect(CONSTANTS).toBeDefined();
  });

  it('CONSTANTS object', function () {
    expect(CONSTANTS).toEqual(testData);
  });
});