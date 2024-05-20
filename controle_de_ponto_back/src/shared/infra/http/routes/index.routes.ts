import { Router } from "express";

import { userRoute } from "../../../../modules/usuarios/routes/User.routes";
import { timesRoute } from "../../../../modules/entradas/routes/Times.routes";

const router = Router();

router.use("/user", userRoute);
router.use("/times", timesRoute);

export { router };
