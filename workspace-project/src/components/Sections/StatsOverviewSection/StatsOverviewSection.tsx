import folderIcon from "@assets/icons/stats/Folder.png";
import documentIcon from "@assets/icons/stats/Document.png";
import commandIcon from "@assets/icons/stats/Comand.png";
import statisticsIcon from "@assets/icons/stats/Statistics.png";
import "@componentsSection/StatsOverviewSection/StatsOverviewSection.css";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  color: string;
  icon: string;
}

export function StatsOverview() {
  return (
    <section className="stats-overview">
      <StatCard
        title="Активных проектов"
        value="10"
        change="+2"
        color="indigo"
        icon={folderIcon}
      />
      <StatCard
        title="Задач в работе"
        value="48"
        change="+12"
        color="emerald"
        icon={documentIcon}
      />
      <StatCard
        title="Участников"
        value="12"
        change="+1"
        color="orange"
        icon={commandIcon}
      />
      <StatCard
        title="Завершено за неделю"
        value="23"
        change="+8"
        color="purple"
        icon={statisticsIcon}
      />
    </section>
  );
}

function StatCard({ title, value, change, color, icon }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-card__top">
        <div className={`stat-card__icon stat-card__icon--${color}`}>
          <img src={icon} alt="" className="stat-card__icon-image" />
        </div>
        <div className="stat-card__change">{change}</div>
      </div>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__title">{title}</div>
    </div>
  );
}

