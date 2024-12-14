import { card } from "../assets";
import { layout, styles } from "../util/style";
import Button from "./Button";

function Contract() {
  return (
    <section id="products" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Bir necha oson qadamda <br className="hidden sm:block" />kontrakt tuzish</h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui rerum saepe laborum! Quasi incidunt dolores ullam molestiae quas officiis.</p>
        <Button styles={"mt-10"}/>
      </div>
      <div className={`${layout.sectionImage}`}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default Contract;