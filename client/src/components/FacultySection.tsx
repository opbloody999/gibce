import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Award, BookOpen } from "lucide-react";
import principalImg from "@assets/generated_images/principalImg.jpg";
import mehdiImg from "@assets/generated_images/mehdiImg.jpg";
import abbasImg from "@assets/generated_images/abbasImg.jpg";
import fidaImg from "@assets/generated_images/fidaImg.jpg";
import aslamImg from "@assets/generated_images/aslamImg.png";
import shakoorImg from "@assets/generated_images/shakoorImg.png";

interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  specialization: string[];
  email: string;
  image: string;
}

export default function FacultySection() {
  const facultyMembers: FacultyMember[] = [
    {
      id: "1",
      name: "Mr. Zulfiqar Ali Dahot",
      designation: "Principal",
      qualification: "M.A. (Education)",
      experience: "20+ Years",
      specialization: ["Educational Leadership", "Administration"],
      email: "",
      image: principalImg,
    },
    {
      id: "2",
      name: "Mehdi Hassan",
      designation: "Lecturer, Computer Science",
      qualification: "MCS",
      experience: "10+ Years",
      specialization: ["Programming", "Digital Skills", "Computer Science"],
      email: "",
      image: mehdiImg,
    },
    {
      id: "3",
      name: "Ali Abbas",
      designation: "Lecturer, Commerce / Accounts",
      qualification: "M.Com",
      experience: "8+ Years",
      specialization: ["Commerce", "Accounts"],
      email: "",
      image: abbasImg,
    },
    {
      id: "4",
      name: "Fida Hussain",
      designation: "Lecturer, Related Studies",
      qualification: "M.A. (English)",
      experience: "8+ Years",
      specialization: ["English", "Chemistry", "Related Studies"],
      email: "",
      image: fidaImg,
    },
    {
      id: "5",
      name: "Aslam Parwaiz",
      designation: "Laboratory Assistant",
      qualification: "B.Sc.",
      experience: "5+ Years",
      specialization: ["Lab Management", "Documentation"],
      email: "",
      image: aslamImg,
    },
    {
      id: "6",
      name: "Abdul Shakoor",
      designation: "Laboratory Assistant",
      qualification: "B.Sc.",
      experience: "5+ Years",
      specialization: ["Lab Management", "Student Assistance"],
      email: "",
      image: shakoorImg,
    },
  ];

  return (
    <section className="py-16 bg-background" data-testid="section-faculty">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Faculty
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our experienced and dedicated faculty members who are committed
            to providing quality education and guidance to our students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {facultyMembers.map((member) => (
            <Card
              key={member.id}
              className="hover-elevate overflow-hidden"
              data-testid={`card-faculty-${member.id}`}
            >
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-48 h-48 md:h-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      data-testid={`img-faculty-${member.id}`}
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {member.designation}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="w-4 h-4" />
                        {member.qualification}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookOpen className="w-4 h-4" />
                        {member.experience} Experience
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Specialization:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialization.map((spec, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
