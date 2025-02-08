
import { CompanyHeader } from "@/components/company/CompanyHeader";
import { CompanyContent } from "@/components/company/CompanyContent";

// Mock data for demonstration
const mockCompanyData = {
  id: "1",  // Added ID for the company
  name: "TechSolutions Inovação",
  logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  banner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  description: "Empresa líder em soluções tecnológicas inovadoras, fornecendo serviços de alta qualidade há mais de 10 anos.",
  location: "São Paulo, SP",
  status: "Ativo",
  isOwner: true
};

export default function CompanyPreview() {
  const handleEdit = () => {
    console.log("Edit profile clicked");
  };

  const handleContact = () => {
    console.log("Contact clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CompanyHeader
        name={mockCompanyData.name}
        logo={mockCompanyData.logo}
        banner={mockCompanyData.banner}
        description={mockCompanyData.description}
        location={mockCompanyData.location}
        status={mockCompanyData.status}
        isOwner={mockCompanyData.isOwner}
        companyId={mockCompanyData.id}
        onEdit={handleEdit}
        onContact={handleContact}
      />
      <div className="container mx-auto px-4 py-8">
        <CompanyContent />
      </div>
    </div>
  );
}
