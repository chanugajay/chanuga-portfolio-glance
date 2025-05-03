
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

            <h4 className="font-semibold mb-2">Responsibilities:</h4>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                Developed a Vehicle Invoice Management System using PHP, JavaScript, and SharePoint.
              </li>
              <li>
                Created custom functions in VBA for spreadsheets with complex calculations.
              </li>
              <li>
                Maintained team dashboards featuring KPI metrics using Power BI and Excel.
              </li>
              <li>
                Implemented backend services, enabling real-time meal ordering and tracking.
              </li>
              <li>
                Gained experience with enterprise-level source control, testing, and deployment.
              </li>
            </ul>

            <h4 className="font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">PHP</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">SharePoint</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">VBA</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Power BI</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Excel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
