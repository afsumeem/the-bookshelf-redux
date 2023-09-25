export interface IBook {
  _id?: string;
  email?: string;
  title: string;
  image: string;
  genre: string;
  author: string;
  publicationDate: string;
  reviews?: string;
  completed?: boolean;
}

export interface UpdateBookInfo {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  email: string;
}

export interface IBookInfo {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  email: string;
  image: string;
  reviews?: [];
}
