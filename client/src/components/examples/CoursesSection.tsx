import CoursesSection from '../CoursesSection';

export default function CoursesSectionExample() {
  const handleCourseSelect = (courseId: string) => {
    console.log(`Selected course: ${courseId}`);
  };

  return <CoursesSection onCourseSelect={handleCourseSelect} />;
}