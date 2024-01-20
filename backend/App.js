const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
var bodyParse = require("body-parser");
const {
  contactCreate,
  addNewContact,
  contactDelete,
  EditContact,
} = require("./index");
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

app.use(cors());
app.get("/", (req, res) => {
  console.log(res);
  const createApp = contactCreate();
  res.send(createApp);
});

app.post("/new-contact", (req, res) => {
  const newcontactnumbr = addNewContact(req.body);
  res.send(newcontactnumbr);
});
app.delete("/contact/:user_id", (req, res) => {
  console.log("Request for new blog", req.params);
  const { user_id } = req.params;
  console.log(user_id);
  const card = contactDelete(user_id);
  if (card) {
    res.send({
      message: "Card Delete ",
    });
    return;
  }
  res.status(500);
  res.send({
    message: "Card Not Delete ",
  });
});
app.put("/contact/contact-edit", (req, res) => {
  const cntct = req.body;
  const contact = EditContact(cntct);
  if (contact) {
    res.send({
      message: "Contact Updated",
    });
    return;
  }
  res.status(500);
  res.send({
    message: "Contact Not found ",
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
