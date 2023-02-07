import bcrypt from "bcrypt";

import { signin } from "../models/auth/auth.model.js";
import { ValidationError } from "../errors/server-errors.js";
import { AuthenticationError } from "../errors/server-errors.js";

import { VerifyOptions } from "../types/passport.types.js";

type DoneCallback = (error: any, user?: any, options?: VerifyOptions) => void

const AUTH_OPTIONS = {
  usernameField: 'email',
  passwordField: 'password',
};

async function verifyCallback (username: string, password: string, done: DoneCallback){
  try {
    console.log('checking if user exists');
    const user = await signin(username);
    console.log(`user is ${user}`);

    // if (!user) return done(null, false, { message: 'this is an error message' }); // what is the purpose of this? I though it was so passport redirects the user to the 'failureRedirect' route but it is redirecting to the 'successRedirect' route
    
    if (user) {
      console.log('checking password');

      const match = await bcrypt.compare(password, user.password);
      if (!match) throw new AuthenticationError('Contraseña incorrecta o el usuario no existe');
    } else {
      console.log('authentication error throwed!');
      throw new AuthenticationError('Contraseña incorrecta o el usuario no existe');
    };

    console.log('credentials are correct');
    return done(null, user);
  } catch (err) {
    if (err instanceof ValidationError) return done(err);
    if (err instanceof AuthenticationError) return done(err);
  }
}

export {
  AUTH_OPTIONS,
  verifyCallback,
}
