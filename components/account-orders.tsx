import { InfoCard } from "./info-card";

const AccountOrders = () => {
  const tvImageUrl = "/images/products/tv.png";

  const orders = [
    {
      id: "1",
      date: "2021-10-01",
      total: 100,
      status: "Delivered",
    },
    {
      id: "2",
      date: "2021-10-02",
      total: 200,
      status: "Pending",
    },
    {
      id: "3",
      date: "2021-10-03",
      total: 300,
      status: "Delivered",
    },
  ];

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-lg font-semibold">No orders yet</p>
        <p className="text-muted-foreground text-center">
          You haven&apos;t placed any orders yet. Start shopping now!
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
          variant="product"
          imageUrl={tvImageUrl}
          title="TV Samsung"
          subtitle="25 000"
        />
      ))}
    </div>
  );
};

export default AccountOrders;
