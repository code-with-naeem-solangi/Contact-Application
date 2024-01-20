const ContactApp = [
  {
    name: "Ahmad Ali",
    age: "23",
    contactNumbr: "03079330284",
    profileImage:
      "https://th.bing.com/th/id/OIG.m4JY7OWOQP7o2qk_iqgi?w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
    gender: "Male",
    id: Math.random(),
  },
];
const contactCreate = () => {
  return ContactApp;
};
const addNewContact = (contactDetails) => {
  const contct = {
    ...contactDetails,
    id: Math.random(),
  };
  ContactApp.unshift(contct);
  return contct;
};
const contactDelete = (id) => {
  const index = ContactApp.findIndex((cntct) => cntct.id == id);
  console.log(index, "index");
  if (index !== -1) {
    ContactApp.splice(index, 1);
    return true;
  } else {
    return false;
  }
};
const EditContact = (contct) => {
  const index = ContactApp.findIndex((b) => b.id == contct.id);

  if (index !== -1) {
    ContactApp.splice(index, 1, contct);
    return true;
  } else {
    return false;
  }
};
module.exports = {
  contactCreate,
  addNewContact,
  contactDelete,
  EditContact,
};
