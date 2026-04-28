import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/en/")({
  head: () => pageMeta("en", "home"),
  component: () => <HomePage lang="en" />,
});
