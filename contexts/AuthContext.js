import { createContext, useState } from "react";
import { AxiosGet, AxiosPost } from "../shared/axiosService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { handleErrors } from "../shared/handleErrors";
import axios from "axios";
export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, SetLoggedIn] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [userInfo, setUserinfo] = useState({});
  const [userProfile, setUserProfile] = useState({});

  const login = (username, password) => {
    setIsloading(true);
    AxiosPost(
      "users/login",
      JSON.stringify({ username: username, password: password }),
      (result) => {
        setIsloading(false);
        if (result.data.success === true) {
          SetLoggedIn(true);
          setUserinfo(result.data.body.userInfo);
          setUserProfile(result.data.body.profile);
          AsyncStorage.setItem("token", result.data.body.token)
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });
        } else {
          handleErrors(result.data.errors);
        }
      },
      (error) => {
        console.log(error);
        setIsloading(false);
      }
    );
  };

  const logout = () => {
    setIsloading(true);
    AxiosGet(
      "users/logout",
      {},
      (result) => {
        setIsloading(false);
        if (result.data.success === true) {
          SetLoggedIn(false);
          setUserinfo({});
          setUserProfile({});
          AsyncStorage.removeItem("token")
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });
        } else handleErrors(result.data.errors);
      },
      (error) => {
        console.log(error);
        setIsloading(false);
      }
    );
  };
  return (
    <Authcontext.Provider
      value={{
        login,
        logout,
        isLoading,
        loggedIn,
        SetLoggedIn,
        userInfo,
        userProfile,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};
