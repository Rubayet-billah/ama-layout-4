import React from "react";
import CustomContainer from "../ui/CustomContainer";
import LocationTabs from "./components/LocationTabs";
import InputText from "../ui/forms/InputText";
import Button from "../ui/Button";
import ContactForm from "./components/ContactForm";
import UserCard from "./components/UserCard";

const ContactUsPage = () => {
  return (
    <div className="mt-10">
      <main>
        {/* location tabs section */}
        <section>
          <CustomContainer>
            <LocationTabs />
          </CustomContainer>
        </section>
        {/* get in touch section */}
        <section className="">
          <CustomContainer classNames="mb-10">
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* forms section  */}
              <div className="lg:col-span-2">
                <div className="my-5">
                  <h2 className="text-lg font-bold capitalize md:text-2xl">
                    Get In Touch
                  </h2>
                  <hr className="w-10 border-[3px] rounded border-secondary" />
                </div>
                <ContactForm />
              </div>
              {/* authority contact  */}
              <div>
                <div className="my-5">
                  <h2 className="text-lg font-bold capitalize md:text-2xl">
                    Connect With us
                  </h2>
                  <hr className="w-10 border-[3px] rounded border-secondary" />
                </div>
                <div className="space-y-3">
                  <UserCard />
                </div>
              </div>
            </section>
          </CustomContainer>
        </section>
      </main>
    </div>
  );
};

export default ContactUsPage;
