import { layout, styles } from "../util/style";
import { Button, FeatureCard } from "../components";
import { features } from "../util/constants";

function Business() {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Biznes rivojlantiring, <br className="hidden sm:block" />pulni hal qilamiz.</h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique earum eius eligendi quo, facere ipsam sequi soluta numquam molestias assumenda.</p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} idx={idx} />
        ))}
      </div>
    </section>
  )
}

export default Business;