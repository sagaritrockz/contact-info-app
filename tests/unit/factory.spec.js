describe('contactInformationFactory', function () {
  var testData, id;
  beforeEach(module('contactInformationApp'));
	beforeEach(inject(function (_contactInformationFactory_) {
    contactInformationFactory = _contactInformationFactory_;
    testData = {
      contactModel : {id: undefined, firstName: undefined, lastName: undefined, name: undefined, email: undefined, phone: undefined, isActive: true}
    },
    id = 0;
  }));

  it('contactInformationFactory is defined', function () {
      expect(contactInformationFactory).toBeDefined();
  });

  it('newContactInfoModel() returns contact model', function () {
    expect(contactInformationFactory.newContactInfoModel()).toEqual(testData.contactModel);
  });

  it('generateId() generates id', function () {
    expect(contactInformationFactory.generateId()).toEqual(++id);
    expect(contactInformationFactory.generateId()).toEqual(++id);
    expect(contactInformationFactory.generateId()).toEqual(++id);
    expect(contactInformationFactory.generateId()).toEqual(++id);
  });
});