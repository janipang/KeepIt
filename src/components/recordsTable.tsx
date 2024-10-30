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
import { DeleteIcon, SearchIcon } from './icons';
import { Selection } from '@react-types/shared';
import { Key } from '@react-types/shared';
import { Contact } from '@/types/Contact';
import { getContacts } from '@/services/contact';
import Loading from './loading';
import { EditIcon, EyeIcon } from './icons';

const INITIAL_VISIBLE_COLUMNS = [
  'firstName',
  'businessName',
  'phone',
  // 'taxID',
  // 'address',
  'actions',
];

const columns = [
  { name: 'ชื่อไฟล์', uid: 'firstName' },
  { name: 'วันที่อัปโหลด', uid: 'businessName' },
  { name: 'ประเภท', uid: 'phone' },
  { name: 'ผู้อัปโหลด', uid: 'taxID' },
  { name: 'คำสั่ง', uid: 'actions' },
];

export default function ContactTable() {
  const [nameFilterValue, setNameFilterValue] = useState('');
  const [companyFilterValue, setCompanyFilterValue] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set<Key>());
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [contactData, setContactData] = useState<Contact[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [pending, setPending] = useState<boolean>(true);

  const pages = Math.ceil(contactData.length / rowsPerPage);

  const hasNameSearchFilter = Boolean(nameFilterValue);
  const hasCompanySearchFilter = Boolean(companyFilterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns.size === columns.length) return columns;

    return columns.filter((column) => visibleColumns.has(column.uid));
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...contactData];

    if (hasNameSearchFilter || hasCompanySearchFilter) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          (user.firstName
            .toLowerCase()
            .includes(nameFilterValue.toLowerCase()) ||
            user.lastName
              .toLowerCase()
              .includes(nameFilterValue.toLowerCase())) &&
          user.businessName
            .toLowerCase()
            .includes(companyFilterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [
    nameFilterValue,
    companyFilterValue,
    hasNameSearchFilter,
    hasCompanySearchFilter,
    contactData,
  ]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  useEffect(() => {
    async function fetchContact() {
      const data = await getContacts();
      setContactData(data);
      setPending(false);
    }

    fetchContact();
  }, []);

  const renderCell = useCallback((user: Contact, columnKey: string) => {
    const cellValue = user[columnKey as keyof Contact] as string;

    switch (columnKey) {
      case 'firstName':
        return (
          <User
            avatarProps={{ radius: 'full', size: 'sm', src: user.imgData }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user.email}
            name={user['firstName'] + ' ' + user['lastName']}
          >
            {user.phone}
          </User>
        );
      case 'businessName':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small">
              {user['businessName']?.toString().toUpperCase()}
            </p>
          </div>
        );
      case 'actions':
        return  (
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
        <div className="flex justify-between gap-2 items-end w-full">
  <p></p>
  <div className="flex gap-2 justify-end w-full">
    <Input
      isClearable
      className="w-full sm:w-[40%] max-w-[350px] border-1"
      placeholder="ค้นหาด้วยชื่อไฟล์, ผู้นำเข้า"
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
            ทั้งหมด {contactData.length} คน
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
    contactData.length,
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
      <TableBody emptyContent={'No users found'} items={contactData}>
        {(item) => (
          <TableRow key={item.contactID}>
            {(columnKey) => (
              <TableCell>
                {renderCell(item, columnKey as keyof Contact)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
