"use client"; // jika Next.js 13 app directory

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/userServices";

interface User {
  id: string;
  username: string;
  role: string;
}

export default function UserList() {
  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          {user.username} ({user.role})
        </li>
      ))}
    </ul>
  );
}
