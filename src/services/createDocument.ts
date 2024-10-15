import { BACKEND_URL } from "@/constants/api";
import { InvoiceInfo, QuotationInfo } from "@/types/DocumentInfo";
import axios from "axios";

export const postQuotation = async (document: QuotationInfo) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/createquotation`); //depend on backend
        if (response.status == 204) {
            return "ok"
        }
        else {
            return "ok with data"
        }
    } catch (err) {
        console.log(err);
        return "not ok"
    }
}

export const postInvoice = async (document: InvoiceInfo) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/createinvoice`); //depend on backend
        if (response.status == 204) {
            return "ok"
        }
        else {
            return "ok with data"
        }
    } catch (err) {
        console.log(err);
        return "not ok"
    }
}