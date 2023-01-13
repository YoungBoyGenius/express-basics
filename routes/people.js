const express = require("express");
const router = express.Router();
const {
  getPeople,
  postPeople,
  postPeopleThunder,
  putPerson,
  deletePerson,
} = require("../contrillers/people");

router.get("/", getPeople);

router.post("/", postPeople);

router.post("/thunder", postPeopleThunder);

router.put("/:id", putPerson);

router.delete("/:id", deletePerson);

module.exports = router;
