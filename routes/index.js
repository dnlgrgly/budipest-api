const { Router } = require("express");
const router = new Router();

const {
  fetchToilets,
  fetchToilet,
  addToilet,
  vote,
  addNote,
  removeNote,
} = require("./toilets.js");

router.get("/toilets", fetchToilets);
router.get("/toilets/:toiletID", fetchToilet);
router.post("/toilets", addToilet);
router.post("/toilets/:toiletID/votes/:userID", vote);
router.post("/toilets/:toiletID/notes/:userID", addNote);
router.delete("/toilets/:toiletID/notes/:userID", removeNote);

module.exports = router;
