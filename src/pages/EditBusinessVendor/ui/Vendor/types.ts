export type TVendoreForm = {
  name: string;
  category: { label: string; value: string };
  email?: string;
  city: { label: string; value: string };
  country: string;
};
