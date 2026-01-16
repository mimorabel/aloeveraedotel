"use client";

import { DataTable } from "@/components/tables/dataTables";
import { columns } from "./testingColumn";

export type User = {
  id: string;
  name: string;
  email: string;
};

const user = [{ id: "1", name: "Alice", email: "johndoes@gmail.com" }];

export default function TestingPage() {
  return <DataTable columns={columns} data={user} />;
}
