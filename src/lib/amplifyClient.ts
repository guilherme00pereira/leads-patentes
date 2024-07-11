import { 
  getCurrentUser, 
  signIn, 
  type SignInInput,
  confirmSignIn, 
  type ConfirmSignInInput,
} from 'aws-amplify/auth';

export const currentAuthenticatedUser = async () => {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
    return true;
  } catch (err) {
      console.log(err);
      return false;
  }
}

export const authenticateUser = async ({username, password}: SignInInput) => {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
    console.log(`The next step: ${nextStep.signInStep}`);
    console.log(`The user is signed in: ${isSignedIn}`);
    if(nextStep.signInStep == 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
      return 2
    }
    return 1;
  } catch (error) {
    console.log('error signing in', error);
    return 0;
  }
}
