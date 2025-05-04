
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const CVSection = () => {
  return (
    <section id="cv" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Curriculum Vitae</h2>
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Chanuga Jayarathne</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    BSc. (Hons) in Computer Science
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    View or download my complete curriculum vitae to learn more about my 
                    education, professional experience, skills, and accomplishments.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => window.open("/cv.pdf", "_blank")}
                  >
                    <FileText size={18} />
                    View Online
                  </Button>
                  <Button 
                    className="flex items-center gap-2"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/cv.pdf';
                      link.download = 'Chanuga_Jayarathne_CV.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download size={18} />
                    Download CV
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
