'use client';

import QuotationFormat from '@/components/format/quotationFormat';
import { useEffect, useState, useRef } from 'react';
import jsPDF from 'jspdf';
import { html } from 'framer-motion/client';
import html2canvas from 'html2canvas';
import { Button } from '@nextui-org/react';
import { appendFile } from 'fs';
import { PrintIcon } from '@/components/icons';
import { getQuotationById } from '@/services/getDocument';

export default function ViewQuotation() {
  const [document, setDocument] = useState<any>(null);
  const documentRef = useRef(null);

  useEffect(() => {
    async function fetchDocumentData() {
      const data = await getQuotationById("QO00000000569");
      setDocument(data);
    }

    fetchDocumentData();
  }, []);

  async function handleGeneratePdf() {
    const inputData = documentRef.current;
    if (!inputData) {
      alert('documentRef is null');
      return;
    }
    try {
      const canvas = await html2canvas(inputData);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4',
      });

      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('Quotation.pdf');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-end">
        <Button onClick={handleGeneratePdf} isIconOnly>
          <PrintIcon />
        </Button>
      </div>
      <div ref={documentRef}>
        {' '}
        <QuotationFormat data={document} />
      </div>
    </div>
  );
}
