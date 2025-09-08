import type { Movie } from "../../types/movie";
import { tmdbImage } from "../../utils/images";
import css from "./MovieGrid.module.css";

export interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  if (!movies.length) return null;

  return (
    <ul className={css.grid}>
      {movies.map((m) => (
        <li key={m.id}>
          <button
            type="button"
            className={css.card}
            onClick={() => onSelect(m)}
            aria-label={`Open details for ${m.title}`}
          >
            <img
              className={css.image}
              src={tmdbImage(m.poster_path, "w500") || "/placeholder.png"}
              alt={m.title}
              loading="lazy"
            />
            <h2 className={css.title}>{m.title}</h2>
          </button>
        </li>
      ))}
    </ul>
  );
}
