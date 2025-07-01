import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SGFormFieldProps {
  type: string
  name: string
  className?: string
  inputClass?: string
  form: any
  label?: string
  required?: boolean
  disabled?: boolean
  selectValues?: any
  id?: string
}
export interface SelectItemType {
  key: string
  value: string
}

export default function SGFormField({
  // id,
  type,
  name,
  className = "",
  // inputClass = "",
  form,
  label,
  disabled,
  selectValues = [],
}: // required = false,
SGFormFieldProps) {
  switch (type) {
    case "select":
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className={className} disabled={disabled}>
                      <SelectValue placeholder="Select" className="border-l-0 rounded-l-none" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {selectValues.map((item: any) => (
                      <SelectItem key={item.key} value={item.key} className="cursor-pointer hover:bg-gray-100">
                        {item.key} k
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )
    default:
      ""
  }
}
