import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="contactPage">
      <div className="contactContainer">

        <h1>Let's Work Together</h1>

        <p>
          Have a project in mind? We'd love to hear from you.
          Reach out through any of the platforms below.
        </p>

        <div className="contactCards">

          <a
            href="https://instagram.com/nexoracircle"
            target="_blank"
            className="contactCard"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/94700000000"
            target="_blank"
            className="contactCard"
          >
            WhatsApp
          </a>

          <a
            href="https://tiktok.com/@nexoracircle"
            target="_blank"
            className="contactCard"
          >
            TikTok
          </a>

        </div>

        <Link href="/" className="backBtn">
          ←     Back Home
        </Link>

      </div>
    </main>
  );
}