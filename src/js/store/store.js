var store = {};
var contacts = [
  {
    id: 1,
    name: "Mayank",
    phoneNo: "1234567890"
  }, {
    id: 2,
    name: "Vivekanad",
    phoneNo: "1234567890"
  }, {
    id: 3,
    name: "Nagababu",
    phoneNo: "1234567890"
  },{
    id: 4,
    name: "Ayush",
    phoneNo: "1234567890"
  }
];

function getContacts () {
  return contacts;
}

function getContactById(id) {
  var filterdContacts = contacts.filter((contact)=>{
    return contact.id == id;
  });
  return filterdContacts.length > 0 ? filterdContacts[0] : {};
}
function updateContact(contactForUpdate) {
  return contacts.map((contact)=>{
    if(contactForUpdate.id == contact.id) {
      return contactForUpdate;
    }
    return contact;
  });
}
store.getContacts = getContacts;
store.getContactById = getContactById;
store.updateContact = updateContact;
export default store;
