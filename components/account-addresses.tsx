import { Location } from "iconsax-react";
import { InfoCard } from "./info-card";
import { Button } from "./ui/button";

const AccountAddresses = () => {
  const addresses = [
    {
      id: "1",
      title: "My Home Address",
    },
    {
      id: "2",
      title: "My Office Address",
    },
    {
      id: "3",
      title: "My Friend&apos;s Address",
    },
  ];

  if (addresses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-lg font-semibold">No addresses yet</p>
        <p className="text-muted-foreground text-center">
          You haven&apos;t added any addresses yet. Add your first address now!
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <InfoCard
          key={i}
          id={i.toString()}
          variant="address"
          icon={<Location size={40} color="#6a6d76" variant="Bold" />}
          title="80 Logement Participatif Bloc 04 N54"
          subtitle="25 000"
        />
      ))}
      <Button className="w-full bg-primary hover:bg-primary/90 rounded-full">
        Save
      </Button>
    </div>
  );
};

export default AccountAddresses;
