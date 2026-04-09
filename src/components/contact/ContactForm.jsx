import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email"),
  company: z.string().min(2, "Company name is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy.",
  }),
});
const API_URL = import.meta.env.VITE_API_BASE_URL;
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [offset, setOffset] = useState(0);
  const [directionRight, setDirectionRight] = useState(true);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      privacyPolicy: false,
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error("Failed to send message");
      }

      toast.success("Message sent! We'll get back to you soon.");
      form.reset();
      setOffset(0);
    } catch (error) {
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async () => {
    const isValid = await form.trigger();
    if (isValid) {
      onSubmit(form.getValues());
    }
  };

  // const handleMouseEnter = () => {
  //   if (form.formState.isValid) return;
  //   const newOffset = directionRight ? 250 : -250;
  //   setOffset(newOffset);
  //   setDirectionRight(!directionRight);
  // };

  const handleMouseEnter = () => {
    if (form.formState.isValid) return;

    const newOffset = directionRight ? 250 : -250;
    setOffset(newOffset);
    setDirectionRight(!directionRight);
  };

  useEffect(() => {
    if (form.formState.isValid) {
      setOffset(0); // reset position when valid
    }
  }, [form.formState.isValid]);

  return (
    <div className="bg-neutral-50 px-8 py-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-6"
        >
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <FormControl>
                    <Input id="firstName" placeholder="Arun" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <FormControl>
                    <Input id="lastName" placeholder="Kumar" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="arun@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="company">Company</FormLabel>
                <FormControl>
                  <Input id="company" placeholder="Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="demo">Demo</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormControl>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Privacy Policy */}
          <FormField
            control={form.control}
            name="privacyPolicy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                <FormControl>
                  <Checkbox
                    id="privacyPolicy"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel
                    htmlFor="privacyPolicy"
                    className="text-sm text-neutral-600"
                  >
                    I agree to the{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and consent to be contacted regarding my inquiry.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="relative h-10 overflow-hidden">
            <div className="w-full flex justify-center relative">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="transition-all duration-300 absolute w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </div>
          {/* <div className="relative h-20 overflow-hidden">
            <div className="w-full flex justify-center relative">
              <Button
                type="submit"
                onMouseEnter={handleMouseEnter}
                disabled={isSubmitting}
                className="transition-all duration-300 absolute w-full"
                style={{ transform: `translateX(${offset}px)` }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </div> */}
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
