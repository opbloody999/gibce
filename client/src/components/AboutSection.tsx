import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, BookOpen, Calendar } from 'lucide-react';

export default function AboutSection() {
  const achievements = [
    { icon: Calendar, title: 'Established', value: '1995', description: 'Serving education for over 25 years' },
    { icon: Users, title: 'Students Graduated', value: '5000+', description: 'Alumni in IT, business, and government sectors' },
  { icon: BookOpen, title: 'Programs Offered', value: '5', description: 'Diverse technical and commercial courses' },
    { icon: Award, title: 'Free Certification', value: '100%', description: 'All students receive free certificates' },
  ];

  return (
    <section className="py-16 bg-background" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            About GIBCE
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Government Institute of Business & Commercial Education, established in 1995, 
            is a premier educational institution in Khairpur Mir's, Sindh, Pakistan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To provide quality technical and commercial education that empowers students with practical skills, 
              theoretical knowledge, and professional competencies required for successful careers in the modern workforce.
            </p>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading institution for technical and commercial education in Sindh, 
              producing skilled professionals who contribute meaningfully to Pakistan's economic growth and development.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Why Choose GIBCE?
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Experienced and qualified faculty members
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Modern computer labs and well-equipped classrooms
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Industry-relevant curriculum and practical training
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Strong alumni network and placement assistance
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Affordable fees with government support
              </li>
            </ul>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover-elevate">
              <CardContent className="p-6">
                <achievement.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-2xl font-heading font-bold text-foreground mb-1">
                  {achievement.value}
                </div>
                <div className="font-medium text-foreground mb-2">
                  {achievement.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
