import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CompanyServicesProps {
  companyId?: string;
}

export function CompanyServices({ companyId }: CompanyServicesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Serviços</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">Lista de serviços da empresa {companyId}</p>
      </CardContent>
    </Card>
  );
}