'use client';

import { Input } from '@nextui-org/input';
import { useEffect, useState } from 'react';
import Loading from '../loading';
import { ProductInfo } from '@/types/Product';
import { Select, SelectItem } from '@nextui-org/select';
import { DeleteIcon } from '../icons';
import { ItemType } from '@/types/enum';

export type SelectedProductType = {
  name: string;
  itemID: string;
  quantity: number;
  taxRate: number;
  pricePerUnit: number;
  totalCost: number;
};

export default function ProductEditTable({
  products,
  selectedProducts,
  setSelectedProducts,
  amount,
  setAmount,
}: {
  products: ProductInfo[];
  selectedProducts: (SelectedProductType | null)[];
  setSelectedProducts: (data: (SelectedProductType | null)[]) => void;
  amount: number[];
  setAmount: (data: number[]) => void;
}) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <Loading />;
  }

  function getProductNameById(id: string): string {
    for (const item of products) {
      if (item.id === id) {
        return item.itemName; // Return the name of the item
      }
    }
    return '';
  }

  function handleSelectProduct(newId: string, index: number) {
    const result: (SelectedProductType | null)[] = [...selectedProducts];

    if (result[index] === null) {
      result[index] = {
        name: '',
        itemID: newId,
        quantity: 0,
        taxRate: 0,
        pricePerUnit: 0,
        totalCost: 0,
      };
    } else {
      result[index].itemID = newId;
      result[index].name = getProductNameById(newId);
    }

    // Update the state with the new result array
    setSelectedProducts(result);
  }

  function handleSetAmount(new_amount: number, index: number) {
    const result: number[] = [...amount];
    amount[index] = new_amount;
    setAmount(result);
  }

  return (
    <table className="mb-8">
      <thead>
        <tr className="grid grid-cols-[0.5fr_3.5fr_1fr_1fr_1fr_1fr_0.5fr] text-left text-sm">
          <th className="p-2 font-normal" scope="col">
            ลำดับ
          </th>
          <th className="p-2 font-normal" scope="col">
            สินค้า/บริการ
          </th>
          <th className="p-2 font-normal" scope="col">
            จำนวน
          </th>
          <th className="p-2 font-normal" scope="col">
            ราคา/หน่วย
          </th>
          <th className="p-2 font-normal" scope="col">
            อัตราภาษี
          </th>
          <th className="p-2 font-normal" scope="col">
            ราคารวม
          </th>
        </tr>
      </thead>
      <tbody className="w-full">
        {selectedProducts &&
          selectedProducts.map((product, index) => (
            <tr
              key={index}
              className="grid grid-cols-[0.5fr_3.5fr_1fr_1fr_1fr_1fr_0.5fr]"
            >
              <p className="w-full border-2 border-accent flex items-center justify-center">
                {index + 1}
              </p>
              <Select
                aria-label="select-product"
                key={index}
                radius="none"
                variant="bordered"
                className="max-w-lg w-full"
                onSelectionChange={(index) => handleSelectProduct}
              >
                {products.map((product, index) => (
                  <SelectItem key={index} variant="bordered" value={product.id}>
                    {product.itemName}
                  </SelectItem>
                ))}
              </Select>
              <Input
                name="amount"
                // value={amount[index].toString()}
                // onValueChange={(index) => handleSetAmount}
                type="number"
                variant="bordered"
                radius="none"
                className="w-full row-span-2 "
              />
              <Input
                name="price_per_unit"
                type="number"
                variant="bordered"
                radius="none"
                className="w-full row-span-2"
              />
              <Input
                name="price_per_unit"
                type="number"
                variant="bordered"
                radius="none"
                className="w-full row-span-2"
              />
              <Input
                name="real_price"
                type="number"
                variant="bordered"
                radius="none"
                className="w-full row-span-2"
              />
              <div className="w-full h-full flex justify-center items-center text-accent-dark">
                <DeleteIcon />
              </div>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
