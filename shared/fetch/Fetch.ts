export const  Fetch = async <T>(url: string, env?: string, params?: Record<string,string | number | object> , options?: RequestInit): Promise<T> => {
  
  
  const newParams = new URLSearchParams({
    ...(env ? { scenario: env} : {}),
    ...(params ?? {}),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}?${newParams}`, {
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