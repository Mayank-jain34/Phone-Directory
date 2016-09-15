import Store from '../src/js/store/store';

describe("Checking Store's APIs",()=>{
  it("Checking default contacts count",()=>{
    expect(Store.getContacts().length).toBe(4);
  });
  it("Checking getContactById API",()=>{
    expect(Store.getContactById(1).id).toBe(1);
  });
});
