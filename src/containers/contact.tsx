import SectionTitle from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { Instagram, Mail, Wheat } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-card bg-opacity-80 backdrop-blur-md border rounded-xl p-6 flex flex-col items-center gap-y-6 md:gap-y-12"
    >
      <Effect variant="ball" size="default" className="-top-4 -end-4" />
      <SectionTitle title="get in touch" description="let's work together" />
      <div className="flex gap-4">
        <a
          href="mailto:gddfggggdadg12@gmail.com"
          className={buttonVariants({ size: "lg" })}
        >
          <Mail className="size-4" />
          <span>si hello</span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
