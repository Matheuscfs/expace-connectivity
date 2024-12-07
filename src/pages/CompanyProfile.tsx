import { CompanySetupNav } from "@/components/company/CompanySetupNav";
import { CompanyContent } from "@/components/company/CompanyContent";

export default function CompanyProfile() {
  return (
    <div className="flex min-h-screen">
      <CompanySetupNav />
      <CompanyContent />
    </div>
  );
}