export const  Fetch = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "auth": ''
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data?.message || "Error",
      status: res.status,
      data,
    };
  }

  return data;
}