import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages/ContactPage";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/en/contact")({
  head: () => pageMeta("en", "contact"),
  component: () => <ContactPage lang="en" />,
});
