import Image from "next/image";
import { identity } from "@/content/site";
import { CopyEmailButton } from "@/components/copy-email-button";

export function Identity() {
  return (
    <div className="identity">
      <div className="identity-top">
        <div className="photo">
          <Image
            src="/images/nithu.webp"
            alt="Portrait of Nithu S Kishore, smiling"
            width={128}
            height={128}
            priority
          />
        </div>
        <div>
          <h1 className="name">{identity.name}</h1>
          <p className="headline">
            <strong>{identity.headline.lead}</strong>
            {identity.headline.rest}
          </p>
        </div>
      </div>
      <div className="identity-actions">
        <CopyEmailButton email="skishorenithu@gmail.com" />
        <a className="text-link" href="#work">
          See work ↓
        </a>
      </div>
      <p className="status">
        <span className="status-dot" aria-hidden="true" />
        {identity.status}
      </p>
    </div>
  );
}
