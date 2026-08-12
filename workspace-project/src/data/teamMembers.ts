import annaAvatar from "@assets/images/team/Anna.jpg";
import mikhailAvatar from "@assets/images/team/Mikhail.jpg";
import elenaAvatar from "@assets/images/team/Elena.jpg";
import dmiriiAvatar from "@assets/images/team/Dmitrii.jpg";
import type { TeamMember } from "@/types";


export const teamMembers: TeamMember[] = [
  { 
    id: 1, 
    name: "Анна Смирнова", 
    role: "Frontend Lead", 
    avatar: annaAvatar, 
    status: "online" 
  },
  { 
    id: 2, 
    name: "Михаил Орлов", 
    role: "Backend Developer", 
    avatar: mikhailAvatar, 
    status: "online" 
  },
  { 
    id: 3, 
    name: "Елена Иванова", 
    role: "UX Designer", 
    avatar: elenaAvatar, 
    status: "away" 
  },
  { 
    id: 4, 
    name: "Дмитрий Петров", 
    role: "DevOps Engineer", 
    avatar: dmiriiAvatar, 
    status: "offline" 
  },
];