import {
  Mail,
  Clock,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

function ContactInfo() {
  return (
    <div className="space-y-6">

      <Info
        icon={<Mail />}
        title="Email"
        text="support@tubekit.ai"
        href="mailto:support@tubekit.ai"
      />

      <Info
        icon={<Clock />}
        title="Response Time"
        text="Usually within 24–48 hours"
      />

      <Info
        icon={<Shield />}
        title="Privacy"
        text={
          <>
            Your information is handled according to our{" "}
            <Link
              to="/privacy-policy"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </>
        }
      />

    </div>
  );
}

function Info({
  icon,
  title,
  text,
  href,
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/90">

      <div className="text-blue-400">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">
        {title}
      </h3>

      <div className="mt-3 text-slate-400">
        {href ? (
          <a
            href={href}
            className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
          >
            {text}
          </a>
        ) : (
          <p>{text}</p>
        )}
      </div>

    </div>
  );
}

export default ContactInfo;