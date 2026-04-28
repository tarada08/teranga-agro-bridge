import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/en/services")({
  head: () => pageMeta("en", "services"),
  component: () => <ServicesPage lang="en" />,
});
