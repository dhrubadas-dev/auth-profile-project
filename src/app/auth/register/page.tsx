import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Auth App",
  description: "Register page of auth profile project",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <RegisterForm />
    </section>
  );
};

export default page;
