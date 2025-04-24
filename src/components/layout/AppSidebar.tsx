
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Sidebar, 
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { useUserRole } from '@/hooks/useUserRole';
import { FileText, Users, Book, Settings } from 'lucide-react';

export function AppSidebar() {
  const { role } = useUserRole();

  const getNavItems = () => {
    const items = [
      { title: "Dashboard", path: "/dashboard", icon: <FileText className="w-5 h-5" /> }
    ];

    if (role === "admin") {
      items.push(
        { title: "Upload Exams", path: "/upload-exam", icon: <Book className="w-5 h-5" /> },
        { title: "Manage Users", path: "/manage-users", icon: <Users className="w-5 h-5" /> },
        { title: "Settings", path: "/settings", icon: <Settings className="w-5 h-5" /> }
      );
    }

    if (role === "student") {
      items.push(
        { title: "My Exams", path: "/my-exams", icon: <Book className="w-5 h-5" /> },
        { title: "Submissions", path: "/submissions", icon: <FileText className="w-5 h-5" /> }
      );
    }

    if (role === "assessor") {
      items.push(
        { title: "Grade Submissions", path: "/grade-submissions", icon: <FileText className="w-5 h-5" /> },
        { title: "Completed Grades", path: "/completed-grades", icon: <FileText className="w-5 h-5" /> }
      );
    }

    return items;
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {getNavItems().map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => 
                        isActive ? "flex items-center gap-3 w-full text-exam-primary" : "flex items-center gap-3 w-full"
                      }
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
