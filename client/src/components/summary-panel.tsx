import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Download, Share2 } from "lucide-react";

export default function SummaryPanel() {
  // Mock data for AI summary - this would be replaced with real API data
  const summaryData = {
    insights: [
      "Premium subscriptions show strong growth (+12.5%)",
      "Basic plan experiencing decline (-3.2%)",
      "Enterprise segment gaining momentum"
    ],
    recommendations: [
      "Focus marketing efforts on premium tier",
      "Investigate basic plan value proposition",
      "Expand enterprise sales team"
    ],
    actionItems: [
      "Review pricing strategy for basic plan",
      "Analyze customer feedback patterns",
      "Schedule quarterly review meeting"
    ],
    totalRevenue: "$273,240",
    growthRate: "+7.3%"
  };

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bot className="text-purple-500 mr-2 h-5 w-5" />
          AI Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Key Insights */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Key Insights</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              {summaryData.insights.map((insight, index) => (
                <li key={index}>• {insight}</li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-2">Recommendations</h3>
            <ul className="text-sm text-green-800 space-y-1">
              {summaryData.recommendations.map((rec, index) => (
                <li key={index}>• {rec}</li>
              ))}
            </ul>
          </div>

          {/* Action Items */}
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-900 mb-2">Action Items</h3>
            <ul className="text-sm text-yellow-800 space-y-1">
              {summaryData.actionItems.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {summaryData.totalRevenue}
              </div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {summaryData.growthRate}
              </div>
              <div className="text-sm text-gray-600">Overall Growth</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            <Download className="mr-2 h-4 w-4" />
            Export Summary
          </Button>
          <Button variant="outline" className="w-full">
            <Share2 className="mr-2 h-4 w-4" />
            Share Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
