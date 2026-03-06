import React, { useState, useRef } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaStar } from "react-icons/fa";

// ── Formspree credentials ────────────────────────────────────────────────────
const FORMSPREE_ID = "YOUR_FORM_ID"; // Formspree → your form ID, e.g. "xpwzgkjd"
// ────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "submitting" | "success" | "error";
const POSTOP = "Post-operative Feedback";

const input = "w-full rounded-lg border border-border dark:border-darkmode-border bg-bg-p dark:bg-darkmode-bg-p text-txt-p dark:text-darkmode-txt-p px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 transition";
const lbl   = "block text-sm font-semibold text-txt-p dark:text-darkmode-txt-p mb-1.5";
const sec   = "border-t border-border dark:border-darkmode-border pt-6 mt-6";

const RATING_LABELS = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

const StarRating = ({ name, label, value, onChange }: { name: string; label: string; value: number; onChange: (v: number) => void }) => {
  const [hovered, setHovered] = useState(0);
  const active = hovered || value;
  return (
    <div>
      <p className={lbl}>{label} <span className="text-red-500">*</span></p>
      <input type="hidden" name={name} value={value || ""} />
      <div className="flex gap-1" onMouseLeave={() => setHovered(0)}>
        {[1,2,3,4,5].map(n => (
          <button key={n} type="button" onClick={() => onChange(n)} onMouseEnter={() => setHovered(n)}
            aria-label={`${n} star${n > 1 ? "s" : ""}`} className="text-3xl transition-colors focus:outline-none">
            <FaStar className={active >= n ? "text-yellow-400 drop-shadow-sm" : "text-gray-300 dark:text-gray-600"} />
          </button>
        ))}
      </div>
      {value > 0 && <p className="mt-1 text-xs text-txt-s dark:text-darkmode-txt-s">{RATING_LABELS[value]}</p>}
    </div>
  );
};

const INIT = { overall:0, vision:0, communication:0, staff:0, recovery:0, recommend:0 };

export default function ContactFormFormspree() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus]   = useState<Status>("idle");
  const [error, setError]     = useState("");
  const [enquiry, setEnquiry] = useState(POSTOP);
  const [ratings, setRatings] = useState(INIT);
  const [formKey, setFormKey] = useState(0);
  const isPostOp = enquiry === POSTOP;
  const set = (k: keyof typeof INIT) => (v: number) => setRatings(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPostOp && Object.values(ratings).some(v => v === 0)) {
      setError("Please complete all star ratings."); setStatus("error"); return;
    }
    setStatus("submitting"); setError("");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(formRef.current!),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success"); setRatings(INIT); setEnquiry(""); setFormKey(k => k + 1);
      } else {
        const json = await res.json();
        setError(json?.errors?.map((e: { message: string }) => e.message).join(", ") || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") return (
    <div className="glass rounded-xl p-10 text-center">
      <FaCheckCircle className="mx-auto mb-4 text-5xl text-green-500" />
      <h3 className="text-xl font-bold text-txt-p dark:text-darkmode-txt-p mb-2">
        {isPostOp ? "Feedback Received" : "Message Received"}
      </h3>
      <p className="text-sm text-txt-s dark:text-darkmode-txt-s">
        {isPostOp ? "Thank you — your feedback helps us improve patient care." : "Thank you for getting in touch. We will respond as soon as possible."}
      </p>
      <button onClick={() => setStatus("idle")} className="mt-6 text-sm underline hover:opacity-70 transition text-txt-s dark:text-darkmode-txt-s">
        Submit another response
      </button>
    </div>
  );

  return (
    <form key={formKey} ref={formRef} onSubmit={handleSubmit} noValidate className="glass rounded-xl p-8">
      {/* Personal details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div><label htmlFor="fs_name" className={lbl}>Full Name <span className="text-red-500">*</span></label>
          <input id="fs_name" name="name" type="text" required autoComplete="name" placeholder="Jane Smith" className={input} /></div>
        <div><label htmlFor="fs_email" className={lbl}>Email <span className="text-red-500">*</span></label>
          <input id="fs_email" name="email" type="email" required autoComplete="email" placeholder="jane@example.com" className={input} /></div>
        <div><label htmlFor="fs_phone" className={lbl}>Phone <span className="font-normal text-txt-s dark:text-darkmode-txt-s">(optional)</span></label>
          <input id="fs_phone" name="phone" type="tel" autoComplete="tel" placeholder="+44 7xxx xxxxxx" className={input} /></div>
        <div><label htmlFor="fs_enquiry" className={lbl}>Enquiry Type <span className="text-red-500">*</span></label>
          <select id="fs_enquiry" name="enquiry" required value={enquiry} onChange={e => setEnquiry(e.target.value)} className={input}>
            <option value="" disabled>Select…</option>
            <option>Appointment Request</option>
            <option>Referral</option>
            <option value={POSTOP}>Post-operative Feedback</option>
            <option>General Enquiry</option>
            <option>Other</option>
          </select></div>
      </div>

      {/* Post-op section */}
      {isPostOp && (
        <div className={sec}>
          <h3 className="text-base font-bold text-txt-p dark:text-darkmode-txt-p mb-5">Post-operative Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div><label htmlFor="fs_procedure" className={lbl}>Procedure <span className="text-red-500">*</span></label>
              <select id="fs_procedure" name="procedure" required defaultValue="" className={input}>
                <option value="" disabled>Select…</option>
                <option>Cataract Surgery</option><option>Trabeculectomy</option><option>Tube Shunt Surgery</option>
                <option value="MIGS">Minimally Invasive Glaucoma Surgery (MIGS)</option>
                <option value="SLT">Selective Laser Trabeculoplasty (SLT)</option>
                <option>YAG Laser Capsulotomy</option>
                <option>Combined Cataract &amp; Glaucoma Surgery</option><option>Other</option>
              </select></div>
            <div><label htmlFor="fs_date" className={lbl}>Approximate Date <span className="text-red-500">*</span></label>
              <input id="fs_date" name="procedure_date" type="month" required className={input} /></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
            <StarRating name="rating_overall"       label="Overall experience"                        value={ratings.overall}       onChange={set("overall")} />
            <StarRating name="rating_vision"        label="Satisfaction with vision outcome"          value={ratings.vision}        onChange={set("vision")} />
            <StarRating name="rating_communication" label="How clearly risks/benefits were explained" value={ratings.communication} onChange={set("communication")} />
            <StarRating name="rating_staff"         label="Quality of care from the clinical team"    value={ratings.staff}         onChange={set("staff")} />
            <StarRating name="rating_recovery"      label="Support and information for recovery"      value={ratings.recovery}      onChange={set("recovery")} />
            <StarRating name="rating_recommend"     label="Likelihood to recommend Mr. Khalili"       value={ratings.recommend}     onChange={set("recommend")} />
          </div>
          <div className="space-y-5">
            <div><label htmlFor="fs_concerns" className={lbl}>Concerns during recovery?</label>
              <textarea id="fs_concerns" name="recovery_concerns" rows={3} placeholder="e.g. pain, redness, visual disturbance…" className={`${input} resize-none`} /></div>
            <div><label htmlFor="fs_well" className={lbl}>What went particularly well?</label>
              <textarea id="fs_well" name="went_well" rows={3} className={`${input} resize-none`} /></div>
            <div><label htmlFor="fs_improve" className={lbl}>What could we improve?</label>
              <textarea id="fs_improve" name="improvements" rows={3} className={`${input} resize-none`} /></div>
          </div>
        </div>
      )}

      {/* Message */}
      <div className={sec}>
        <label htmlFor="fs_message" className={lbl}>
          {isPostOp ? "Any further comments" : <>Message <span className="text-red-500">*</span></>}
        </label>
        <textarea id="fs_message" name="message" required={!isPostOp} rows={4}
          placeholder={isPostOp ? "Anything else you would like to share…" : "Please describe your enquiry…"}
          className={`${input} resize-none`} />
      </div>

      {/* Consent */}
      <div className="mt-6 mb-8 flex items-start gap-3">
        <input id="fs_consent" name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 rounded accent-slate-700" />
        <label htmlFor="fs_consent" className="text-xs text-txt-s dark:text-darkmode-txt-s leading-relaxed">
          I consent to my personal data being processed to respond to this enquiry, in accordance with UK GDPR.
          Data will not be shared with third parties or used for marketing. <span className="text-red-500">*</span>
        </label>
      </div>

      {status === "error" && (
        <div className="mb-6 flex items-start gap-2 rounded-lg border border-red-300 bg-red-50 dark:bg-red-950/30 dark:border-red-800 px-4 py-3">
          <FaExclamationCircle className="mt-0.5 shrink-0 text-red-500" />
          <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
        </div>
      )}

      <button type="submit" disabled={status === "submitting"}
        className="flex items-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 text-sm transition">
        {status === "submitting"
          ? <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/></svg>Sending…</>
          : <><FaPaperPlane />{isPostOp ? "Submit Feedback" : "Send Message"}</>}
      </button>
    </form>
  );
}
