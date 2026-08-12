import { activities } from "@data/activities";
import "@componentsSection/ActivityFeed/ActivityFeed.css";

export function ActivityFeed() {
  return (
    <section className="activity-feed">
      <h2 className="activity-feed__title">Последние активности</h2>
      <div className="activity-feed__list">
        {activities.map((a) => (
          <div key={a.id} className="activity-item slide-in">
            <div
              className={`activity-item__avatar activity-item__avatar--${a.type}`}
            >
              {a.user.charAt(0)}
            </div>
            <div className="activity-item__content">
              <div className="activity-item__text">
                <strong className="activity-item__user">{a.user}</strong>{" "}
                <span className="activity-item__action">{a.action}</span>{" "}
                <span className="activity-item__target">{a.target}</span>
              </div>
              <div className="activity-item__time">{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}