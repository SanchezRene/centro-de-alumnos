"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");
const periodoController = require("../controllers/periodo.controller.js");

const authorizationMiddleware = require("../middlewares/authorization.middleware.js");
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");
const router = express.Router();
router.use(authenticationMiddleware);

// Define las rutas para los periodos api/periodo
router.get("/", authorizationMiddleware.isAdmin, periodoController.getPeriodos);
router.post(
  "/",
  authorizationMiddleware.isTricelorAdmin,
  periodoController.createPeriodo,
);
router.put(
  "/:id",
  authorizationMiddleware.isTricelorAdmin,
  periodoController.updatePeriodo,
);
router.delete(
  "/:id",
  authorizationMiddleware.isTricelorAdmin,
  periodoController.deletePeriodo,
);

module.exports = router;
