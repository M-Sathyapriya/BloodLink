import express from "express";
import {
  submitBloodRequest,
  getAllBloodRequests,
  updateBloodRequest,
  deleteBloodRequest,
} from "../controller/bloodRequestController.js";

const router = express.Router();

router.post("/submit", submitBloodRequest);
router.get("/all", getAllBloodRequests);
router.put("/update/:id", updateBloodRequest);
router.delete("/delete/:id", deleteBloodRequest);

export default router;
