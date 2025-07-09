import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Bell, Settings } from "lucide-react";
import ReportFilters from "@/components/report-filters";
import ReportTable from "@/components/report-table";
import SummaryPanel from "@/components/summary-panel";
import LoadingGenie from "@/components/loading-genie";

export interface FilterData {
  dateOperator: string;
  startDate: string;
  endDate: string;
  reportName: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState<TableData | null>(null);
  const [reportTitle, setReportTitle] = useState("");
  const [generatedDate, setGeneratedDate] = useState("");

  const handleGenerateReport = async (filterData: FilterData) => {
    setIsLoading(true);
    
    try {
      // Simulate API call - replace with actual API call later
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock data for demonstration
      const mockTableData: TableData = {
        headers: ["Product", "Sales", "Revenue", "Growth", "Status"],
        rows: [
          ["Premium Subscription", "2,547", "$127,350", "+12.5%", "Active"],
          ["Basic Plan", "1,823", "$54,690", "-3.2%", "Declining"],
          ["Enterprise", "456", "$91,200", "+8.7%", "Growing"]
        ]
      };
      
      setTableData(mockTableData);
      setReportTitle(getReportTitle(filterData.reportName));
      setGeneratedDate(new Date().toLocaleDateString());
    } catch (error) {
      console.error("Error generating report:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getReportTitle = (reportName: string): string => {
    const titles: Record<string, string> = {
      "sales_summary": "Sales Summary Report",
      "user_analytics": "User Analytics Report",
      "financial_report": "Financial Report",
      "performance_metrics": "Performance Metrics Report",
      "inventory_status": "Inventory Status Report"
    };
    return titles[reportName] || "Report";
  };

  const handleReset = () => {
    setTableData(null);
    setReportTitle("");
    setGeneratedDate("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 rounded-lg p-2">
                <BarChart3 className="text-white text-lg" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Report Analytics</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Panel: Filters and Table */}
          <div className="lg:col-span-2 space-y-6">
            <ReportFilters 
              onGenerate={handleGenerateReport}
              onReset={handleReset}
              isLoading={isLoading}
            />
            
            {isLoading ? (
              <LoadingGenie />
            ) : tableData ? (
              <ReportTable 
                data={tableData}
                title={reportTitle}
                generatedDate={generatedDate}
              />
            ) : (
              <Card>
                <CardContent className="py-12">
                  <div className="text-center text-gray-500">
                    <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-medium">No report generated yet</p>
                    <p className="text-sm">Select filters and click "Generate Report" to view data</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Panel: Summary */}
          <div className="lg:col-span-1">
            <SummaryPanel />
          </div>
        </div>
      </main>
    </div>
  );
}
