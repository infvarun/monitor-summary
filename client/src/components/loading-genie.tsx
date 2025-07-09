import { Card, CardContent } from "@/components/ui/card";
import { Wand2 } from "lucide-react";

export default function LoadingGenie() {
  return (
    <Card>
      <CardContent className="py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="relative">
            {/* Genie Character */}
            <div className="text-6xl genie-float">
              <Wand2 className="text-purple-500 h-16 w-16" />
            </div>
            
            {/* Sparkles */}
            <div className="sparkle top-0 left-0 text-lg">✨</div>
            <div className="sparkle top-2 right-2 text-sm">⭐</div>
            <div className="sparkle bottom-2 left-2 text-sm">💫</div>
            <div className="sparkle bottom-0 right-0 text-lg">✨</div>
            <div className="sparkle top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm">⚡</div>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-medium text-gray-900 pulse-soft">
              Generating your report...
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Our AI genie is working its magic ✨
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
