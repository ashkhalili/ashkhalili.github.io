import React from "react";
import { FaEnvelope, FaPhone, FaHospital, FaWhatsapp } from "react-icons/fa";

// Pre-filled WhatsApp message so patients send the details the clinic needs
const whatsappMessage = [
  "Name:",
  "Date of birth:",
  "Reason (new appointment / follow-up / question):",
  "Eye concern or symptoms:",
  "Referred by (GP / optician / self):",
  "Insurance provider or self-pay:",
  "Preferred days/times:",
].join("\n");

export const contact = {
  locationName: "Sussex Premier Health",
  locationUrl: "https://maps.app.goo.gl/oYT6YyVzk73Di9rh6",
  email: "a.khalili@nhs.net",
  phoneDisplay: "0790 854 0070",
  phoneTel: "+447908540070",
  whatsapp: `https://wa.me/447908540070?text=${encodeURIComponent(whatsappMessage)}`,
};

const ContactCard = () => (
  <div className="glass rounded-2xl overflow-hidden shadow-lg intersect:animate-fadeUp opacity-0">
    {/* Card Header */}
    <div className="bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950 px-8 py-6 text-white">
      <h2 className="text-2xl font-bold tracking-tight mb-1 !text-white">
        Dr. Ashkan Khalili
      </h2>
      <p className="text-slate-300 text-sm font-medium tracking-widest uppercase">
        FRCOphth &middot; PhD
      </p>
    </div>
    {/* Card Body */}
    <div className="px-8 py-6 space-y-4">
      <p className="text-txt-s dark:text-darkmode-txt-s font-semibold text-base">
        Glaucoma Consultant
      </p>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3 text-txt-p dark:text-darkmode-txt-p">
          <FaHospital className="shrink-0 text-slate-500" />
          <a
            href={contact.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {contact.locationName}
          </a>
        </div>
        <div className="flex items-center gap-3 text-txt-p dark:text-darkmode-txt-p">
          <FaEnvelope className="shrink-0 text-slate-500" />
          <a href={`mailto:${contact.email}`} className="hover:underline">
            {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-3 text-txt-p dark:text-darkmode-txt-p">
          <FaPhone className="shrink-0 text-slate-500" />
          <a href={`tel:${contact.phoneTel}`} className="hover:underline">
            {contact.phoneDisplay}
          </a>
        </div>
        <div className="flex items-center gap-3 text-txt-p dark:text-darkmode-txt-p">
          <FaWhatsapp className="shrink-0 text-green-600" />
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
      <div className="pt-2 border-t border-border dark:border-darkmode-border text-xs text-txt-s dark:text-darkmode-txt-s">
        GMC Registration: 6093082
      </div>
    </div>
  </div>
);

export default ContactCard;
