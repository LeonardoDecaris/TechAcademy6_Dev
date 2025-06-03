interface MapAuthor {
  id: number;
  name: string;
}

interface MapCategory {
  id: number;
  name: string;
}

export interface MapItems {
  id: number;
  name: string;
  author: MapAuthor;
  category: MapCategory;
  directory: string;
}
