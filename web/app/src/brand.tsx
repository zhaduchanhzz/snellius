import type { Brand } from "@snellius/shell";
import logoUrl from "./assets/snellius/mbfs-logo-dark-mono.svg";

/** The Snellius identity: the MBFS logo (white mono variant for the ink header, a 3:1 wordmark shown 24px high) and the lowercase wordmark. */
export const snelliusBrand: Brand = {
  productName: "snellius",
  logo: <img src={logoUrl} alt="" width={72} height={24} />,
  // Shown on the About page only for this brand; a downstream brand sets its own or none, links included.
  descriptor: "Kubernetes Gateway Management & Observability",
  tagline: "See the whole picture.",
  links: [
    { label: "Source code", href: "https://github.com/DuncanDoyle/snellius" },
    { label: "Documentation", href: "https://github.com/DuncanDoyle/snellius#readme" },
    { label: "Apache License 2.0", href: "https://github.com/DuncanDoyle/snellius/blob/main/LICENSE" },
  ],
};
