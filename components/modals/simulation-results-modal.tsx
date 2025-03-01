"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AuthModal } from "./auth-modal";

interface SimulationResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  salary: number;
  duration: number;
  age: number;
}

export function SimulationResultsModal({
  isOpen,
  onClose,
  salary,
  duration,
  age,
}: SimulationResultsModalProps) {
  const [showAuth, setShowAuth] = useState(false);

  const handleValidation = () => {
    onClose();
    setShowAuth(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Price Simulation</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="text-center space-y-4">
              <h3 className="font-medium">
                Maximum amount allowed in your cart
              </h3>
              <div className="bg-secondary rounded-full py-2 px-6 inline-block">
                <span className="text-xl font-bold">
                  344,900 <span className="text-muted-foreground">DA</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                The sum of the products purchased must not exceed this amount.
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Your Salary :</span>
                <span>{salary.toLocaleString()} DA</span>
              </div>
              <div className="flex justify-between">
                <span>Duration :</span>
                <span>{duration} Months</span>
              </div>
              <div className="flex justify-between">
                <span>Your age :</span>
                <span>{age}</span>
              </div>
            </div>

            <Button
              className="w-full bg-primary hover:bg-primary/90 rounded-full"
              onClick={handleValidation}
            >
              Validation
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
}
