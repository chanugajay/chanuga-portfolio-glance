
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Image Enhancement and Early Stage Diabetic Retinopathy Detection Web Application",
      description: "Developed a web application that automates the detection of diabetic retinopathy in retinal images by enhancing MRI images and detecting diabetic retinopathy symptoms. A comprehensive system for enhancing, MRI images and detecting diabetic retinopathy symptoms. It utilizes advanced algorithms for image enhancement and detection of microaneurysms, hemorrhages, hard exudates, soft exudates, and cotton wool spots.",
      technologies: ["Python", "TensorFlow", "React", "OpenCV", "scikit-learn", "Flask"],
    },
    {
      title: "Hand Gesture Recognition and Emotion Detection Web Application",
      description: "Created an app that performs real-time hand gesture recognition and emotional response analysis. The project involved developing a model for hand gesture recognition, implementing emotional response detection, and analyzing correlations between gestures and emotions.",
      technologies: ["Python", "OpenCV", "MediaPipe", "scikit-learn", "TensorFlow", "Keras"],
    },
    {
      title: "E-Commerce Based E3 Enterprise Health Centre",
      description: "Built an e-commerce web application for health products, featuring an online consultation where patients can consult doctors, book appointments, and purchase medical products. Implemented secure management and marketing functionalities.",
      technologies: ["HTML", "CSS", "jQuery", "JavaScript"],
    },
    {
      title: "Estate Agent Client-side Web Application",
      description: "Created a web application that enables users to search properties by different parameters such as price and location. Implemented features like property filtering and detailed property views.",
      technologies: ["HTML", "CSS", "jQuery", "JavaScript"],
    },
    {
      title: "Wearhouse Stock Ecommerce selling website",
      description: "Developed an e-commerce website for selling DJ equipment, featuring admin management functionalities and a complete online shopping experience.",
      technologies: ["ReactJS", "Express"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-2 border-t">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary/10 text-primary px-2 py-1 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
