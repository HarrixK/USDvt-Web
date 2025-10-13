"use client";

import { useForm } from "react-hook-form";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "components/ui/button";
import { Card, CardContent, CardFooter } from "components/ui/card";
import { Input } from "components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { contactApiEndpoint } from "@/constants/apiEndpoints";

type ContactFormData = {
  workEmail: string;
  firstName: string;
  lastName: string;
  companyName: string;
  jobTitle: string;
  referralSource: string;
};

const defaultValues: ContactFormData = {
  workEmail: "",
  firstName: "",
  lastName: "",
  companyName: "",
  jobTitle: "",
  referralSource: "",
};

interface FormFieldComponentProps {
  name: keyof ContactFormData;
  label: string;
  placeholder?: string;
  type?: string;
  form: ReturnType<typeof useForm<ContactFormData>>;
}

const FormFieldComponent: React.FC<FormFieldComponentProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  form,
}) => (
  <FormField
    control={form.control}
    name={name}
    rules={{ required: `${label} is required` }}
    render={({ field }) => (
      <FormItem className="w-full">
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input type={type} placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const ContactUsForm = () => {
  const form = useForm<ContactFormData>({ defaultValues });
  const {
    handleSubmit,
    setError,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = form;

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch(contactApiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error(error);
      setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  if (isSubmitSuccessful) {
    return (
      <Card className="rounded-sm py-5 sm:py-6">
        <CardContent className="px-5 sm:px-6 text-center text-success font-medium">
          Thank you for your submission. We&apos;ll be in touch shortly.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-sm py-5 sm:py-6">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="px-5 sm:px-6">
            <div className="grid w-full items-center gap-6">
              <FormFieldComponent
                name="workEmail"
                label="Work Email"
                placeholder="example@acme.com"
                type="email"
                form={form}
              />

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-2 items-start">
                <FormFieldComponent
                  name="firstName"
                  label="First name"
                  placeholder="Your first name"
                  form={form}
                />
                <FormFieldComponent
                  name="lastName"
                  label="Last name"
                  placeholder="Your last name"
                  form={form}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-2 items-start">
                <FormFieldComponent
                  name="companyName"
                  label="Company name"
                  placeholder="Acme Ltd"
                  form={form}
                />
                <FormFieldComponent
                  name="jobTitle"
                  label="Job title"
                  placeholder="Marketing Manager"
                  form={form}
                />
              </div>

              <FormField
                control={form.control}
                name="referralSource"
                rules={{ required: "Referral source is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How did you hear about us?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent position="popper">
                        <SelectItem value="Friend">Friend</SelectItem>
                        <SelectItem value="Google">Google</SelectItem>
                        <SelectItem value="Job Portal">Job Portal</SelectItem>
                        <SelectItem value="Advertise">Advertise</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {errors.root?.message && (
                <p className="text-error text-center text-sm">
                  {errors.root.message}
                </p>
              )}
            </div>
          </CardContent>

          <CardFooter className="mt-6">
            <Button className="w-full uppercase" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="ml-2" />
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default ContactUsForm;