import React, { useState } from "react";

// hook to flip over a card
function useFlip(initialVal=false) {
  const [value, setValue] = useState(initialVal);

  const flip = () => {
    setValue(oldValue => !oldValue);
  };

  return [value, flip];
}

export default useFlip;