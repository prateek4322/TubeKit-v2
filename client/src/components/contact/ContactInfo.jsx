import {
  Mail,
  Clock,
  Shield,
} from "lucide-react";

function ContactInfo() {
  return (
    <div className="space-y-6">

      <Info
        icon={<Mail />}
        title="Email"
        text="support@tubekit.ai"
      />

      <Info
        icon={<Clock />}
        title="Response Time"
        text="Usually within 24-48 hours"
      />

      <Info
        icon={<Shield />}
        title="Privacy"
        text="Your information is never shared."
      />

    </div>
  );
}

function Info({
  icon,
  title,
  text,
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="text-blue-400">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {text}
      </p>

    </div>
  );
}

export default ContactInfo;