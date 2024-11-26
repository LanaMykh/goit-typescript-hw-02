export type ImageCard = {
  id: string;
  description: string;
  alt_description: string;
  likes: number;
  urls: {
    regular: string;
    small: string;
   };
  user: {
    name: string;
  };
};