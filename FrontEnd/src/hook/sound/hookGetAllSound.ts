import { MapItems } from "@/interface/sound/interfaceGetAllSound";
import { useState, useCallback } from "react";
import api from "@/service/apiService";

const useHookGetAllSound = () => {
  const [sounds, setSounds] = useState<MapItems[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredSounds = sounds.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSounds.length / itemsPerPage);

  const paginatedSounds = filteredSounds.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getAllItems = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/items");
      setSounds(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getAllItems,
    sounds,
    loading,
    setSounds,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    filteredSounds,
    paginatedSounds,
    totalPages,
  };
};

export default useHookGetAllSound;
