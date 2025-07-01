import z from "zod"

export const ConsigneeDetailsSchema = () => {
  return z.object({
    destination: z.string().min(1, "Fequired"),
    checkIn: z.string().min(1, "Required"),
    checkOut: z.string().min(1, "Required"),
    guests: z.number().min(1, "Required"),
  })
}

export const initialConsigneeDetails = {
  destination: "",
  checkIn: "",
  checkOut: "",
  guests: 1,
}
