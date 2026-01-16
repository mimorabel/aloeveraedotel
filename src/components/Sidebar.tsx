"use client";

import { useEffect, useState } from "react";
import {
  Home,
  Inbox,
  User2,
  Paperclip,
  BedDouble,
  Plane,
  ChevronRight,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SubmenuItem {
  title: string;
  url: string;
  icon: React.ElementType;
}

interface Menu {
  title: string;
  icon: React.ElementType;
  url?: string;
  isActive?: boolean;
  items?: SubmenuItem[];
}

const sidebarAdmin: Menu[] = [
  { title: "Dashboard", url: "/admin/dashboard", icon: Home },
  { title: "Inbox", url: "/admin/inbox", icon: Inbox },
  {
    title: "Reports",
    icon: Paperclip,
    url: "#",
    isActive: false,
    items: [
      { title: "Rooms Report", url: "/admin/reports/room", icon: BedDouble },
      {
        title: "Reservation Report",
        url: "/admin/reports/reservation",
        icon: Plane,
      },
    ],
  },
];

export function AppSidebar() {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/set-state-in-effect
  //   setIsMounted(true);
  // }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sidebar collapsible="icon">
      {" "}
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader className="flex-row items-center justify-between p-4 group-data-[state=collapsed]:justify-center">
            <div className="flex items-center gap-2 group-data-[state=collapsed]:hidden">
              <User2 />
              <span>Logo</span>
            </div>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarAdmin.map((item) => {
                const hasSubmenu = item.items && item.items.length > 0;
                // const activeParent = item.url
                //   ? pathname.startsWith(item.url)
                //   : false;
                const parentActive =
                  item.url && item.url !== "#"
                    ? pathname === item.url
                    : item.items?.some((sub) => pathname === sub.url);
                if (isCollapsed && hasSubmenu) {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        isActive={parentActive}
                        tooltip={item.title}
                      >
                        <item.icon />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    {hasSubmenu ? (
                      <Collapsible
                        key={item.title}
                        defaultOpen={parentActive || item.isActive}
                        className="group/collapsible"
                      >
                        <div>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton
                              isActive={parentActive}
                              tooltip={item.title}
                            >
                              <item.icon />
                              <span>{item.title}</span>
                              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.items!.map((subitem) => {
                                return (
                                  <SidebarMenuSubItem key={subitem.title}>
                                    <SidebarMenuSubButton
                                      asChild
                                      isActive={pathname === subitem.url}
                                    >
                                      <Link href={subitem.url}>
                                        <subitem.icon />
                                        <span>{subitem.title}</span>
                                      </Link>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                );
                              })}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </div>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton
                        asChild={!!item.url}
                        tooltip={item.title}
                        isActive={pathname === item.url}
                      >
                        {item.url ? (
                          <Link href={item.url || "#"}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        ) : (
                          <div className="flex items-center gap-2">
                            <item.icon />
                            <span>{item.title}</span>
                          </div>
                        )}
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
