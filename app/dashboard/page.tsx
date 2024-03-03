import React from "react";
import Form from "@/app/ui/form";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { fetchDishes } from "@/app/lib/data";

export default async function page() {
    const customers = await fetchDishes();
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </div>
  );
}
