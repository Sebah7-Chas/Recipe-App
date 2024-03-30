 import { User } from "./user";

  export interface Loggedin {
  user: User | undefined;
  loginState: boolean;
}
