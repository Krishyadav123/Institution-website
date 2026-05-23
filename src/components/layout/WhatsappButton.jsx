// import { FaWhatsapp } from "react-icons/fa";
import Whatsapp from "@/assets/whatsapp.svg";

import { Phone } from "lucide-react";

const WhatsappButton = () => {

  const phoneNumber = "9343760176";

  const message =
    "Hi, I want to know more about Courses";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
       bg-white
        transition-all duration-300
        p-4
        rounded-full
        border border-orange-100
        shadow-lg
        hover:bg-green-500 hover:text-white hover:border-green-500
        group
      "
    >

      {/* Icon */}
      <div className="flex items-center justify-center">

<img src={Whatsapp} alt="WhatsApp" className="w-8 h-8" />
       
      </div>

      {/* Text */}
      {/* <span className="text-black font-semibold text-sm whitespace-nowrap">
        Chat with us
      </span> */}

    </a>
  );
};

export default WhatsappButton;