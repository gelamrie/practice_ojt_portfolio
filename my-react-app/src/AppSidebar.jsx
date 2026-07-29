import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarHeader,
    SidebarFooter,
} from "@/components/ui/sidebar"
import { User, FileText, FolderOpen, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import profilePic from './assets/profile.png'

const navItems = [
    { label: "About", value: "about", icon: User },
    { label: "OJT Requirements", value: "requirements", icon: FileText },
    { label: "Projects", value: "projects", icon: FolderOpen },
]

const contactItems = [
    { icon: Mail, label: "Email", value: "angeladejuan55@email.com", href: "mailto:angeladejuan55@email.com" },
    { icon: Phone, label: "Phone", value: "+63 951 080 3040", href: "tel:+639510803040" },
    { icon: MapPin, label: "Location", value: "Manila, Philippines", href: null },
    { icon: Github, label: "GitHub", value: "github.com/gelamrie", href: "https://github.com/gelamrie" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/geladejuan", href: "https://www.linkedin.com/in/geladejuan/" },
]

export function AppSidebar({ activeSection, onSectionChange }) {
    return (
        <Sidebar>
            {/* Sidebar Header with profile */}
            <SidebarHeader className="flex flex-col items-center gap-2 py-6 border-b">
                <img
                    src={profilePic}
                    alt="Profile Picture"
                    className="w-16 h-16 rounded-full object-cover border-2 border-sidebar-border"
                />
                <div className="text-center">
                    <p className="text-sm font-semibold text-sidebar-foreground">Angela Marie De Juan</p>
                    <p className="text-xs text-muted-foreground">OJT Portfolio</p>
                </div>
            </SidebarHeader>

            <SidebarContent>
                {/* Navigation */}
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.value}>
                                    <SidebarMenuButton
                                        isActive={activeSection === item.value}
                                        onClick={() => onSectionChange(item.value)}
                                        className="cursor-pointer"
                                    >
                                        <item.icon />
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Contact Info */}
                <SidebarGroup>
                    <SidebarGroupLabel>Contact</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <ul className="flex flex-col gap-2 px-2">
                            {contactItems.map((item) => (
                                <li key={item.label} className="flex items-start gap-2 text-xs text-sidebar-foreground">
                                    <item.icon className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">{item.label}</span>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                                rel="noopener noreferrer"
                                                className="truncate hover:underline text-sidebar-foreground"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="truncate">{item.value}</span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
