import {
  getCurrentUser,
  signIn,
  type SignInInput,
  resetPassword,
  confirmResetPassword,
  type ConfirmResetPasswordInput,
  signOut
} from "aws-amplify/auth";

export const currentAuthenticatedUser = async () => {
  try {
    const output = await getCurrentUser();
    console.log(`The current user is: ${output.username}`);
    return output;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const authenticateUser = async ({ username, password }: SignInInput) => {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
    console.log(`The next step: ${nextStep.signInStep}`);
    console.log(`The user is signed in: ${isSignedIn}`);
    if (nextStep.signInStep == "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED") {
      return 2;
    }
    return 1;
  } catch (error) {
    console.log("error signing in", error);
    return 0;
  }
};

export const recoverPassword = async (username: string) => {
  try {
    const output = await resetPassword({ username });
    console.log(`The result: ${output}`);
    const { nextStep } = output;

    switch (nextStep.resetPasswordStep) {
      case "CONFIRM_RESET_PASSWORD_WITH_CODE":
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        console.log(`Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`);
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case "DONE":
        console.log("Successfully reset password.");
        break;
    }
    return { success: true, message: "" };
  } catch (error) {
    console.log("error recovering password", error);
    return { success: false, message: error };
  }
};

export const handleConfirmResetPassword = async ({
  username,
  confirmationCode,
  newPassword
}: ConfirmResetPasswordInput) => {
  try {
    await confirmResetPassword({ username, confirmationCode, newPassword });
    return { success: true, message: "" };
  } catch (error) {
    console.log(error);
    return { success: false, message: error };
  }
};

export const handleSignOut = async () => {
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}