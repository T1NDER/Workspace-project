import { useEffect, useState } from "react";
import { projects } from "../../../data/projects";
import "@componentsSection/ActiveProjectsRotator/ActiveProjectsRotator.css";

interface UseRotatingItemsResult<T> {
  visibleItems: T[];
  isPaused: boolean;
  setIsPaused: (v: boolean) => void;
  startIndex: number;
}

function useRotatingItems<T>(
  items: T[],
  visibleCount = 2,
  interval = 5000
): UseRotatingItemsResult<T> {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (items.length === 0 || isPaused) return;
    
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + visibleCount) % items.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [items.length, visibleCount, interval, isPaused]);

  const visibleItems: T[] = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleItems.push(items[(startIndex + i) % items.length]);
  }

  return { visibleItems, isPaused, setIsPaused, startIndex };
}


export function ActiveProjectsRotator() {
  const { visibleItems, isPaused, setIsPaused, startIndex } = useRotatingItems(
    projects,
    2,
    4000
  );
  const totalPairs = Math.ceil(projects.length / 2);
  const currentPair = Math.floor(startIndex / 2) + 1;

  return (
    <section className="rotator">
      <div className="rotator__container">
        <div className="rotator__header">
          <div className="rotator__header-left">
            <h2 className="rotator__title">Активные проекты команды</h2>
            <p className="rotator__description">
              Автоматическая ротация · {currentPair} из {totalPairs} пар
            </p>
          </div>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="rotator__toggle-btn"
          >
            {isPaused ? "Продолжить" : "Пауза"}
          </button>
        </div>

        <div className="rotator__grid" key={startIndex}>
          {visibleItems.map((project) => (
            <article key={project.id} className="rotator__card fade-in">
              <div className="rotator__card-top">
                <span className="rotator__card-badge">В работе</span>
                <span className="rotator__card-deadline">{project.deadline}</span>
              </div>
              <h3 className="rotator__card-title">{project.name}</h3>
              <p className="rotator__card-description">{project.description}</p>
              <div className="rotator__card-meta">
                {project.team} участников
              </div>
              <div className="rotator__progress">
                <div className="rotator__progress-header">
                  <span className="rotator__progress-label">Прогресс</span>
                  <span className="rotator__progress-value">
                    {project.progress}%
                  </span>
                </div>
                <div className="rotator__progress-track">
                  <div
                    className="rotator__progress-fill"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              <button className="rotator__card-link">Открыть проект →</button>
            </article>
          ))}
        </div>

        <div className="rotator__dots">
          {Array.from({ length: totalPairs }).map((_, i) => (
            <div
              key={i}
              className={`rotator__dot ${
                i === currentPair - 1 ? "rotator__dot--active" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}