import { Cookies } from "react-cookie";
import { RoutePath } from "../router/Route";

function Auth() {
  const cookie = new Cookies();

  let init = {
    get: () => {
      return cookie.get("Access Token") ? true : false;
    },

    // set: (data) => {
    //   const user = new User();
    //   user.set(data);
    //   cookie.set("user", user.get());
    // },

    remove: () => {
      const ck = cookie.getAll();
      Object.keys(ck).forEach((key, index) => {
        cookie.remove(key);
      });

      setTimeout(() => {
        window.location.href = RoutePath.HOME;
      }, 500);
    },

    check: () => {
      return init.get() ?? false;
    },
  };
  return init;
}

export default Auth;
