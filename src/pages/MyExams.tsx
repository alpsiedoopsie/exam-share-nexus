
import React, { useState, useEffect } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Exam } from '@/types';
import { FileText, Download } from 'lucide-react';

const MyExams = () => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock fetching exams - to be replaced with Supabase query
    const fetchExams = async () => {
      // Simulate loading delay
      setTimeout(() => {
        const mockExams: Exam[] = [
          {
            id: '1',
            title: 'Introduction to Computer Science',
            description: 'Final exam covering basic programming concepts and algorithms.',
            pdfUrl: '/mock-url-1.pdf',
            createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            createdBy: 'Prof. Smith'
          },
          {
            id: '2',
            title: 'Advanced Mathematics',
            description: 'Comprehensive exam on calculus, linear algebra, and statistics.',
            pdfUrl: '/mock-url-2.pdf',
            createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
            createdBy: 'Prof. Johnson'
          },
          {
            id: '3',
            title: 'Biology Midterm',
            description: 'Covers topics from chapters 1-8 including cell biology and genetics.',
            pdfUrl: '/mock-url-3.pdf',
            createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            createdBy: 'Prof. Garcia'
          },
        ];
        setExams(mockExams);
        setIsLoading(false);
      }, 1000);
    };

    fetchExams();
  }, []);

  const handleDownload = (exam: Exam) => {
    // Mock download - to be replaced with Supabase storage download
    console.log(`Downloading exam: ${exam.title}`);
  };

  const handleSubmit = (examId: string) => {
    // Navigate to submission page - to be implemented
    console.log(`Navigate to submit page for exam: ${examId}`);
  };

  if (isLoading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">Loading exams...</div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Exams</h1>
          <p className="text-muted-foreground">View and complete your assigned exams.</p>
        </div>

        <div className="grid gap-6">
          {exams.length === 0 ? (
            <Card className="p-8 text-center">
              <div className="flex flex-col items-center justify-center space-y-2">
                <FileText className="h-10 w-10 text-gray-400" />
                <h3 className="font-medium text-lg">No Exams Available</h3>
                <p className="text-sm text-muted-foreground">You don't have any exams assigned yet.</p>
              </div>
            </Card>
          ) : (
            exams.map((exam) => (
              <Card key={exam.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{exam.title}</CardTitle>
                    <Badge className="ml-2">New</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{exam.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Added: {new Date(exam.createdAt).toLocaleDateString()}</span>
                    <span>By: {exam.createdBy}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between bg-muted/50 py-4">
                  <Button variant="outline" size="sm" onClick={() => handleDownload(exam)}>
                    <Download className="h-4 w-4 mr-2" /> Download Exam
                  </Button>
                  <Button size="sm" onClick={() => handleSubmit(exam.id)}>
                    Upload Answer
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default MyExams;
