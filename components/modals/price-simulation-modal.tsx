"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calendar1, Setting4 } from "iconsax-react";
import { cn } from "@/lib/utils";
import { SimulationResultsModal } from "./simulation-results-modal";
import { DialogDescription } from "@radix-ui/react-dialog";

interface PriceSimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PriceSimulationModal({
  isOpen,
  onClose,
}: PriceSimulationModalProps) {
  const [salary, setSalary] = useState(25000);
  const [selectedPeriod, setSelectedPeriod] = useState("60");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [showResults, setShowResults] = useState(false);

  const days = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const months = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, i) =>
    (currentYear - 80 + i).toString()
  );

  const handleSimulation = () => {
    const birthYear = parseInt(year);
    const age = currentYear - birthYear;
    console.log("age", age);
    setShowResults(true);
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md !rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-center">Price Simulation</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-center block">
                Your Birthday
              </label>
              <div className="flex gap-2">
                <Select value={day} onValueChange={setDay}>
                  <SelectTrigger className="bg-secondary rounded-full py-4 px-5 !h-auto">
                    <SelectValue placeholder="Jour" />
                  </SelectTrigger>
                  <SelectContent>
                    {days.map((d) => (
                      <SelectItem key={d} value={d}>
                        {d}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={month} onValueChange={setMonth}>
                  <SelectTrigger className="bg-secondary rounded-full py-4 px-5 !h-auto">
                    <SelectValue placeholder="Mois" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger className="bg-secondary rounded-full py-4 px-5 !h-auto">
                    <SelectValue placeholder="Année" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((y) => (
                      <SelectItem key={y} value={y}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-center block">
                Your Salary
              </label>
              <div className="text-center font-bold text-xl">
                {salary.toLocaleString()}{" "}
                <span className="text-muted-foreground">DA / MOIS</span>
              </div>
              <Slider
                value={[salary]}
                onValueChange={([value]) => setSalary(value)}
                min={10000}
                max={100000}
                step={1000}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-center block">
                Repayment period ( Months )
              </label>
              <div className="flex justify-between gap-2">
                {["12", "24", "36", "48", "60"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-full ${
                      selectedPeriod === period
                        ? "bg-primary text-white"
                        : "bg-secondary rounded-full text-accent-foreground"
                    }`}
                  >
                    <Calendar1
                      className={cn(
                        "h-4 w-4 ",
                        selectedPeriod === period
                          ? "fill-white"
                          : "fill-accent-foreground"
                      )}
                      variant="Outline"
                    />
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full rounded-full bg-primary text-white hover:bg-primary/90 hover:text-white"
              onClick={handleSimulation}
            >
              <Setting4 className="h-6 w-6 fill-white" variant="Outline" />
              Price Simulation
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <SimulationResultsModal
        isOpen={showResults}
        onClose={() => setShowResults(false)}
        salary={salary}
        duration={parseInt(selectedPeriod)}
        age={year ? currentYear - parseInt(year) : 0}
      />
    </>
  );
}
