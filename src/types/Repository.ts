export interface IRepository {
  id: number;
  html_url?: string;
  description?: string | null;
  name?: string;
  language?: string;
  forks?: number;
  watchers?: number;
}
