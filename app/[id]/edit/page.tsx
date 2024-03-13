import EditForm from '@/app/ui/edit-form';
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { fetchCategories, fetchDishById } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [dish] = await Promise.all([fetchDishById(id)]);
  const categories = await fetchCategories();
  return (
    <main>
      <p>{dish.name}</p>
      {<EditForm dish={dish} categories={categories} />}
    </main>
  );
}
