"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { dark } from "@clerk/themes";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useCurrentTheme } from "@/hooks/use-current-theme";

const Header = () => {
  const { theme } = useCurrentTheme();

  return (
    <header className="p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent">
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Frame AI" width={32} height={32} />
          <span className="text-2xl font-bold">Frame AI</span>
        </Link>
        <SignedOut>
          <div className="flex gap-2">
            <SignUpButton>
              <Button size="sm" variant="outline">
                Sign Up
              </Button>
            </SignUpButton>
            <SignInButton>
              <Button size="sm" variant="outline">
                Sign In
              </Button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton
            showName
            appearance={{
              elements: {
                userButtonBox: "rounded-md!",
                userButtonTrigger: "rounded-md!",
                userButtonAvatarBox: "rounded-md! size-8!",
              },
              theme: theme === "dark" ? dark : undefined,
            }}
          />
        </SignedIn>
      </div>
    </header>
  );
};

export { Header };
