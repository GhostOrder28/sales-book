import express from "express";
import { httpSignupGuest, httpDeleteGuests } from './guests.controller.js';
const authRouter = express.Router();
authRouter.get('/', httpSignupGuest);
authRouter.delete('/', httpDeleteGuests);
export default authRouter;
