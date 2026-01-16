// src/services/userService.ts
export async function getUsers(role?: string) {
  const query = role ? `?role=${role}` : "";
  const res = await fetch(`/api/users${query}`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
