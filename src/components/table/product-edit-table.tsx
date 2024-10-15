import { Input } from "@nextui-org/input";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { ProductInfo } from "@/types/Contact";
import { Select, SelectItem } from "@nextui-org/select";
import { DeleteIcon } from "../icons";


export default function ProductEditTable({ products }: { products: ProductInfo[] }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <Loading />;
  }

  return (
    <table>
      <thead>
        <tr className="grid grid-cols-[0.5fr_3.5fr_1fr_1fr_1fr_1fr_1fr_0.5fr] text-left text-sm">
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
            ส่วยลด/หน่วย
          </th>
          <th className="p-2 font-normal" scope="col">
            มูลค่าก่อนภาษี
          </th>
          <th className="p-2 font-normal" scope="col">
            หัก ณ ที่จ่าย
          </th>
        </tr>
      </thead>
      <tbody className="w-full">
        <tr className="grid grid-cols-[0.5fr_3.5fr_1fr_1fr_1fr_1fr_1fr_0.5fr] grid-rows-2">
          <p className="w-full border-2 border-accent flex items-center justify-center">
            1{' '}
          </p>
          <Select radius="none" variant="bordered" className="max-w-lg w-full">
            {products.map((product, index) => (
              <SelectItem key={index} variant="bordered" value={product.id}>
                {product.name}
              </SelectItem>
            ))}
          </Select>
          <Input
            name="amount"
            type="number"
            variant="bordered"
            radius="none"
            className="w-full row-span-2 "
          />
          <Input
            name="price"
            type="number"
            variant="bordered"
            radius="none"
            className="w-full row-span-2"
          />
          <Input
            name="discount"
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
          <Input
            name="tax"
            type="number"
            variant="bordered"
            radius="none"
            className="w-full row-span-2"
          />
          <div className="w-full h-full flex justify-center items-center">
            <DeleteIcon />
          </div>
        </tr>
      </tbody>
    </table>
  );
}
