
import React from 'react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from './AppSidebar';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { toast } from "sonner";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { signOut } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex flex-col flex-grow">
          <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-6">
            <SidebarTrigger />
            <h1 className="text-2xl font-bold text-exam-primary">Exam Share Nexus</h1>
            <Button variant="ghost" onClick={signOut}>Sign Out</Button>
          </header>
          <main className="flex-grow p-4 md:p-6 bg-gray-50">
            {children}
          </main>
          <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Exam Share Nexus. All rights reserved.
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
