import { footerLinks, socialMedia } from "../util/constants";
import { styles } from "../util/style";
import { FooterLink } from "./";

function Footer() {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-0 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          {/* Logo */}
          <a href="/">
            <p className={`text-2xl text-white italic cursor-pointer`}>sammi<span className="text-cyan-300">Pay</span></p>
          </a>
          <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>To'lovlarni oson, ishonchli va xavfsiz qilishning yangi usuli.</p>
        </div>

        <div className="flex flex-[1.5] w-full flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map(link => (
            <FooterLink key={link.title} link={link} />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-montserrat font-normal text-center text-[18px] leading-[27px] text-white">Copyright @ 2023 SammiPay. All Right Reserved</p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, idx) => (
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${idx === socialMedia.length - 1 ? "mr-0" : "mr-6"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer;