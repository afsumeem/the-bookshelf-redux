export interface IBook {
  _id: number;
  title: string;
  image: string;
  genre: string;
  author: string;
  publicationDate: string;
  reviews: string;
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
