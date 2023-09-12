const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const DataModel = require("./model/Data");

app.use(express.json());
app.use(cors());


mongoose.connect(
  'mongodb+srv://alenjbabum:alen123@cluster0.btxatwk.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  },
  console.log('Connected')
)

app.post("/insert", async (req, res) => {

  const regnum = req.body.regnum
  const dept = req.body.dept
  const role = req.body.role
  const data = new DataModel({
    regnum: regnum,
    dept: dept,
    role: role,
   
  });
try{
  await data.save();


} catch(err) {
  console.log(err);
}

});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});