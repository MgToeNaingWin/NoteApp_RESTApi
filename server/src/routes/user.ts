import { Router } from "express";
import { getUserProfile, updateUserProfile, Userlogin, Userlogout, UserRegister } from "../controllers/user.js";
import { protect } from "../middleware/authMiddleware.js";
const router = Router();

router.post("/register", UserRegister);
router.post("/login", Userlogin);
router.post("/logout", Userlogout);
router.route("/profile").get(protect,getUserProfile).put(updateUserProfile)
export default router;