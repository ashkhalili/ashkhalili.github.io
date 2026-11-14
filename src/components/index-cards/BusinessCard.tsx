import React from "react";
import { FaLinkedin, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
// Hidden for now — restore along with the QR codes below:
// import { FaInstagram, FaYoutube } from "react-icons/fa";
import ContactCard, { contact } from "./ContactCard";

const links = {
  whatsapp: contact.whatsapp,
  location: contact.locationUrl,
  linkedIn: "https://linkedin.com/in/ashkan-khalili-b63627135",
  // instagram: "https://www.instagram.com/dr.ashkankhalili",
  // youtube: "https://www.youtube.com/@dr-ashkan-khalili",
};

type QRProps = {
  url: string;
  label: string;
  icon: React.ReactNode;
};

const QRCode = ({ url, label, icon }: QRProps) => (
  <div className="flex flex-col items-center gap-3 p-5 glass rounded-xl">
    <img
      src={`https://api.qrserver.com/v1/create-qr-code/?size=480x480&margin=8&data=${encodeURIComponent(url)}&color=1e3a5f&bgcolor=ffffff`}
      alt={`QR code for ${label}`}
      width={160}
      height={160}
      className="rounded-lg"
    />
    <div className="flex items-center gap-2 text-txt-p dark:text-darkmode-txt-p">
      {icon}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold hover:underline"
      >
        {label}
      </a>
    </div>
  </div>
);

const BusinessCard = () => (
  <div className="section-sm">
    <div className="container">
      {/* Business Card */}
      <div className="row justify-center mb-10">
        <div className="md:col-8 lg:col-6">
          <ContactCard />
        </div>
      </div>

      {/* QR Codes */}
      <div className="row justify-center">
        <div className="col-12">
          <h2 className="text-center text-txt-s dark:text-darkmode-txt-s text-sm font-semibold uppercase tracking-widest mb-6">
            Scan to Connect
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <QRCode
              url={links.whatsapp}
              label="WhatsApp"
              icon={<FaWhatsapp className="text-green-600 text-xl" />}
            />
            <QRCode
              url={links.location}
              label="Location"
              icon={<FaMapMarkerAlt className="text-red-500 text-xl" />}
            />
            <QRCode
              url={links.linkedIn}
              label="LinkedIn"
              icon={<FaLinkedin className="text-blue-600 text-xl" />}
            />
            {/* Hidden for now:
            <QRCode
              url={links.instagram}
              label="Instagram"
              icon={<FaInstagram className="text-pink-500 text-xl" />}
            />
            <QRCode
              url={links.youtube}
              label="YouTube"
              icon={<FaYoutube className="text-red-500 text-xl" />}
            />
            */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BusinessCard;
