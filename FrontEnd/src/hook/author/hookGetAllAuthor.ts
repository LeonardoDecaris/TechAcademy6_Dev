import api from "@/service/apiService";
import { useCallback, useState } from "react";

interface Item {
  id: number;
  name: string;
}

function useHookGetAllAuthor() {
  const [items, setItems] = useState<Item[]>([]);

  const getAuthor = useCallback(async () => {
    try {
      const { data } = await api.get("/authors");
      setItems(data);
    } catch (error) {
      console.log(error);
      alert("Unknown error!");
    }
  }, []);
  return {
    items,
    getAuthor,
  };
}

export default useHookGetAllAuthor;
