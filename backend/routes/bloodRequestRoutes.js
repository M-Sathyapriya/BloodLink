import express from "express";
import {
  submitBloodRequest,
  getAllBloodRequests,
  updateBloodRequest,
  deleteBloodRequest,
} from "../controller/bloodRequestController.js";

const router = express.Router();

// POST - submit a blood request
router.post("/submit", submitBloodRequest);

// GET - get all blood requests
router.get("/all", getAllBloodRequests);

// PUT - update blood request by id
router.put("/:id", updateBloodRequest);

// DELETE - delete blood request by id
router.delete("/:id", deleteBloodRequest);

export default router;
