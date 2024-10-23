import {
  BankAccount,
  CashAccount,
  EWallet,
  FinancialChannel,
} from '@/types/FinancialChannel';
import { accountNameExist } from '../financialChannel';

export async function validateFinancialAccount(channel: FinancialChannel) {
  console.log(channel);
  switch (channel.type) {
    case 'cash': {
      const account = channel.account as CashAccount;
      if (
        account.name === '' ||
        account.name === null ||
        account.name === undefined
      ) {
        alert('กรุณากรอกชื่อบัญชี');
        return false;
      } else {
        if (await accountNameExist('cash', account.name)) {
          alert(
            'ชื่อบัญชีเงินสดนี้ถูกใช้ไปแล้วสำหรับบัญชีเงินสด กรุณาใช้ชื่ออื่น'
          );
          return false;
        }
      }
      return true;
    }
    case 'bankaccount': {
      const account = channel.account as BankAccount;
      if (
        !(
          account.bank ||
          account.account_type ||
          account.name ||
          account.account_number
        )
      ) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return false;
      } // check that filled all field

      if (!/^\d+$/.test(account.account_number)) {
        alert('เลขบัญชีต้องเป็นตัวเลขเท่านั้น');
        return false;
      }

      if (account.bank === 'ธ.ออมสิน') {
        if (
          account.account_number.length !== 12 &&
          account.account_number.length !== 15
        ) {
          alert('กรอกเลขบัญชี 12 หรือ 15 หลักสำหรับธนาคารออมสิน');
          return false;
        }
      } else if (account.account_number.length !== 10) {
        alert('กรอกเลขบัญชี 10 หลัก');
        return false;
      } //check digit of account_number ,every bank is 10 except ออมสิน that is 12 || 15
      return true;
    }
    case 'e-wallet': {
      const account = channel.account as EWallet;
      if (
        !(
          account.provider_type ||
          account.provider ||
          account.name ||
          account.account_number
        )
      ) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return false;
      } // check that filled all field

      if (
        account.provider === '' ||
        account.provider === null ||
        account.provider === undefined
      ) {
        alert('กรุณาเลือกผู้ให้บริการ');
        return false;
      } //กันเหนียว ไม่น่าได้ใช้

      if (!/^\d+$/.test(account.account_number)) {
        alert('เลขบัญชีต้องเป็นตัวเลขเท่านั้น');
        return false;
      }

      if (account.provider === 'PromptPay') {
        if (
          account.account_number.length !== 10 &&
          account.account_number.length !== 13
        )
          alert('กรุณากรอกเลขบัญชี 10 หรือ 13 หลัก');
        return false;
      }

      if (account.account_number.length !== 10) {
        alert('กรุณากรอกเลขบัญชีให้ถูกต้อง');
        return false;
      }

      return true;
    }
  }
}
