export type Department = {
  id: string;
  name: string;
  logo: string;
  roundSeats: number[];
  score: {
    id: string;
    year: number;
    scoreType: string;
    min: number;
    max: number;
    avg: number;
    score: number //api don't have this field
  };
  faculty: {
    id: string;
    name: string;
    tagId: string;
    university: {
      id: string;
      name: string;
    };
  };
  updatedAt: string;
  likes: number;
};
