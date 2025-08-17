import {FaFacebook, FaLinkedin, FaXTwitter} from "react-icons/fa6"
import {MdOutlineEmail} from "react-icons/md"
import {FiPhoneCall} from "react-icons/fi"
import {LuMapPin} from "react-icons/lu"
import {ImAmazon} from "react-icons/im"

export const contactDetails = [
  {
    icon: FiPhoneCall,
    label: "contact",
    value: "contactNumber",
  },
  {
    icon: LuMapPin,
    label: "address",
    value: "addressLine1",
  },
  {
    icon: MdOutlineEmail,
    label: "email",
    value: "contactEmail",
  },
]

export const TopNavbarData = [
  {
    url: "https://www.amazon.com/",
    icon: ImAmazon,
    label: "amazon",
  },
  {
    url: "https://www.facebook.com/",
    icon: FaFacebook,
    label: "facebook",
  },
  {
    url: "https://www.twitter.com/",
    icon: FaXTwitter,
    label: "twitter",
  },
  {
    url: "https://www.linkedin.com/",
    icon: FaLinkedin,
    label: "linkedin",
  },
]
