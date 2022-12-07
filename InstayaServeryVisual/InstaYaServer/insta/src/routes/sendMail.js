const express = require("express");
const mailSchema = require("../models/package");
const Auth = require("../middleware/jwtController");
const router = express.Router();

// Route to get all mails from name of user (update status as well)
router.get("/", Auth, async (req, res, next) => {
  try {
    const name = req.header("name");
    await updateStatus(name);
    const mails = await mailSchema.find({ "fromUser.name": name });
    res.status(200).json(mails);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Route to get one mail from id
router.get("/one", Auth, async (req, res, next) => {
  try {
    const id = req.header("id");
    const mail = await mailSchema.findOne({ id });
    console.log(mail);
    res.status(200).json(mail);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Route to insert new mail
router.post("/", Auth, async (req, res, next) => {
  try {
    const { toDate } = req.body;
    if (!checkTime(new Date(toDate))) {
      throw new Error(
        "La fecha de entrega debe ser al menos 1 día después de la fecha actual"
      );
    }
    const mail = await mailSchema(req.body).save();
    res.status(200).json(mail);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Route to update a mail
router.put("/", Auth, async (req, res, next) => {
  try {
    const id = req.body._id;
    mailSchema.findByIdAndUpdate(id, req.body).then((data) => res.json(data));
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Route to delete a mail
router.delete("/", Auth, async (req, res, next) => {
  try {
    const id = req.body.__id;
    mailSchema.findByIdAndDelete(id).then((data) => res.json(data));
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Function to update mail status
async function updateStatus(userName) {
  const now = new Date();
  try {
    for await (const mail of mailSchema.find({ "fromUser.name": userName })) {
      if (dateDiffInDays(mail.toDate, now) >= 1) {
        console.log(mail);
        mail.status = "Cumplido";
        await mail.save();
      }
    }
  } catch (err) {
    console.log(err);
  }
}

function checkTime(mailDate) {
  const now = new Date();
  return dateDiffInDays(now, mailDate) >= 1;
}

// Auxiliar function to update mail status
function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

module.exports = router;
