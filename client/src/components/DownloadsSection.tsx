import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, File, Calendar, Users } from 'lucide-react';

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  type: string;
  size: string;
  lastUpdated: string;
  category: string;
  icon: any;
}

interface DownloadsSectionProps {
  onDownload: (itemId: string) => void;
}

export default function DownloadsSection({ onDownload }: DownloadsSectionProps) {
  const downloadItems: DownloadItem[] = [
    {
      id: 'admission-form',
      title: 'Admission Application Form',
      description: 'Complete application form for new student admissions. Fill out all required fields and submit with necessary documents.',
      type: 'PDF',
      size: '2.1 MB',
      lastUpdated: 'Jan 2024',
      category: 'Admission',
      icon: FileText
    },
    {
      id: 'dit-syllabus',
      title: 'DIT Course Syllabus',
      description: 'Detailed syllabus for Diploma in Information Technology including course outline, objectives, and assessment criteria.',
      type: 'PDF',
      size: '1.8 MB',
      lastUpdated: 'Dec 2023',
      category: 'Academic',
      icon: File
    },
    {
      id: 'cit-syllabus',
      title: 'CIT Course Syllabus',
      description: 'Complete syllabus for Certificate in Information Technology program with module-wise breakdown.',
      type: 'PDF',
      size: '1.5 MB',
      lastUpdated: 'Dec 2023',
      category: 'Academic',
      icon: File
    },
    {
      id: 'oat-syllabus',
      title: 'OAT Course Syllabus',
      description: 'Comprehensive syllabus for Office Administration & Technology course including practical components.',
      type: 'PDF',
      size: '1.7 MB',
      lastUpdated: 'Dec 2023',
      category: 'Academic',
      icon: File
    },
    {
      id: 'fee-structure',
      title: 'Fee Structure 2024',
      description: 'Updated fee structure for all courses including semester-wise breakdown and payment schedule.',
      type: 'PDF',
      size: '890 KB',
      lastUpdated: 'Jan 2024',
      category: 'Information',
      icon: FileText
    },
    {
      id: 'academic-calendar',
      title: 'Academic Calendar 2024',
      description: 'Complete academic calendar showing important dates, holidays, examination schedule, and events.',
      type: 'PDF',
      size: '1.2 MB',
      lastUpdated: 'Jan 2024',
      category: 'Information',
      icon: Calendar
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Admission': return 'bg-blue-100 text-blue-800';
      case 'Academic': return 'bg-green-100 text-green-800';
      case 'Information': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-background" data-testid="section-downloads">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Downloads
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access important documents including admission forms, course syllabi, 
            fee structures, and academic information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloadItems.map((item) => (
            <Card 
              key={item.id} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-download-${item.id}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${getCategoryColor(item.category)}`}
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <div>{item.size}</div>
                    <div>{item.type}</div>
                  </div>
                </div>
                <CardTitle className="text-lg font-heading font-semibold mt-2">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    Updated {item.lastUpdated}
                  </div>
                  <Button 
                    size="sm"
                    onClick={() => onDownload(item.id)}
                    className="bg-primary hover:bg-primary/90"
                    data-testid={`button-download-${item.id}`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}