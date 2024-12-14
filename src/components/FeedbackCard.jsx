import { quotes } from "../assets";
import { feedbacks } from "../util/constants";

function FeedbackCard({ content, fName, title, idx }) {
  return (
    <div className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[360px] md:mr-10 sm:mr-6 mr-0 my-5 cursor-pointer feedback-card ${idx === feedbacks.length - 1 ? "sm:mr-0 md:mr-0" : "sm:mr-6 md:mr-10"}`}>
      <img src={quotes} alt="quotes" className="w-[72px] h-[57px] object-contain" />
      <p className="font-montserrat font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>

      <div className="flex flex-row">
        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-dark-gradient">
          <p className="text-[22px] font-montserrat font-semibold text-gradient">{fName.split(" ").map(c => c[0]).join(".").toUpperCase()}</p>
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white">{fName}</h4>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard;