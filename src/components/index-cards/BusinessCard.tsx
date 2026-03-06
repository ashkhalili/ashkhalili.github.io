import React from "react";
import { FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaHospital } from "react-icons/fa";

const links = {
  linkedIn: "https://linkedin.com/in/ashkan-khalili-b63627135",
  instagram: "https://www.instagram.com/dr.ashkankhalili",
  youtube: "https://www.youtube.com/@dr-ashkan-khalili",
};

type QRProps = {
  url: string;
  label: string;
  icon: React.ReactNode;
};

const QRCode = ({ url, label, icon }: QRProps) => (
  <div className="flex flex-col items-center gap-3 p-5 glass rounded-xl">
    <img
      src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(url)}&color=1e3a5f&bgcolor=ffffff`}
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
          <div className="glass rounded-2xl overflow-hidden shadow-lg intersect:animate-fadeUp opacity-0">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950 px-8 py-6 text-white">
              <h1 className="text-2xl font-bold tracking-tight mb-1">
                Dr. Ashkan Khalili
              </h1>
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
                  <span>East Sussex Healthcare NHS Trust</span>
                </div>
                <div className="flex items-center gap-3 text-txt-p dark:text-darkmode-txt-p">
                  <FaEnvelope className="shrink-0 text-slate-500" />
                  <a href="mailto:a.khalili@nhs.net" className="hover:underline">
                    a.khalili@nhs.net
                  </a>
                </div>
                <div className="flex items-center gap-3 text-txt-p dark:text-darkmode-txt-p">
                  <FaPhone className="shrink-0 text-slate-500" />
                  <a href="tel:+447908540070" className="hover:underline">
                    0790 854 0070
                  </a>
                </div>
              </div>
              <div className="pt-2 border-t border-border dark:border-darkmode-border text-xs text-txt-s dark:text-darkmode-txt-s">
                GMC Registration: 6093082
              </div>
            </div>
          </div>
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
              url={links.linkedIn}
              label="LinkedIn"
              icon={<FaLinkedin className="text-blue-600 text-xl" />}
            />
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
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BusinessCard;
