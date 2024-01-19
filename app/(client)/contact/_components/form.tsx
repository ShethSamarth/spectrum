"use client"

import * as z from "zod"
import axios from "axios"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { ContactDetails } from "./contact-details"

const formSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
  mobile: z
    .string()
    .min(10, { message: "Minimun 10" })
    .max(10, { message: "Maximun 10" }),
  message: z.string().min(1, { message: "Required" }),
})

type ProductFormValues = z.infer<typeof formSchema>

export const FormComponent = () => {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  })

  const { isSubmitting } = form.formState

  const onSubmit = async (data: ProductFormValues) => {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("mobile", data.mobile)
    formData.append("message", data.message)

    await axios
      .post("/api/mail", formData)
      .then(() => {
        form.reset()
        toast.success("Submitted successfully")
      })
      .catch(() => toast.error("Something went wrong."))
  }

  return (
    <section className="max-w-5xl mx-5 lg:mx-auto flex flex-col lg:flex-row justify-center items-center">
      <ContactDetails />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="lg:w-1/2 my-10 lg:my-0 max-w-sm md:max-w-md lg:max-w-lg w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div className="space-y-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        type="text"
                        placeholder="Enter name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        type="text"
                        placeholder="Enter email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        type="text"
                        placeholder="Enter mobile"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isSubmitting}
                        placeholder="Enter message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0579AA] hover:bg-[#0579AA]/80 w-full lg:w-fit"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  )
}
