import {Router} from 'express';
import {loginUser, logoutUser, registerUser} from '../controllers/auth.controller.js';
import {registerSchema, loginSchema} from '../validators/validations-auth.js';
import {validateRequest} from '../middlewares/validations.js';

const router= Router();

router.route('/register').post(validateRequest(registerSchema), registerUser);
router.route('/login').post(validateRequest(loginSchema), loginUser);
router.route('/logout').post(logoutUser);

export default router;