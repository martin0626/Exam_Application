import AuthComponent from "../components/Auth/AuthComponent";

const AuthPage = () => {
  return <AuthComponent />;
};

export default AuthPage;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("action") || "login";

  const formData = await request.formData();
  let authData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  if (mode === "signUp") {
    authData = {
      ...authData,
      phone: formData.get("phone"),
      role: formData.get("role"),
    };
  }

  console.log(authData);
  return null;
};
