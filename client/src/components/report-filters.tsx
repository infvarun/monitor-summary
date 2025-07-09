import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Play, RotateCcw, Download, Share2 } from "lucide-react";
import { FilterData } from "@/pages/dashboard";

interface ReportFiltersProps {
  onGenerate: (filterData: FilterData) => void;
  onReset: () => void;
  isLoading: boolean;
}

export default function ReportFilters({ onGenerate, onReset, isLoading }: ReportFiltersProps) {
  const [dateOperator, setDateOperator] = useState("=");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportName, setReportName] = useState("");

  const handleSubmit = () => {
    if (!reportName || !startDate) {
      return;
    }

    const filterData: FilterData = {
      dateOperator,
      startDate,
      endDate,
      reportName
    };

    onGenerate(filterData);
  };

  const handleReset = () => {
    setDateOperator("=");
    setStartDate("");
    setEndDate("");
    setReportName("");
    onReset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Filter className="text-blue-500 mr-2 h-5 w-5" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date Filter */}
          <div className="space-y-3">
            <Label htmlFor="date-filter">Date Filter</Label>
            <div className="flex space-x-2">
              <Select value={dateOperator} onValueChange={setDateOperator}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="=">=</SelectItem>
                  <SelectItem value=">">{'>'}</SelectItem>
                  <SelectItem value="<">{'<'}</SelectItem>
                  <SelectItem value="between">Between</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="flex-1"
              />
            </div>
            {dateOperator === "between" && (
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
              />
            )}
          </div>

          {/* Report Name Dropdown */}
          <div className="space-y-3">
            <Label htmlFor="report-name">Report Name</Label>
            <Select value={reportName} onValueChange={setReportName}>
              <SelectTrigger>
                <SelectValue placeholder="Select a report..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales_summary">Sales Summary</SelectItem>
                <SelectItem value="user_analytics">User Analytics</SelectItem>
                <SelectItem value="financial_report">Financial Report</SelectItem>
                <SelectItem value="performance_metrics">Performance Metrics</SelectItem>
                <SelectItem value="inventory_status">Inventory Status</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex space-x-3">
            <Button 
              onClick={handleSubmit}
              disabled={isLoading || !reportName || !startDate}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Play className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
            <Button 
              variant="outline" 
              onClick={handleReset}
              disabled={isLoading}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" title="Export">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" title="Share">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
