import { Calendar, Search } from "lucide-react"
import { Label } from "../ui/label"
import { createForm } from "@/hooks/use-form"
import { Form } from "../ui/form"
import { ConsigneeDetailsSchema, initialConsigneeDetails } from "@/schemas/homeschema"
import { cities } from "@/assets/assets"

function Hero() {
  const homePageForm = createForm(ConsigneeDetailsSchema(), initialConsigneeDetails)
  return (
    <div
      className="
    flex flex-col items-start justify-center
    px-6 md:px-16 lg:px-24 xl:px-32
    text-white
    bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center
    h-screen
  "
    >
      <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">The Ultimate Hotel Experience</p>
      <h1 className="text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Discover your perfect Gateway Destination
      </h1>
      <p className="mt-2 text-sm max-w-130 md:text-base">
        Unparallaled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today
        .
      </p>
      <Form {...homePageForm}>
        <form className="flex flex-col gap-4 px-6 py-4 mt-8 text-gray-500 bg-white rounded-lg md:flex-row max-md:items-start max-md:mx-auto">
          <div>
            <div className="flex items-center gap-2 ">
              <Calendar className="size-4" />
              <Label>Destination</Label>
            </div>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              placeholder="Type here"
              required
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
            {/* <SGFormField type="select" name="destination" form={homePageForm} selectValues={cities} /> */}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <Label>Check in</Label>
            </div>
            <input
              id="checkIn"
              type="date"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <Label>Check out</Label>
            </div>
            <input
              id="checkOut"
              type="date"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
            <Label>Guests</Label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
              placeholder="0"
            />
          </div>

          <button className="flex items-center justify-center gap-1 px-4 py-3 my-auto text-white bg-black rounded-md cursor-pointer max-md:w-full max-md:py-1">
            <Search />
            <span>Search</span>
          </button>
        </form>
      </Form>
    </div>
  )
}

export default Hero
