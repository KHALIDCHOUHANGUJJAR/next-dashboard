"use client";

import { Calendar, Home, Inbox, Search, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import {
  signOut,
  auth,
  onAuthStateChanged,
} from "../../../auth/firebase/firebase";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useEffect } from "react";

const items = [
  {
    title: "signout",
    url: "#",
    icon: LogOut,
  },
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Products",
    url: "/products",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/calender",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const log_Out = async () => {
    try {
      await signOut(auth);
      console.log("User successfully signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "/";
      }
    });
  }, []);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {index === 0 ? (
                      <div
                        onClick={log_Out}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </div>
                    ) : (
                      <Link href={item.url}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </div>
                      </Link>
                    )}
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
