import { layout, styles } from "../util/style";
import { apple, bill, google } from "../assets";

function Billing() {
  return (
    <section id="services" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImageReverse}`}>
        <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />

        {/* Background Gradient */}
        <div className="absolute z-[3] -left-1/2 w-[50%] h-[55%] rounded-full top-0 white-gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 pink-gradient" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Hisob-kitob va fakturialni <br className="hidden sm:block" /> osongina boshqaring</h2>
        <p className={`${styles.paragraph}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nisi odio omnis pariatur. Minus facere assumenda vel praesentium reiciendis tempore.</p>
      
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={google} alt="google" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={apple} alt="apple" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing;