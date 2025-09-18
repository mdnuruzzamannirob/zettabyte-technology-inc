import AuthForm from "@/components/AuthForm";
import AuthIllustration from "@/components/AuthIllustration";

const SignUp = () => {
  return (
    <div className="min-h-dvh flex max-lg:flex-col">
      <AuthForm type="sign-up" />
      <AuthIllustration />
    </div>
  );
};

export default SignUp;
