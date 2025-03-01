"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@/components/ui/separator";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountInformationsForm from "../account-informations-form";
import { DialogDescription } from "@radix-ui/react-dialog";
import AccountOrders from "../account-orders";
import { useModals } from "@/hooks/use-modals";
import AccountAddresses from "../account-addresses";
import AccountDocuments from "../account-documents";

export function AccountModal() {
  const { modalStates, closeModal } = useModals();

  const user = {
    name: "John Doe",
    email: "Hamidb4@icloud.com",
    phone: "123-456-7890",
  };

  return (
    <Dialog
      open={modalStates.accountModal}
      onOpenChange={() => closeModal("accountModal")}
    >
      <DialogContent className="max-w-md md:max-w-2xl lg:max-w-4xl p-0">
        <div className="p-6 overflow-hidden">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback>Profile</AvatarFallback>
              <AvatarImage
                src="/profile.png"
                alt="Profile picture"
                className="rounded-full"
              />
            </Avatar>
            <div>
              <DialogTitle className="text-lg font-semibold">
                John Doe
              </DialogTitle>
              <p className="text-sm text-muted-foreground">{user.email}</p>

              <p className="text-sm text-muted-foreground">{user.phone}</p>
            </div>
          </div>

          <Separator className="my-6" />

          <Tabs defaultValue="information">
            <div className="relative ">
              {/* Left gradient overlay with gradient blur */}
              <div className="scroll-x-gradient-left md:hidden"></div>

              {/* Scrolling container */}
              <div className="overflow-x-auto scrollbar-hidden">
                <TabsList className="mb-4 bg-transparent justify-start h-fit gap-2">
                  <TabsTrigger
                    value="information"
                    className="data-[state=active]:tab_active bg-secondary rounded-full px-4 py-2 text-gray-700 overflow-hidden"
                  >
                    Information
                  </TabsTrigger>
                  <TabsTrigger
                    value="orders"
                    className="data-[state=active]:tab_active bg-secondary rounded-full px-4 py-2 text-gray-700 overflow-hidden"
                  >
                    My Orders
                  </TabsTrigger>
                  <TabsTrigger
                    value="address"
                    className="data-[state=active]:tab_active bg-secondary rounded-full px-4 py-2 text-gray-700 overflow-hidden"
                  >
                    My Address
                  </TabsTrigger>
                  <TabsTrigger
                    value="documents"
                    className="data-[state=active]:tab_active bg-secondary rounded-full px-4 py-2 text-gray-700 overflow-hidden"
                  >
                    My Documents
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="data-[state=active]:tab_active bg-secondary rounded-full px-4 py-2 text-gray-700 overflow-hidden"
                  >
                    Settings
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Right gradient overlay with gradient blur */}
              <div className="scroll-x-gradient-right md:hidden"></div>
            </div>

            <TabsContent value="information">
              <AccountInformationsForm />
            </TabsContent>
            <TabsContent value="orders">
              <AccountOrders />
            </TabsContent>
            <TabsContent value="address">
              <AccountAddresses />
            </TabsContent>
            <TabsContent value="documents">
              <AccountDocuments />
            </TabsContent>
            <TabsContent value="settings">Settings Component</TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
