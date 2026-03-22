import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Auth App",
  description: "Login page of auth profile project",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <LoginForm />
    </section>
  );
};

export default page;
