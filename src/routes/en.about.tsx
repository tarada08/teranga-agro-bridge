import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages/AboutPage";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/en/about")({
  head: () => pageMeta("en", "about"),
  component: () => <AboutPage lang="en" />,
});
