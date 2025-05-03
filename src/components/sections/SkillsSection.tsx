
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const techSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Python", level: 85 },
    { name: "TensorFlow", level: 65 },
    { name: "OpenCV", level: 75 },
    { name: "scikit-learn", level: 70 },
    { name: "jQuery", level: 80 },
    { name: "SQL", level: 75 },
    { name: "Git", level: 80 },
  ];

  const softSkills = [
    "Quick learning and adaptability",
    "Problem-solving skills",
    "Attention to detail",
    "Teamwork and collaboration",
    "Communication",
    "Time management",
    "Multitasking",
    "Remote work",
    "Application deployment and maintenance",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {techSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
