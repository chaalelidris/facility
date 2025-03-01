"use client";

import { useModals } from "@/hooks/use-modals";
import { Button } from "./ui/button";

interface HeaderButtonProps {
  actions: { name: string; icon: React.ReactNode }[];
}

const HeaderButtons = ({ actions }: HeaderButtonProps) => {
  const { openModal } = useModals();

  return (
    <div className="flex items-center justify-center space-x-2">
      {actions.map((item) => (
        <Button
          variant={"ghost"}
          key={`action-${item.name}`}
          className="flex items-center justify-center border border-accent rounded-full px-3 py-1"
          onClick={() => {
            if (item.name === "profile") {
              openModal("accountModal");
            }
          }}
        >
          {item.icon}
        </Button>
      ))}
    </div>
  );
};

export default HeaderButtons;
