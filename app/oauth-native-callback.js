import { Redirect } from "expo-router";

const AuthenticationRedirect = () => {
  return <Redirect href="/home/(tabs)" />;
};

export default AuthenticationRedirect;
