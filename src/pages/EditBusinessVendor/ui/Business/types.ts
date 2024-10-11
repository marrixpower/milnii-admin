export type TBusinessForm = {
  oldImages: string[];
  newImages: File[] | null;
  name: string;
  location: {
    type: string;
    coordinates: number[];
  };
  postalCode?: string;
  city: { label: string; value: string };
  address: { label: string; value: string };
  description: string;
  phone: string;
  email?: string;
  site?: string;
  priceRange?: { label: string; value: string };
  category: { label: string; value: string };
  status: { label: string; value: string };
};
