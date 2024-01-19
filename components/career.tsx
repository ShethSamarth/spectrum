"use client"

import * as z from "zod"
import axios from "axios"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { ElementRef, useRef, useState } from "react"
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
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { DialogClose } from "@/components/ui/dialog"

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

export const CareerForm = () => {
  const closeRef = useRef<ElementRef<"button">>(null)
  const [resume, setResume] = useState<File | null>(null)

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
    if (!resume) {
      toast.error("Upload resume")
    }

    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("mobile", data.mobile)
    formData.append("message", data.message)
    formData.append("file", resume!)

    await axios
      .post("/api/mail-resume", formData)
      .then(() => {
        form.reset()
        toast.success("Submitted successfully")
        closeRef.current?.click()
      })
      .catch(() => toast.error("Something went wrong."))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
            <Label>Upload CV</Label>
            <Input
              disabled={isSubmitting}
              type="file"
              onChange={(e) => {
                if (!e.target.files) return
                setResume(e.target.files[0])
              }}
              accept="application/pdf"
            />
          </div>
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
        <DialogClose asChild>
          <button className="hidden" ref={closeRef}>
            Close
          </button>
        </DialogClose>
        <Button
          disabled={!resume || isSubmitting}
          type="submit"
          className="w-full mt-2 bg-[#0579AA] hover:bg-[#0579AA]/80"
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}
