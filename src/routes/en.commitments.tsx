import { createFileRoute } from "@tanstack/react-router";
import { CommitmentsPage } from "@/components/pages/CommitmentsPage";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/en/commitments")({
  head: () => pageMeta("en", "commitments"),
  component: () => <CommitmentsPage lang="en" />,
});
