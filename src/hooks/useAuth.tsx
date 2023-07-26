import React, { createContext, useContext, useEffect, useState } from "react";
import { Amplify, Auth, API } from "aws-amplify";
import { generalConfig, adminConfig } from "../lib/aws-exports";

interface UseAuth {
  isAuthenticated: boolean;
  isAdmin: boolean;
  username: string;
  mail: string;
  avatar: string;
  signIn: (username: string, password: string) => Promise<Result>;
  signOut: () => void;
  listUsers: () => Promise<any>;
  adminSignIn: (username: string, password: string) => Promise<Result>;
}

interface Result {
  success: boolean;
  message: string;
}

type Props = {
  children?: React.ReactNode;
};

const authContext = createContext({} as UseAuth);

export const ProvideAuth: React.FC<Props> = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = (): UseAuth => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;
    Auth.currentAuthenticatedUser()
      .then((result) => {
        setUsername(result.username);
        setMail(result.challengeParam.userAttributes.email);
        setAvatar(result.challengeParam.userAttributes.picture);
        setIsAuthenticated(true);
      })
      .catch(() => {
        setUsername("");
        setAvatar("");
        setIsAuthenticated(false);
      });
  }, []);

  const signIn = async (username: string, password: string) => {
    Amplify.configure({
      Auth: {
        region: generalConfig.REGION,
        userPoolId: generalConfig.USER_POOL_ID,
        userPoolWebClientId: generalConfig.USER_POOL_APP_CLIENT_ID,
      },
    });

    try {
      const user = await Auth.signIn(username, password);
      setUsername(user.username);
      setMail(user.challengeParam.userAttributes.email);
      setIsAuthenticated(true);
      setIsAdmin(false)
      return { success: true, message: "Usre logged in" };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Erro ao fazer login, contate o Administrador.",
      };
    }
  };

  const adminSignIn = async (username: string, password: string) => {
    Amplify.configure({
      Auth: {
        region: adminConfig.REGION,
        userPoolId: adminConfig.USER_POOL_ID,
        userPoolWebClientId: adminConfig.USER_POOL_APP_CLIENT_ID,
      },
    });
    try {
      const user = await Auth.signIn(username, password);
      // if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
      //   const loggedUser = await Auth.completeNewPassword(
      //     user, // the Cognito User Object,
      //     "L3@d2#Admin", // the new password
      //     {
      //       name: user.username,
      //       middle_name: user.challengeParam.userAttributes.middle_name,
      //     }
      //   );
      //   console.log(loggedUser);
      // } else {
        setUsername(user.username);
        setIsAuthenticated(true);
        setIsAdmin(true)
      // }
      return { success: true, message: "Admin logged in" };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Erro ao fazer login, contate o Administrador.",
      };
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUsername("");
      setIsAuthenticated(false);
      return { success: true, message: "" };
    } catch (error) {
      return {
        success: false,
        message: "LOGOUT FAIL",
      };
    }
  };

  let nextToken: string = "";

  const listUsers = async () => {
    try {
      let apiName = "AdminQueries";
      let path = "/listUsersInGroup";
      let myInit = {
        queryStringParameters: {
          groupname: "Editors",
          limit: "10",
          token: nextToken,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${(await Auth.currentSession())
            .getAccessToken()
            .getJwtToken()}`,
        },
      };
      const { NextToken, ...rest } = await API.get(apiName, path, myInit);
      nextToken = NextToken;
      return rest;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isAuthenticated,
    isAdmin,
    username,
    mail,
    avatar,
    signIn,
    signOut,
    listUsers,
    adminSignIn,
  };
};
