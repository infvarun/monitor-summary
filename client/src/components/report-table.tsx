import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TableIcon } from "lucide-react";
import { TableData } from "@/pages/dashboard";

interface ReportTableProps {
  data: TableData;
  title: string;
  generatedDate: string;
}

export default function ReportTable({ data, title, generatedDate }: ReportTableProps) {
  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", className: string }> = {
      "Active": { variant: "default", className: "bg-green-100 text-green-800 hover:bg-green-100" },
      "Growing": { variant: "default", className: "bg-green-100 text-green-800 hover:bg-green-100" },
      "Declining": { variant: "secondary", className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
      "Inactive": { variant: "destructive", className: "bg-red-100 text-red-800 hover:bg-red-100" }
    };

    const config = statusConfig[status] || statusConfig["Active"];
    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    );
  };

  const formatCellValue = (value: string, index: number) => {
    // Handle growth percentage coloring
    if (value.startsWith('+')) {
      return <span className="text-green-600">{value}</span>;
    }
    if (value.startsWith('-')) {
      return <span className="text-red-600">{value}</span>;
    }
    
    // Handle status badges (assuming last column is status)
    if (index === data.headers.length - 1 && 
        ["Active", "Growing", "Declining", "Inactive"].includes(value)) {
      return getStatusBadge(value);
    }
    
    return value;
  };

  return (
    <Card>
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="flex items-center">
          <TableIcon className="text-green-500 mr-2 h-5 w-5" />
          {title}
        </CardTitle>
        <p className="text-sm text-gray-600 mt-1">
          Generated on {generatedDate}
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                {data.headers.map((header, index) => (
                  <TableHead key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.rows.map((row, rowIndex) => (
                <TableRow key={rowIndex} className="hover:bg-gray-50 transition-colors">
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm">
                      {cellIndex === 0 ? (
                        <div className="font-medium text-gray-900">{cell}</div>
                      ) : (
                        formatCellValue(cell, cellIndex)
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {data.rows.length} of {data.rows.length} results
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600">
                1
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
