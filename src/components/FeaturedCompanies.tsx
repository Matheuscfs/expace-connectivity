import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const companies = [
  // Tecnologia
  { id: 1, name: "TechSolutions", rating: 4.8, logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", sector: "Tecnologia" },
  { id: 2, name: "DataTech", rating: 4.7, logo: "https://images.unsplash.com/photo-1518770660439-4636190af475", sector: "Tecnologia" },
  { id: 3, name: "CloudMaster", rating: 4.9, logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa", sector: "Tecnologia" },
  { id: 4, name: "WebDev Pro", rating: 4.6, logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", sector: "Tecnologia" },
  { id: 5, name: "AppCreators", rating: 4.8, logo: "https://images.unsplash.com/photo-1555949963-aa79dcee981c", sector: "Tecnologia" },
  { id: 6, name: "EduTech", rating: 4.7, logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1", sector: "Tecnologia" },
  { id: 7, name: "SecurityTech", rating: 4.5, logo: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b", sector: "Tecnologia" },
  { id: 8, name: "MobileDev", rating: 4.6, logo: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532", sector: "Tecnologia" },

  // Saúde
  { id: 9, name: "HealthCare Plus", rating: 4.9, logo: "https://images.unsplash.com/photo-1538108149393-fbbd81895907", sector: "Saúde" },
  { id: 10, name: "MedCenter", rating: 4.8, logo: "https://images.unsplash.com/photo-1579684385127-1ef15d508118", sector: "Saúde" },
  { id: 11, name: "FamilyCare", rating: 4.7, logo: "https://images.unsplash.com/photo-1581056771107-24ca5f033842", sector: "Saúde" },
  { id: 12, name: "DentalPro", rating: 4.6, logo: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95", sector: "Saúde" },
  { id: 13, name: "PhysioHealth", rating: 4.8, logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef", sector: "Saúde" },
  { id: 14, name: "WellnessCenter", rating: 4.7, logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b", sector: "Saúde" },

  // Beleza
  { id: 15, name: "BeautySpace", rating: 4.7, logo: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8", sector: "Beleza" },
  { id: 16, name: "HairStyle Pro", rating: 4.8, logo: "https://images.unsplash.com/photo-1562322140-8baeececf3df", sector: "Beleza" },
  { id: 17, name: "NailArt Studio", rating: 4.6, logo: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b", sector: "Beleza" },
  { id: 18, name: "SpaRelax", rating: 4.9, logo: "https://images.unsplash.com/photo-1540555700478-4be289fbecef", sector: "Beleza" },
  { id: 19, name: "MakeupArt", rating: 4.7, logo: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9", sector: "Beleza" },
  { id: 20, name: "BeautyClinic", rating: 4.8, logo: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937", sector: "Beleza" },

  // Serviços Domésticos
  { id: 21, name: "HomeServices", rating: 4.9, logo: "https://images.unsplash.com/photo-1581578731548-c64695cc6952", sector: "Serviços Domésticos" },
  { id: 22, name: "CleanPro", rating: 4.7, logo: "https://images.unsplash.com/photo-1527515545081-5db817172677", sector: "Serviços Domésticos" },
  { id: 23, name: "HandyFix", rating: 4.8, logo: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e", sector: "Serviços Domésticos" },
  { id: 24, name: "GardenCare", rating: 4.6, logo: "https://images.unsplash.com/photo-1558904541-efa5a26769c5", sector: "Serviços Domésticos" },
  { id: 25, name: "HomeMaintenance", rating: 4.7, logo: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a", sector: "Serviços Domésticos" },
  { id: 26, name: "PestControl", rating: 4.5, logo: "https://images.unsplash.com/photo-1584622781867-1c2242c6b8f0", sector: "Serviços Domésticos" },

  // Alimentação
  { id: 27, name: "FoodDelivery", rating: 4.6, logo: "https://images.unsplash.com/photo-1498837167922-ddd27525d352", sector: "Alimentação" },
  { id: 28, name: "GourmetChef", rating: 4.8, logo: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5", sector: "Alimentação" },
  { id: 29, name: "HealthyMeals", rating: 4.7, logo: "https://images.unsplash.com/photo-1498837167922-ddd27525d352", sector: "Alimentação" },
  { id: 30, name: "SweetTreats", rating: 4.9, logo: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94", sector: "Alimentação" },
  { id: 31, name: "VeganDelights", rating: 4.6, logo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", sector: "Alimentação" },
  { id: 32, name: "CateringPro", rating: 4.8, logo: "https://images.unsplash.com/photo-1555244162-803834f70033", sector: "Alimentação" },

  // Educação
  { id: 33, name: "LanguageSchool", rating: 4.7, logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", sector: "Educação" },
  { id: 34, name: "MusicAcademy", rating: 4.8, logo: "https://images.unsplash.com/photo-1507838153414-b4b713384a76", sector: "Educação" },
  { id: 35, name: "ArtStudio", rating: 4.6, logo: "https://images.unsplash.com/photo-1513364776144-60967b0f800f", sector: "Educação" },
  { id: 36, name: "TutoringCenter", rating: 4.9, logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", sector: "Educação" },
  { id: 37, name: "KidsLearning", rating: 4.7, logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", sector: "Educação" },
  { id: 38, name: "ProfTraining", rating: 4.8, logo: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655", sector: "Educação" },

  // Construção
  { id: 39, name: "BuildMaster", rating: 4.8, logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd", sector: "Construção" },
  { id: 40, name: "ArchitectPro", rating: 4.7, logo: "https://images.unsplash.com/photo-1503387762-592deb58ef4e", sector: "Construção" },
  { id: 41, name: "InteriorDesign", rating: 4.9, logo: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6", sector: "Construção" },
  { id: 42, name: "RenovationCo", rating: 4.6, logo: "https://images.unsplash.com/photo-1541976590-713941681591", sector: "Construção" },
  { id: 43, name: "PaintPro", rating: 4.7, logo: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f", sector: "Construção" },
  { id: 44, name: "ElectricianPro", rating: 4.8, logo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4", sector: "Construção" },

  // Automotivo
  { id: 45, name: "AutoCare", rating: 4.7, logo: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3", sector: "Automotivo" },
  { id: 46, name: "CarWash", rating: 4.6, logo: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f", sector: "Automotivo" },
  { id: 47, name: "MechanicPro", rating: 4.8, logo: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f", sector: "Automotivo" },
  { id: 48, name: "TireCare", rating: 4.5, logo: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f", sector: "Automotivo" },
  { id: 49, name: "AutoDetail", rating: 4.7, logo: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7", sector: "Automotivo" },
  { id: 50, name: "CarPaint", rating: 4.6, logo: "https://images.unsplash.com/photo-1562141961-b5d1dfb57448", sector: "Automotivo" },
];

const FeaturedCompanies = () => {
  // Group companies by sector
  const companiesBySector = companies.reduce((acc, company) => {
    if (!acc[company.sector]) {
      acc[company.sector] = [];
    }
    acc[company.sector].push(company);
    return acc;
  }, {} as Record<string, typeof companies>);

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Empresas em Destaque</h2>
        {Object.entries(companiesBySector).map(([sector, sectorCompanies]) => (
          <div key={sector} className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-primary">{sector}</h3>
              <Link to={`/companies?sector=${encodeURIComponent(sector)}`}>
                <Button variant="link" size="sm" className="text-primary">
                  Ver mais
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectorCompanies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{company.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{sector}</p>
                    <p className="text-sm text-gray-500 mb-2">São Paulo, SP</p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{company.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCompanies;