import React, { createContext, useContext, useEffect, useState } from "react";
import { Amplify, Auth, API } from "aws-amplify";
import awsExports from "../lib/aws-exports";

interface UseAuth {
  isAuthenticated: boolean;
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

  useEffect(() => {
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
        region: awsExports.REGION,
        userPoolId: awsExports.USER_POOL_ID,
        userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
      },
    });

    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      // if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
      //   const loggedUser = await Auth.completeNewPassword(
      //     user, // the Cognito User Object,
      //     'L3@d2#Admin', // the new password
      //     {
      //       name: user.username,
      //       middle_name: user.challengeParam.userAttributes.middle_name,
      //     }
      //   );
      //   console.log(loggedUser);
      // } else {
        setUsername(user.username);
        setMail(user.challengeParam.userAttributes.email);
        setIsAuthenticated(true);
      // }
      return { success: true, message: "" };
    } catch (error) {
      return {
        success: false,
        message: "LOGIN FAIL",
      };
    }
  };

  const adminSignIn = async (username: string, password: string) => {
    Amplify.configure({
      Auth: {
        region: process.env.REACT_APP_ADMIN_REGION,
        userPoolId: process.env.REACT_APP_ADMIN_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_ADMIN_USER_POOL_APP_CLIENT_ID,
      },
    });
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      
        setUsername(user.username);
        setMail(user.challengeParam.userAttributes.email);
        setIsAuthenticated(true);
      
      return { success: true, message: "" };
    } catch (error) {
      return {
        success: false,
        message: "LOGIN FAIL",
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
    username,
    mail,
    avatar,
    signIn,
    signOut,
    listUsers,
    adminSignIn
  };
};
