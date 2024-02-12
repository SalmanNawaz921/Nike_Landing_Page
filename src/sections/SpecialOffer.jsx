import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-container max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
      <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full" />
      </div>
       <div className="flex flex-1 flex-col">
      
      <h2 className="mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg"><span className="text-coral-red">Special</span> Offer
        </h2>
      <p className="mt-4 lg:max-w-lg info-text">
      Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.      <br />
      <br />
      Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
      </p>
      <div className="mt-11 flex gap-5">
      <Button label="View Details" />
      <Button label="Learn More" borderColor={"border-coral-red"} backgroundColor={"bg-transparent"} />
      </div>
      </div>
    </section>
  )
}

export default SpecialOffer