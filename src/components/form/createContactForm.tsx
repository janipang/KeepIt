import { Card } from "@nextui-org/card";
import {RadioGroup, Radio} from "@nextui-org/radio";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import SelectContactGroup from "../select/selectContactGroup";
import { useState } from "react";
import { Contact } from "@/types/Contact";
import { Button } from "@nextui-org/react";
import EnterpriseIdInput from "../input/enterpriseIdInput";
import SelectEnterpriseType from "../select/selectEnterpriseType";
import { postContact } from "@/services/contact";
import { useRouter } from "next/navigation";
import RadioHeadquarter from "../radio/radioHeadquarter";
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
  const [group, setGroup] = useState<string>("");
  const [entpId, setEntpId] = useState<string>("");
  const [headquarter, setHeadquarter] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async () => {
    const contact: Contact = {
      group: group as "customer" | "provider" ,
      type: type as "personal" | "enterprise",
      name,
      address,
      phone,
      email,
      entpId: entpId,
      headquarter: headquarter as "headquarter" | "branch" | "unknown",
    };
    console.log(contact);
    const new_contact = await postContact(contact);
    if (new_contact) {
      router.push("/contact");
    } else {
      alert("create contact failed");
    }
    postContact(contact);
  }
  return (
    <Card className="shadow-none border-none p-4 md:p-8 lg:p-12">
      <form>
        <section className="flex justify-between my-4">
          <h1>เพิ่มผู้ติดต่อ</h1>
          <SelectContactGroup onValueChange={setGroup} />
        </section>
        <Divider />
        <section className="flex flex-col gap-4 my-4">
          <p>ข้อมูลกิจการ</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p>เลขทะเบียน 13 หลัก</p>
              <EnterpriseIdInput onValueChange={setEntpId} />
            </div>
            <div className="flex flex-col gap-2">
              <p>ชื่อกิจการ</p>
              <span className="flex gap-8">
                <SelectEnterpriseType onValueChange={setType} />
                <Input
                  label="ชื่อกิจการ"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Input>
              </span>
              <RadioHeadquarter onValueChange={setHeadquarter} />
            </div>
          </div>
        </section>
        <Divider />
        <section className="flex flex-col gap-4 my-4">
          <p>ที่อยู่จดทะเบียน</p>
          <Input
            label="ที่อยู่จดทะเบียน"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Input>
        </section>
        <Divider />
        <section className="flex flex-col gap-4 my-4">
          <p>ช่องทางการติดต่อ</p>
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
