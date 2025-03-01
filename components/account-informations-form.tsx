"use client";

import { useState } from "react";

import {
  Eye,
  EyeSlash,
  Mobile,
  PasswordCheck,
  Profile,
  Sms,
} from "iconsax-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AccountInformationsForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Profile
          className="absolute left-3 top-2.5 h-5 w-5 fill-muted-foreground"
          variant="Outline"
        />
        <Input
          type="text"
          placeholder="Full Name"
          className="pl-10 bg-secondary border-0 !rounded-full"
        />
      </div>

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
        <Mobile
          className="absolute left-3 top-2.5 h-5 w-5 fill-muted-foreground"
          variant="Outline"
        />
        <Input
          type="tel"
          placeholder="Phone Number"
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
            <Eye className="h-5 w-5 fill-muted-foreground" variant="Outline" />
          )}
        </button>
      </div>
      <Button className="w-full bg-primary hover:bg-primary/90 rounded-full">
        Save
      </Button>
    </div>
  );
};

export default AccountInformationsForm;
