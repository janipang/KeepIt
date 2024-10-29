import { Card } from '@nextui-org/card';
import { RadioGroup, Radio } from '@nextui-org/radio';
import { Divider } from '@nextui-org/divider';
import { Input } from '@nextui-org/input';
import SelectContactGroup from '../select/selectContactGroup';
import { useState } from 'react';
import { Contact } from '@/types/Contact';
import { Button } from '@nextui-org/react';
import EnterpriseIdInput from '../input/enterpriseIdInput';
import SelectEnterpriseType from '../select/selectEnterpriseType';
import { postContact } from '@/services/contact';
import { useRouter } from 'next/navigation';
import RadioHeadquarter from '../radio/radioHeadquarter';
import { BusinessType, ContactType, NameTitle } from '@/types/enum';
import SelectNameTitle from '../select/selectNameTitle';
import RadioBusinessType from '../radio/radioBusinessType';
interface Props {
  children?: React.ReactNode;
  onClose: () => void;
}
const CreateContactForm: React.FC<Props> = ({
  children,
  onClose,
  ...props
}) => {
  const router = useRouter();
  const [type, setType] = useState<ContactType | ''>(ContactType.SUPPLIER);
  const [businessType, setBusinessType] = useState<BusinessType | ''>(
    BusinessType.COOPERATE
  );
  const [contactBusinessName, setContactBusinessName] = useState<string>('');
  const [title, setTitle] = useState<NameTitle | "">("");
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [taxID, setTaxID] = useState<string>('');
  const [imgData, setImgData] = useState<string>('');

  const handleSubmit = async () => {
    if (
      !(
        type &&
        title &&
        businessType &&
        firstName &&
        lastName &&
        phone &&
        email &&
        taxID
      )
    ) {
      alert('กรอกข้อมูลให้ครบถ้วน');
      return false;
    }
    const contact:{
      type: ContactType,
      title: NameTitle,
      businessType: BusinessType,
      contactBusinessName: string,
      firstName: string,
      lastName: string,
      phone: string,
      address: string,
      email: string,
      taxID: string,
      imgData: string,
    } = {
      type,
      title,
      businessType,
      contactBusinessName,
      firstName,
      lastName,
      phone,
      address,
      email,
      taxID,
      imgData,
    };
    console.log(contact);

    const new_contact = await postContact(contact);
    if (new_contact) {
      router.push('/contact');
    } else {
      alert('create contact failed');
    }
    postContact(contact);
  };
  return (
    <Card className="shadow-none border-none p-4 md:p-8 lg:p-12 h-fit max-h-[90vh] overflow-y-scroll">
      <form>
        <section className="flex justify-between my-4">
          <h1>เพิ่มผู้ติดต่อ</h1>
          <SelectContactGroup onValueChange={setType} />
        </section>

        <Divider />

        <section className="flex flex-col gap-4 my-4">
          <p>ข้อมูลผู้ติดต่อ</p>
          <div className="flex flex-col gap-2">
            <span className="grid grid-cols-[1fr_2fr_2fr] gap-4">
              <SelectNameTitle onValueChange={setTitle} />
              <Input
                label="ชื่อจริง"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                label="นามสกุล"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </span>
          </div>
        </section>

        <Divider />

        <section className="flex flex-col gap-4 my-4">
          <p>ข้อมูลกิจการ</p>
          <div className="flex flex-col gap-4">
            <RadioBusinessType onValueChange={setBusinessType} />
            <div className="flex flex-col gap-2">
              <p>เลขประจำตัวผู้เสียภาษี 13 หลัก</p>
              <EnterpriseIdInput onValueChange={setTaxID} />
            </div>
            <div className="flex flex-col gap-2">
              {businessType === BusinessType.COOPERATE && (
                <Input
                  label="ชื่อกิจการ"
                  type="text"
                  value={contactBusinessName}
                  onChange={(e) => setContactBusinessName(e.target.value)}
                />
              )}
              <Input
                label="ที่อยู่"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </section>

        <Divider />

        <section className="flex flex-col gap-4 my-4">
          <p>ช่องทางการติดต่อ</p>
          <div className="grid grid-cols-[2fr_3fr] gap-4">
            <Input
              label="เบอร์โทรศัพท์"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></Input>
            <Input
              label="อีเมล"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </div>
        </section>

        <Divider />

        <section className="flex flex-row justify-end gap-4 my-4">
          <Button
            className="text-tiny"
            variant="flat"
            size="sm"
            onPress={onClose}
          >
            ยกเลิก
          </Button>
          <Button
            className="text-tiny"
            color="primary"
            size="sm"
            onClick={handleSubmit}
          >
            เพิ่ม
          </Button>
        </section>
      </form>
    </Card>
  );
};
export default CreateContactForm;
