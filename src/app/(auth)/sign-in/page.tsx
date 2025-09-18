import AuthForm from "@/components/AuthForm";
import AuthIllustration from "@/components/AuthIllustration";

const SignIn = () => {
  return (
    <div className="min-h-dvh flex max-lg:flex-col">
      <AuthForm type="sign-in" />
      <AuthIllustration />
    </div>
  );
};

export default SignIn;
