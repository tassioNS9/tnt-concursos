import { useQuery } from "@tanstack/react-query";

export function useGetAnswer(alternativeId: string | null) {
  return useQuery({
    queryKey: ["answer", alternativeId],
    queryFn: async () => {
      const res = await fetch("/api/alternative/" + alternativeId);
      return res.json();
    },
  });
}
