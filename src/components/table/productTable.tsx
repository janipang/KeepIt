'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  User,
  Pagination,
  SortDescriptor,
  Tooltip,
} from '@nextui-org/react';
import { DeleteIcon, SearchIcon } from '../icons';
import { Selection } from '@react-types/shared';
import { Key } from '@react-types/shared';
import { Contact } from '@/types/Contact';
import { getContacts } from '@/services/contact';
import Loading from '../loading';
import { EditIcon, EyeIcon } from '../icons';
import { getProducts } from '@/services/product';
import { ProductInfo } from '@/types/Product';

const INITIAL_VISIBLE_COLUMNS = [
  'name', //img + name + description
  'type', // สินค้า หรือ บริการ
  'price',
  'amount', // amount + unit type
  'actions',
];

const columns = [
  { name: 'ชื่อสินค้า', uid: 'name' },
  { name: 'ประเภท', uid: 'type' },
  { name: 'ราคา/หน่วย', uid: 'price' },
  { name: 'จำนวน', uid: 'amount' },
  { name: 'คำสั่ง', uid: 'actions' },
];

export default function ProductTable() {
  const [nameFilterValue, setNameFilterValue] = useState('');
  const [companyFilterValue, setCompanyFilterValue] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set<Key>());
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [productData, setProductData] = useState<ProductInfo[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [pending, setPending] = useState<boolean>(true);

  const pages = Math.ceil(productData.length / rowsPerPage);

  const hasNameSearchFilter = Boolean(nameFilterValue);
  const hasCompanySearchFilter = Boolean(companyFilterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns.size === columns.length) return columns;

    return columns.filter((column) => visibleColumns.has(column.uid));
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...productData];

    if (hasNameSearchFilter) {
      filteredUsers = filteredUsers.filter(
        (product) =>
          product.itemName.toLowerCase().includes(nameFilterValue.toLowerCase())
        // && product.itemDescription
        // .toLowerCase()
        // .includes(companyFilterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [nameFilterValue, , hasNameSearchFilter, , productData]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProducts();
      setProductData(data);
      setPending(false);
    }

    fetchProduct();
  }, []);

  const renderCell = useCallback((product: ProductInfo, columnKey: string) => {
    const cellValue = product[columnKey as keyof ProductInfo] as string;

    switch (columnKey) {
      case 'name':
        return (
          <User
            // avatarProps={{ radius: 'full', size: 'sm', src: product.imgData }}
            avatarProps={{ radius: 'full', size: 'sm', src: "https://github.com/user-attachments/assets/5beef5f4-f331-44e8-bb48-15fd7d5de2b3" }}
            classNames={{
              description: 'text-default-500',
            }}
            description={product.itemDescription}
            name={product.itemName}
            className='max-w-lg'
          />
        );
        case 'type':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small">
                {product.itemType}
              </p>
            </div>
          );
        case 'price':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small">
                {product.quantity + ' ' + 'บาท'}
              </p>
            </div>
          );
      case 'amount':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small">
              {product.quantity + ' ' + product.unitType}
            </p>
          </div>
        );
      case 'actions':
        return (
          <div className="relative flex items-end gap-2 h-4">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return <p>{cellValue}</p>;
    }
  }, []);

  const onRowsPerPageChange = useCallback((e: any) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onNameSearchChange = useCallback((value: any) => {
    if (value) {
      setNameFilterValue(value);
      setPage(1);
    } else {
      setNameFilterValue('');
    }
  }, []);

  const onCompanySearchChange = useCallback((value: any) => {
    if (value) {
      setCompanyFilterValue(value);
      setPage(1);
    } else {
      setCompanyFilterValue('');
    }
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <p>สินค้าทั้งหมด :</p>
          <div className="flex gap-2 justify-end">
            <Input
              isClearable
              classNames={{
                base: 'w-full sm:max-w-[44%]',
                inputWrapper: 'border-1',
              }}
              placeholder="Search by name..."
              size="sm"
              startContent={<SearchIcon className="text-default-300" />}
              value={nameFilterValue}
              variant="bordered"
              onClear={() => setNameFilterValue('')}
              onValueChange={onNameSearchChange}
            />
            <Input
              isClearable
              classNames={{
                base: 'w-full sm:max-w-[44%]',
                inputWrapper: 'border-1',
              }}
              placeholder="Search by description"
              size="sm"
              startContent={<SearchIcon className="text-default-300" />}
              value={companyFilterValue}
              variant="bordered"
              onClear={() => setCompanyFilterValue('')}
              onValueChange={onCompanySearchChange}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            ทั้งหมด {productData.length} ชิ้น
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    nameFilterValue,
    companyFilterValue,
    onNameSearchChange,
    onCompanySearchChange,
    onRowsPerPageChange,
    productData.length,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: 'bg-foreground text-background',
          }}
          color="default"
          isDisabled={hasNameSearchFilter || hasCompanySearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [
    selectedKeys,
    items.length,
    page,
    pages,
    hasNameSearchFilter,
    hasCompanySearchFilter,
  ]);

  const classNames = useMemo(
    () => ({
      wrapper: ['max-h-[382px]', 'max-w-3xl'],
      th: ['bg-transparent', 'text-default-500', 'border-b', 'border-divider'],
      td: [
        // changing the rows border radius
        // first
        'group-data-[first=true]:first:before:rounded-none',
        'group-data-[first=true]:last:before:rounded-none',
        // middle
        'group-data-[middle=true]:before:rounded-none',
        // last
        'group-data-[last=true]:first:before:rounded-none',
        'group-data-[last=true]:last:before:rounded-none',
      ],
    }),
    []
  );
  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Example table with custom cells, pagination, and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: 'after:bg-foreground after:text-background text-background',
        },
      }}
      classNames={classNames}
      selectedKeys={selectedKeys as Selection}
      selectionMode="multiple"
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={(keys) => setSelectedKeys(keys)}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No users found'} items={productData}>
        {(item) => (
          <TableRow key={item.itemName}>
            {(columnKey) => (
              <TableCell>
                {renderCell(item, columnKey as keyof ProductInfo)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
