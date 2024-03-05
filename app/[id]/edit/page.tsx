import Form from '@/app/ui/edit-form';
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { fetchDishById } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [dish] = await Promise.all([fetchDishById(id)]);
  return (
    <main>
      <p>{dish.name}</p>
      {<Form dish={dish} />}
    </main>
  );
}
