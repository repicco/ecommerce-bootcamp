import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { ProductList } from "@/components/common/product-list";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

import { QuantitySelector } from "./components/quantity-selector";
import { VariantsSelector } from "./components/variants-selector";

interface ProductVariantProps {
  params: Promise<{ slug: string }>;
}

const ProductVariant = async ({ params }: ProductVariantProps) => {
  const { slug } = await params;
  const productVariant = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
    with: {
      product: {
        with: {
          variants: true,
        },
      },
    },
  });

  if (!productVariant) {
    return notFound();
  }

  const likelyProducts = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, productVariant.product.categoryId),
    with: {
      variants: true,
    },
  });

  return (
    <>
      <Header />
      <div className="flex flex-col space-y-6">
        <div className="relative w-full rounded-3xl h-[300px]">
          <Image
            src={productVariant.imageUrl}
            alt={productVariant.name}
            fill
            className="object-contain"
          />
        </div>

        <div className="px-5">
          {/* Variantes */}
          <VariantsSelector
            selectedVariantSlug={slug}
            variants={productVariant.product.variants}
          />
        </div>

        <div className="px-5">
          {/* Descrição */}
          <h2 className="font-semibold text-xl">
            {productVariant.product.name}
          </h2>
          <h3 className="text-sm text-muted-foreground">
            {productVariant.name}
          </h3>
          <h3 className="text-lg font-semibold">
            {formatCentsToBRL(productVariant.priceInCents)}
          </h3>
        </div>

        <div className="px-5">
          {/* Quantidade */}
          <QuantitySelector />
        </div>

        <div className="px-5  space-y-4 flex flex-col">
          {/* Botões */}
          <Button className="rounded-xl" size={"lg"} variant={"outline"}>
            Adicionar ao carrinho
          </Button>
          <Button className="rounded-xl" size={"lg"}>
            Comprar
          </Button>
        </div>

        <div className="px-5">
          <p className="text-sm">{productVariant.product.description}</p>
        </div>

        <ProductList title="Talvez você goste" products={likelyProducts} />

        <Footer />
      </div>
    </>
  );
};

export default ProductVariant;
