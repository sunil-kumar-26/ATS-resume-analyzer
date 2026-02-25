import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const defaultMenuKey: string | null = localStorage.getItem("defaultMenuKey");
  const [storage, setStorage] = useState<string>(defaultMenuKey || "1");
  useEffect(() => {
    localStorage.setItem("defaultMenuKey", storage);
  }, [storage]);
  return { defaultMenuKey, setStorage };
};

export default useLocalStorage;
