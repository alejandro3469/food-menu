export type Dishes = {
  id: string;
  image: string;
  category: string;
  name: string;
  sizes: string,
  description: string;
};

//THE DEFINITION BELOW IS WHAT IT HAS TO BE LIKE IN THE FUTURE
/*export type Dishes = {
  id: string;
  image: string;
  category: string;
  name: string;
  sizes: any[];
  description: string;
};*/
export type Categories = {
  id: string;
  name: string;
};