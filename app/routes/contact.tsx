import { type ActionFunctionArgs, Form, useActionData } from "react-router";
import { mergeForm, useForm, useTransform } from "@tanstack/react-form";
import {
  createServerValidate,
  formOptions,
  ServerValidateError,
} from "@tanstack/react-form/remix";
import { useContext } from "react";
import { CursorContext } from "~/route-provider/context";
import { motion } from "motion/react";
import { FieldInfo, Image } from "~/components";
import { transition } from "~/lib/animation";
import WomanIMG from "/assets/contact/woman.png";

const formOpts = formOptions({
  defaultValues: {
    name: "",
    email: "",
    message: "",
  },
});

const serverValidate = createServerValidate({
  ...formOpts,
  onServerValidate: ({ value }) => {
    if (value.name.length < 3) {
      return "Tên của bạn cần dài hơn 3 kí tự";
    }

    if (value.message.length < 5) {
      return "Lời nhắn của bạn cần nhiều hơn 5 kí tự";
    }
  },
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  try {
    const validatedData = serverValidate(formData);
    console.log(
      "Test",
      `${(await validatedData).email}; ${(await validatedData).name}; ${(await validatedData).message}`,
    );
  } catch (error) {
    if (error instanceof ServerValidateError) {
      return error.formState;
    }

    throw error;
  }

  return null;
}

function Contact() {
  const actionData = useActionData<typeof action>();

  const form = useForm({
    ...formOpts,
    transform: useTransform(
      (baseForm) => mergeForm(baseForm, actionData ?? {}),
      [actionData],
    ),
  });

  // @ts-expect-error
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
      className="section bg-white"
    >
      <div className="container mx-auto h-full">
        <div className="flex h-full flex-col items-center justify-start gap-x-8 pt-36 text-center lg:flex-row lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition}
            className="absolute bottom-0 left-0 right-0 top-72 -z-10 hidden bg-[#eef7f9] lg:flex"
          ></motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="px-4 lg:flex-1 lg:pt-32"
          >
            <h1 className="h1">Liên hệ tôi</h1>
            <p className="mb-12">Rất vui lòng để có thêm ý tưởng từ các bạn</p>
            <Form
              method="post"
              className="flex flex-col gap-y-4"
              onSubmit={() => form.handleSubmit()}
            >
              <div className="flex gap-x-10">
                <form.Field
                  name="name"
                  children={(field) => (
                    <>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        type="text"
                        placeholder="Tên của bạn"
                        className="h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]"
                      />
                      <FieldInfo field={field} />
                    </>
                  )}
                />
                <form.Field
                  name="email"
                  children={(field) => (
                    <>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        type="email"
                        placeholder="Địa chỉ email của bạn"
                        className="h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]"
                      />
                      <FieldInfo field={field} />
                    </>
                  )}
                />
              </div>
              <form.Field
                name="message"
                children={(field) => (
                  <>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="text"
                      placeholder="Lời nhắn của bạn"
                      className="h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]"
                    />
                    <FieldInfo field={field} />
                  </>
                )}
              />
              <form.Subscribe
                selector={(formState) => [
                  formState.canSubmit,
                  formState.isSubmitting,
                ]}
                children={([canSubmit, isSubmitting]) => (
                  <button
                    className="btn mx-auto mb-[30px] self-start lg:mx-0"
                    type="submit"
                    disabled={!canSubmit}
                  >
                    {isSubmitting ? "..." : "Gửi"}
                  </button>
                )}
              />
            </Form>
          </div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition, duration: 1.5 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lg:flex-1"
          >
            <Image src={WomanIMG} alt="Form IMG" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
