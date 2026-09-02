"use client";
import { useState } from "react";

export default function ContactForm() {
  const [done, setDone] = useState(false);

  if (done) return <p className="l-ok">✓ درخواست ثبت شد.</p>;

  return (
    <form className="l-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <input name="name" placeholder="نام و نام خانوادگی" required className="l-input" />
      <input name="company" placeholder="نام شرکت" required className="l-input" />
      <input name="phone" type="tel" placeholder="شماره تماس" required className="l-input" dir="ltr" />
      <button type="submit" className="btn btn-primary l-btn">
        Request Strategic Investigation
      </button>
    </form>
  );
}
