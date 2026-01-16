import { ColumnDef } from "@tanstack/react-table"
import { User } from "./page"

export const columns: ColumnDef<User>[] = [
  {accessorKey: "id", header: "ID"},
  {accessorKey: "name", header: "Name"},
  {accessorKey: "email", header: "Email"},
]