
import React, { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Upload } from 'lucide-react';

const UploadExam = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    } else {
      toast.error('Please select a PDF file');
      e.target.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error('Please select a PDF file to upload');
      return;
    }

    setIsUploading(true);

    // Mock file upload - to be replaced with Supabase storage
    setTimeout(() => {
      toast.success('Exam uploaded successfully');
      setTitle('');
      setDescription('');
      setFile(null);
      setIsUploading(false);
      // Reset file input
      const fileInput = document.getElementById('pdf-upload') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    }, 1500);
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upload Exam</h1>
          <p className="text-muted-foreground">Add a new exam to the platform for students.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Exam Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Exam Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter the exam title"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter a description for this exam"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="pdf-upload">Upload PDF</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <Upload className="h-10 w-10 text-gray-400" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Drag and drop your PDF here or click to browse</p>
                      <p className="text-xs text-gray-500 mt-1">PDF files only, max 10MB</p>
                    </div>
                    <Input
                      id="pdf-upload"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('pdf-upload')?.click()}
                    >
                      Select PDF
                    </Button>
                    {file && (
                      <p className="text-sm text-green-600 font-medium">
                        Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)}MB)
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isUploading || !title || !description || !file}
              >
                {isUploading ? 'Uploading...' : 'Upload Exam'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default UploadExam;
