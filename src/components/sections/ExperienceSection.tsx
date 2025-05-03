
import { Briefcase, React, NodeJs, Flask, PowerAutomate } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience</h2>
        <div className="mt-8 max-w-3xl">
          <div className="timeline-item">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Internship Trainee at Michelin Lanka</h3>
              <span className="text-sm text-primary font-medium">May 2023 - May 2024</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Full Stack Developer</p>

            <h4 className="font-semibold mb-2">Key Projects:</h4>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                Developed a Vendor Invoice Management System using PowerApps and SharePoint
                to automate invoice submission and approval workflows.
              </li>
              <li>
                Built a Meal Ordering System for internal staff using React (frontend), Flask (API), and
                Node.js (backend services), enabling real-time meal ordering and tracking.
              </li>
              <li>
                Gained hands-on experience with SAP for invoice tracking, procurement, and internal
                data management.
              </li>
            </ul>

            <h4 className="font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full text-sm">
                <PowerAutomate className="w-4 h-4" />
                <span>PowerApps</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full text-sm">
                <React className="w-4 h-4" />
                <span>React</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full text-sm">
                <NodeJs className="w-4 h-4" />
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full text-sm">
                <Flask className="w-4 h-4" />
                <span>Flask</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full text-sm">
                <PowerAutomate className="w-4 h-4" />
                <span>Power Automate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
