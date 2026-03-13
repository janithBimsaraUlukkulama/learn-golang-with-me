import { curriculum } from "@/data/curriculum";
import LessonPageClient from "@/components/LessonPage";

export function generateStaticParams() {
  return curriculum.flatMap((mod) =>
    mod.lessons.map((lesson) => ({
      moduleId: mod.id,
      lessonId: lesson.id,
    }))
  );
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ moduleId: string; lessonId: string }>;
}) {
  const { moduleId, lessonId } = await params;
  return <LessonPageClient moduleId={moduleId} lessonId={lessonId} />;
}
