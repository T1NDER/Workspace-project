export interface Project {
  id: number;
  name: string;
  status: "active" | "paused" | "done";
  progress: number;
  team: number;
  deadline: string;
  description: string;
  image: string;  
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: "online" | "away" | "offline";
}

export interface Activity {
  id: number;
  user: string;
  action: string;
  target: string;
  time: string;
  type: "task" | "project" | "file" | "deploy" | "comment";
}

export interface Task {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "done";
  assignee: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
}