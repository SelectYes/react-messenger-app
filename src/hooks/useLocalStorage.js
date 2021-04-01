import React, { useEffect, useState } from "react";

const PREFIX = "messenger-clone-";

// First, save the key
export default function useLocalStorage(key, initialValue) {
  // 'key' is the value we want to store in local storage
  // 'initialValue' is what we would normally pass through 'useState()'

  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);

    if (jsonValue != null) return JSON.parse(jsonValue);
    // If there is a a key in the local storage, return it.

    if (typeof initialValue === "function") {
      // If there's no key, just return the initialValue (Not sure where that value comes from. Maybe it's just null/undefined?)
      // Check if we are using the function version of the initialValue and invoke that function
      return initialValue();
    } else {
      // if we are not using the function version, just return a value.
      return initialValue;
    }
  });

  useEffect(() => {
    //get the value and save it into local storage.
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]); //any time prefixedKey or value changes, store it in local storage and overwrite previous value.

  return [value, setValue]; // What?? Where do these values go? This becomes [id, setId] in App.js?
  //Read up on the syntax used here...
}
