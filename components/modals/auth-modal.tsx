"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { Eye, EyeSlash, PasswordCheck, Profile, Sms } from "iconsax-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0">
        <div className="p-6 space-y-6">
          <DialogHeader className="space-y-2">
            <Image
              src="/images/logo.svg"
              alt="Facility Logo"
              width={120}
              height={40}
              className="mx-auto h-16 md:h-36 w-auto"
            />
            <DialogTitle className="text-xl font-semibold text-center">
              {isLogin ? (
                "Shop Smarter, Faster"
              ) : (
                <>
                  Create <span className="text-primary">New Account</span>
                </>
              )}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <Profile
                  className="absolute left-3 top-2.5 h-5 w-5 fill-muted-foreground"
                  variant="Outline"
                />
                <Input
                  type="text"
                  placeholder="Username"
                  className="pl-10 bg-secondary border-0 !rounded-full"
                />
              </div>
            )}

            <div className="relative">
              <Sms
                className="absolute left-3 top-2.5 h-5 w-5 fill-muted-foreground"
                variant="Outline"
              />
              <Input
                type="email"
                placeholder="Email"
                className="pl-10 bg-secondary border-0 !rounded-full"
              />
            </div>

            <div className="relative">
              <PasswordCheck
                className="absolute left-3 top-2.5 h-5 w-5 fill-muted-foreground"
                variant="Outline"
              />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="pl-10 pr-10 bg-secondary border-0 !rounded-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5"
              >
                {showPassword ? (
                  <EyeSlash
                    className="h-5 w-5 fill-muted-foreground"
                    variant="Outline"
                  />
                ) : (
                  <Eye
                    className="h-5 w-5 fill-muted-foreground"
                    variant="Outline"
                  />
                )}
              </button>
            </div>

            {!isLogin && (
              <div className="relative">
                <PasswordCheck
                  className="absolute left-3 top-2.5 h-5 w-5 fill-muted-foreground"
                  variant="Outline"
                />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repeat Password"
                  className="pl-10 pr-10 bg-secondary border-0 !rounded-full"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2.5"
                >
                  {showConfirmPassword ? (
                    <EyeSlash
                      className="h-5 w-5 fill-muted-foreground"
                      variant="Outline"
                    />
                  ) : (
                    <Eye
                      className="h-5 w-5 fill-muted-foreground"
                      variant="Outline"
                    />
                  )}
                </button>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-muted-foreground">
                    Remember me
                  </label>
                </div>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/90 p-0"
                >
                  Forget password?
                </Button>
              </div>
            )}

            <Button className="w-full bg-primary hover:bg-primary/90 rounded-full">
              {isLogin ? "Login" : "Create New Account"}
            </Button>

            <div className="text-center">
              <Button
                variant="secondary"
                className="w-full text-muted-foreground hover:bg-slate-200 rounded-full"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Create new account" : "Already have account?"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
