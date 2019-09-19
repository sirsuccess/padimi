import express from "express";
import PadimiController from "../controllers/padimi.controller";

const router = express.Router();

router.get("/padi_lite", PadimiController.getPadiLite);

router.get("/padi_start", PadimiController.getPadiStart);

router.get("/padi_connect", PadimiController.getPadiConnect);

router.get("/padi_premium", PadimiController.getPadiPremium);

router.get("/hospitals", PadimiController.getHospitals);

export default router;
