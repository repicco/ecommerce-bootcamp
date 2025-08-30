"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Quantidade</h3>
      <div className="flex items-center border justify-between rounded-lg w-[100px] gap-2">
        <Button variant="ghost" size={"icon"} onClick={handleDecrement}>
          <MinusIcon />
        </Button>

        <p>{quantity}</p>

        <Button variant="ghost" size={"icon"} onClick={handleIncrement}>
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};
