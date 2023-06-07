import React, { createContext, useContext, useEffect, useState } from "react";
import { Amplify, Auth } from 'aws-amplify'
import awsExports from '../lib/aws-exports'

Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
  },
})

interface UseAuth {
  isAuthenticated: boolean;
  username: string;
  mail: string;
  avatar: string;
  signIn: (username: string, password: string) => Promise<Result>;
  signOut: () => void;
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
        setMail(result.challengeParam.userAttributes.email)
        setAvatar(result.challengeParam.userAttributes.picture)
        setIsAuthenticated(true);
      })
      .catch(() => {
        setUsername("");
        setAvatar("");
        setIsAuthenticated(false);
      });
  }, []);

  const signIn = async (username: string, password: string) => {
    try {
      const result = await Auth.signIn(username, password);
      setUsername(result.username);
      setMail(result.challengeParam.userAttributes.email)
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

  return {
    isAuthenticated,
    username,
    mail,
    avatar,
    signIn,
    signOut,
  };
};