import { ShoppingBagIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <ShoppingBagIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>Cart</SheetContent>
    </Sheet>
  );
};
