import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const Quality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-container max-lg:flex-col gap-10 w-full">
      <div className="flex-1 flex-col">
      
      <h2 className="mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">We Provide You <span className="text-coral-red">Super</span>
        <span className="text-coral-red"> Quality</span> Shoes
        </h2>
      <p className="mt-4 lg:max-w-lg info-text">
      Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
      <br />
      <br />
      Our dedication to detail and excellence ensures your satisfaction
      </p>
      <div className="mt-11">
      <Button label="Shop Now" imgURL={arrowRight}/>
      </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
      <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default Quality