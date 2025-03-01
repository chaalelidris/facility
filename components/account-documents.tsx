import { InputFile } from "./inputs/input-file";
import { Button } from "./ui/button";

const AccountDocuments = () => {
  const documents = [
    {
      title: "ID Card",
    },
    {
      title: "Driver's License",
    },
    {
      title: "Utility Bill",
    },
    {
      title: "Bank Statement",
    },
    {
      title: "Passport",
    },
    {
      title: "Residence",
    },
  ];
  return (
    <div>
      <div className="space-y-6 overflow-y-scroll max-h-72 scrollbar scrollbar-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((document) => (
            <InputFile key={document.title} title={document.title} />
          ))}
        </div>
      </div>
      <Button className="w-full bg-primary hover:bg-primary/90 rounded-full mt-6">
        Save
      </Button>
    </div>
  );
};

export default AccountDocuments;
