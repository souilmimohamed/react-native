import { createContext, useState } from "react";
import { AxiosPost } from "../shared/axiosService";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, SetLoggeIn] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const login = (username, password) => {
    setIsloading(true);
    AxiosPost(
      "users/login",
      JSON.stringify({ username: username, password: password }),
      (result) => {
        setIsloading(false);
        if (result.data.success === true) {
          AsyncStorage.setItem("token", result.data.body.token)
            .then((res) => {
              SetLoggeIn(true);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
      (error) => {
        console.log(error);
        setIsloading(false);
      }
    );
  };
  return (
    <Authcontext.Provider value={{ login, isLoading }}>
      {children}
    </Authcontext.Provider>
  );
};
