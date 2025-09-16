import React from "react";
import PriceFormatter from "./PriceFormatter";
interface Props {
  price: number | undefined;

  className?: string;
}

function PriceView({ price, className }: Props) {
  return (
    <>
      <div>
        <PriceFormatter amount={price} className={className} />
      </div>
    </>
  );
}

export default PriceView;
