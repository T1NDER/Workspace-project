import { useState } from "react";
import { WorkspaceSidebar } from "@componentsSection/WorkspaceSidebar/WorkspaceSidebar";
import { StatsOverview } from "@componentsSection/StatsOverviewSection/StatsOverviewSection";
import { ActiveProjectsRotator } from "@componentsSection/ActiveProjectsRotator/ActiveProjectsRotator";
import { ProjectsSection } from "@componentsSection/ProjectsSection/ProjectsSection";
import { TasksSection } from "@componentsSection/TasksSection/TasksSection";
import { TeamMembersSection } from "@componentsSection/TeamMembersSection/TeamMembersSection";
import { ActivityFeed } from "@componentsSection/ActivityFeed/ActivityFeed";
import "@components/AppMain/AppMain.css";

export function AppMain() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <main className="main">
      <div className="main__layout">
        <WorkspaceSidebar activeSection={activeSection} setActiveSection={setActiveSection}/>

        <section className="main__content">
          <div className="main__content-header">
            
            <div className="main__content-header-left">
              <h1 className="main__title">Рабочее пространство команды</h1>
              <p className="main__subtitle">Среда, 12 августа 2026</p>
            </div>
            
            <button className="main__new-btn">+ Новый проект</button>
          </div>

          <StatsOverview />
          <ActiveProjectsRotator />
          <ProjectsSection />
          <TasksSection />
          <TeamMembersSection />
          <ActivityFeed />
        </section>
      </div>
    </main>
  );
}