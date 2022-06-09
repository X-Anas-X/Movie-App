export interface Movies {
  id: string;
  poster_path: string;
  title: string;
  vote_average: number | any;
  release_date: Date;
  overview?: string;
}

export interface Genres {
  id: number;
  name: string;
}

export interface Credits {
  name: string;
  profile_path: string;
}
