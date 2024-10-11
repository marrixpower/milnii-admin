export type TCategory = {
  createdAt: string;
  name: { lang: string; value: string; _id: string }[];
  updatedAt: string;
  _id: string;
  image: string;
};

export type TCategoryResponse = {
  docs: TCategory[];
  totalCount: number;
};
export type TGetCategoryParams = {
  name?: string;
  page?: number;
  skip?: number;
  limit?: string;
  sortBy?: string;
  order?: 1 | -1;
};

export type TEditCategoryData = {
  id: string;
  newData: {
    name: { lang: string; value: string }[];
    image?: string;
  };
};
