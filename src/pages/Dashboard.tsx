
import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useUserRole } from '@/hooks/useUserRole';
import { FileText, Users, Check } from 'lucide-react';

const Dashboard = () => {
  const { role, isLoading } = useUserRole();

  if (isLoading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">Loading dashboard...</div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your Exam Share Nexus control center.</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {role === "admin" && <AdminDashboardCards />}
          {role === "student" && <StudentDashboardCards />}
          {role === "assessor" && <AssessorDashboardCards />}
        </div>
      </div>
    </AppLayout>
  );
};

const AdminDashboardCards = () => (
  <>
    <DashboardCard 
      title="Exams Uploaded" 
      value="24" 
      description="Total exams in the system"
      icon={<FileText className="h-6 w-6" />}
      color="bg-blue-50"
      iconColor="text-blue-600"
    />
    <DashboardCard 
      title="Users" 
      value="156" 
      description="Registered platform users"
      icon={<Users className="h-6 w-6" />}
      color="bg-purple-50"
      iconColor="text-purple-600"
    />
    <DashboardCard 
      title="Completion Rate" 
      value="85%" 
      description="Average exam completion"
      icon={<Check className="h-6 w-6" />}
      color="bg-green-50"
      iconColor="text-green-600"
    />
  </>
);

const StudentDashboardCards = () => (
  <>
    <DashboardCard 
      title="Available Exams" 
      value="6" 
      description="Exams ready for you to take"
      icon={<FileText className="h-6 w-6" />}
      color="bg-blue-50"
      iconColor="text-blue-600"
    />
    <DashboardCard 
      title="Submitted" 
      value="4" 
      description="Exams you've completed"
      icon={<Check className="h-6 w-6" />}
      color="bg-green-50"
      iconColor="text-green-600"
    />
    <DashboardCard 
      title="Graded" 
      value="3" 
      description="Exams that have been scored"
      icon={<FileText className="h-6 w-6" />}
      color="bg-amber-50"
      iconColor="text-amber-600"
    />
  </>
);

const AssessorDashboardCards = () => (
  <>
    <DashboardCard 
      title="Pending Review" 
      value="12" 
      description="Submissions awaiting assessment"
      icon={<FileText className="h-6 w-6" />}
      color="bg-red-50"
      iconColor="text-red-600"
    />
    <DashboardCard 
      title="Reviewed Today" 
      value="5" 
      description="Submissions graded today"
      icon={<Check className="h-6 w-6" />}
      color="bg-green-50"
      iconColor="text-green-600"
    />
    <DashboardCard 
      title="Total Assessed" 
      value="47" 
      description="All-time graded submissions"
      icon={<FileText className="h-6 w-6" />}
      color="bg-blue-50"
      iconColor="text-blue-600"
    />
  </>
);

interface DashboardCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  iconColor: string;
}

const DashboardCard = ({ title, value, description, icon, color, iconColor }: DashboardCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <div className={`${color} p-2 rounded-full ${iconColor}`}>
        {icon}
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default Dashboard;
