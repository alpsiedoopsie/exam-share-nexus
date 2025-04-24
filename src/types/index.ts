
export type UserRole = "admin" | "student" | "assessor";

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  createdAt?: string;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  createdAt: string;
  createdBy: string;
}

export interface Submission {
  id: string;
  examId: string;
  studentId: string;
  pdfUrl: string;
  status: "pending" | "graded";
  grade?: number;
  feedback?: string;
  submittedAt: string;
  gradedAt?: string;
}
