import { useParams } from "react-router-dom";
import { CompanyHeader } from "@/components/company/CompanyHeader";
import { CompanyAbout } from "@/components/company/CompanyAbout";
import { CompanyServices } from "@/components/company/CompanyServices";
import { CompanyGallery } from "@/components/company/CompanyGallery";
import { CompanyReviews } from "@/components/company/CompanyReviews";
import { CompanyLocation } from "@/components/company/CompanyLocation";
import { CompanyTrust } from "@/components/company/CompanyTrust";
import { CompanyRelated } from "@/components/company/CompanyRelated";

// Mock data for demonstration
const mockCompanyData = {
  id: 1,
  name: "TechSolutions Inovação",
  logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  banner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  description: "Empresa líder em soluções tecnológicas inovadoras, fornecendo serviços de alta qualidade há mais de 10 anos.",
  location: "São Paulo, SP",
  highlights: [
    "10+ anos de experiência",
    "Atendimento em todo o Brasil",
    "Soluções sustentáveis"
  ],
  certifications: [
    { name: "ISO 9001", icon: "award" },
    { name: "Green IT", icon: "leaf" }
  ],
  contact: {
    phone: "+55 11 99999-9999",
    email: "contato@techsolutions.com",
    website: "www.techsolutions.com"
  },
  socialMedia: {
    website: "https://techsolutions.com",
    instagram: "https://instagram.com/techsolutions",
    facebook: "https://facebook.com/techsolutions",
    linkedin: "https://linkedin.com/company/techsolutions"
  },
  workingHours: "Segunda a Sexta, 9h às 18h",
  address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP"
};

const CompanyProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <CompanyHeader
        name={mockCompanyData.name}
        logo={mockCompanyData.logo}
        banner={mockCompanyData.banner}
        location={mockCompanyData.location}
        description={mockCompanyData.description}
      />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CompanyAbout
              description={mockCompanyData.description}
              address={mockCompanyData.address}
              workingHours={mockCompanyData.workingHours}
              contact={mockCompanyData.contact}
              socialMedia={mockCompanyData.socialMedia}
            />
            <CompanyServices companyId={id} />
            <CompanyGallery />
            <CompanyReviews />
          </div>
          
          <div className="space-y-8">
            <CompanyLocation
              address={mockCompanyData.address}
              contact={mockCompanyData.contact}
            />
            <CompanyTrust
              highlights={mockCompanyData.highlights}
              certifications={mockCompanyData.certifications}
            />
          </div>
        </div>
        
        <CompanyRelated category="Tecnologia" />
      </div>
    </div>
  );
};

export default CompanyProfile;