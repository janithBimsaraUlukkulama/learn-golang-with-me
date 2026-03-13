import { curriculum } from "@/data/curriculum";
import ModulePageClient from "@/components/ModulePage";

export function generateStaticParams() {
  return curriculum.map((mod) => ({ moduleId: mod.id }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = await params;
  return <ModulePageClient moduleId={moduleId} />;
}
