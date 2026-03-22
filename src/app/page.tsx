import UserProfileCard from "@/components/UserProfileCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Auth App",
  description: "Home page of auth profile project",
};

const page = () => {
  return (
    <section className="grid h-dvh grid-cols-4 place-items-center gap-4">
      <UserProfileCard />
      <UserProfileCard />
      <UserProfileCard />
      <UserProfileCard />
    </section>
  );
};

export default page;
