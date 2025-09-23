import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Computer, FileText, Building2, Clock, Users, BookOpen } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  duration: string;
  students: string;
  description: string;
  subjects: string[];
  icon: any;
  color: string;
}

interface CoursesSectionProps {
  onCourseSelect: (courseId: string) => void;
}

export default function CoursesSection({ onCourseSelect }: CoursesSectionProps) {
  const courses: Course[] = [
    {
      id: 'dcom',
  title: 'Diploma in Commerce (OSP/Accounts)',
      duration: '2 Years',
      students: '150+ Enrolled',
      description: 'Diploma in Commerce with specialization in Office Secretarial Practice or Accounts, focusing on business, accounting, and office management skills.',
      subjects: ['Business Math', 'Accounting', 'Office Practice', 'Economics', 'Commercial Geography'],
      icon: Building2,
      color: 'bg-yellow-50 text-yellow-700 border-yellow-200'
    },
    {
      id: 'dit',
  title: 'Diploma in Information Technology',
      duration: '1 Year',
      students: '120+ Enrolled',
      description: 'Diploma in Information Technology covering computer programming, web development, database management, and networking fundamentals.',
      subjects: ['Programming', 'Web Development', 'Database Management', 'Computer Networks', 'Software Engineering'],
      icon: Computer,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'dit2',
  title: 'Diploma in Information Technology (2 Year)',
      duration: '2 Years',
      students: '100+ Enrolled',
      description: 'Comprehensive 2-year DIT program with advanced modules in IT, software development, networking, and project work.',
      subjects: ['Advanced Programming', 'Web Development', 'Database Systems', 'Network Security', 'IT Project'],
      icon: Computer,
      color: 'bg-cyan-50 text-cyan-700 border-cyan-200'
    },
    {
      id: 'cit',
  title: 'Certificate in Information Technology',
      duration: '6 Months',
      students: '80+ Enrolled',
      description: 'Certificate in Information Technology focusing on essential IT skills including computer operation, office applications, and basic programming.',
      subjects: ['Computer Basics', 'MS Office', 'Internet & Email', 'Basic Programming', 'Computer Maintenance'],
      icon: FileText,
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      id: 'msoffice',
  title: 'Microsoft Office',
      duration: '3 Months',
      students: '60+ Enrolled',
      description: 'Short course on Microsoft Office applications including Word, Excel, PowerPoint, and essential office productivity tools.',
      subjects: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Office Productivity'],
      icon: FileText,
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ];

  return (
    <section className="py-16 bg-muted/30" data-testid="section-courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our industry-relevant programs designed to prepare you for successful careers 
            in technology and business administration.
          </p>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className={`hover-elevate cursor-pointer transition-all duration-300 ${course.color} flex flex-col h-full`}
              onClick={() => onCourseSelect(course.id)}
              data-testid={`card-course-${course.id}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-white/50">
                  <course.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-heading font-bold mb-2">
                  {course.title}
                </CardTitle>
                <div className="flex justify-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 flex flex-col flex-grow">
                <p className="text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold mb-2 flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    Key Subjects:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {course.subjects.map((subject, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="text-xs bg-white/70"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-white/80 text-gray-800 hover:bg-white mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    onCourseSelect(course.id);
                  }}
                  data-testid={`button-learn-more-${course.id}`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
