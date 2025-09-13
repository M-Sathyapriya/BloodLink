import express from "express";
import {
  submitDonation,
  getAllDonations,
  updateDonation,
  deleteDonation,
} from "../controller/donationController.js";

const router = express.Router();

router.post("/submit", submitDonation);
router.get("/all", getAllDonations);
router.put("/update/:id", updateDonation);
router.delete("/delete/:id", deleteDonation);

export default router;
