import Image from "next/image";
import userAvatar from "@/assets/contact/user/user1.png";
import { salesEmail } from "@/constants/constants";

const UserCard = () => {
  return (
    <div className="flex gap-4 ">
      <div className="max-w-24">
        <Image src={userAvatar} alt="avatar" />
      </div>
      <div className="space-y-1 text-sm">
        <div>
          <h4 className="text-base font-bold">Craig Francis</h4>
          <p className="font-bold text-accent">Head Of Sales</p>
        </div>
        <p>Email: {salesEmail}</p>
        <a href="tel:+1 2015653262">+1 940 441 3937</a>
      </div>
    </div>
  );
};

export default UserCard;
