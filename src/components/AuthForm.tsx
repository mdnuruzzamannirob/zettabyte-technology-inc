"use client";

import { cn } from "@/lib/utils";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import Logo from "./Logo";
import FormField from "./FormField";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";

interface AuthFormProps {
  type?: "sign-in" | "sign-up";
  className?: string;
}

const AuthForm = ({ type = "sign-in", className }: AuthFormProps) => {
  // just UI (not functional yet)
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  // Google/GitHub login
  const handleOAuthLogin = async (provider: "google" | "github") => {
    try {
      await signIn(provider, {
        callbackUrl: "/dashboard",
        redirect: false,
      });
    } catch (err: any) {
      const message = err?.message || "Something went wrong!";
      alert(message);
    }
  };

  const renderLoginForm = () => (
    <form onSubmit={onSubmit} className="space-y-2">
      <FormField
        label="Email"
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      <FormField
        label="Password"
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      <button
        type="button"
        className="w-full bg-[#208acd] text-sm cursor-pointer text-white py-2 rounded-md hover:bg-[#208acd]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#208acd]"
      >
        Sign In
      </button>
    </form>
  );

  const renderRegisterForm = () => (
    <form onSubmit={onSubmit} className="space-y-2">
      <FormField
        label="Name"
        id="name"
        type="text"
        placeholder="Enter your name"
      />
      <FormField
        label="Email"
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      <FormField
        label="Password"
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      <FormField
        label="Confirm Password"
        id="confirm_password"
        type="password"
        placeholder="Confirm your password"
      />
      <button
        type="button"
        className="w-full bg-[#208acd] text-sm cursor-pointer text-white py-2 rounded-md hover:bg-[#208acd]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#208acd]"
      >
        Sign Up
      </button>
    </form>
  );

  return (
    <div
      className={cn(
        "flex-1 p-10 flex flex-col gap-5 justify-between",
        className
      )}
    >
      <Logo />

      <div className="max-w-md w-full mx-auto">
        <header className="text-center space-y-2 mb-6">
          <h1 className="text-3xl font-bold text-neutral-800">
            {type === "sign-in" ? "Login to your account" : "Create an Account"}
          </h1>
          <p className="text-muted-foreground">
            {type === "sign-in"
              ? "Access your dashboard and appointments."
              : "Join now to streamline your experience from day one."}
          </p>
        </header>

        {type === "sign-in" ? renderLoginForm() : renderRegisterForm()}

        <div className="flex items-center my-4">
          <hr className="flex-1 border-neutral-200" />
          <span className="px-2 text-muted-foreground text-sm">
            Or Continue With
          </span>
          <hr className="flex-1 border-neutral-200" />
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => handleOAuthLogin("google")}
            className="flex-1 flex cursor-pointer items-center justify-center gap-2 border rounded-md py-2 transition-colors hover:bg-neutral-100"
          >
            <FcGoogle size={20} /> Google
          </button>
          <button
            onClick={() => handleOAuthLogin("github")}
            className="flex-1 flex cursor-pointer items-center justify-center gap-2 border rounded-md py-2 transition-colors hover:bg-neutral-100"
          >
            <FaGithub size={20} /> GitHub
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-muted-foreground">
          {type === "sign-in" ? (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-[#208acd] font-semibold">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/sign-in" className="text-[#208acd] font-semibold">
                Sign In
              </Link>
            </>
          )}
        </p>
      </div>

      <footer className="text-sm gap-3 text-muted-foreground flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Medicare. All rights reserved.</p>
        <p>
          Made with ❤️ by{" "}
          <Link
            href="https://www.linkedin.com/in/mdnuruzzamannirobdev/"
            className="font-semibold text-[#208acd] whitespace-nowrap"
          >
            Md. Nuruzzaman
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default AuthForm;
