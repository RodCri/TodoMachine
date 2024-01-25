import { useState } from "react";
import { useEffect } from "react";

export function useLocalStorageEffect(itemName, initialValue) {

  const [listTasks, setListTasks] = useState(initialValue);

  useEffect(() => {
      if (localStorage.getItem(itemName)) {
        if (JSON.parse(localStorage.getItem(itemName)).length > 0) {
          setListTasks(JSON.parse(localStorage.getItem(itemName)));
        }
      }
    }, []);
  
    useEffect(() => {
      const savedData = [...initialValue];
      localStorage.setItem(itemName, JSON.stringify(savedData));
    }, [listTasks]);
}