import { feedbacks } from "../util/constants";
import { styles } from "../util/style";
import { FeedbackCard } from "./";

function Testimonials() {
  return (
    <div id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue-gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} w-full`}>Odamlar biz haqimizda qanday fikrda?</h2>
        <div className="w-full flex justify-end mt-6 md:mt-0">
          <p className={`${styles.paragraph} text-left max-w-[550px]`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid error itaque officiis nemo eaque fuga expedita.</p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
        {feedbacks.map((feedback, idx) => (
          <FeedbackCard key={feedback.id} {...feedback} idx={idx} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials;