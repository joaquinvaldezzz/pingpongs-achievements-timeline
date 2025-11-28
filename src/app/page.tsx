import { cn, formatDate, getAchievements } from "@/lib/utils";

export default async function Page() {
  const achievements = await getAchievements();

  return (
    <div className="mx-auto max-w-3xl p-4">
      <ol className="">
        {achievements.map((achievement, index) => (
          <li
            className={cn(
              "relative grid grid-cols-1 items-baseline gap-2 pl-10 not-last:pb-6 md:grid-cols-3 md:gap-4",
              "before:absolute before:top-0.5 before:left-2.5 before:size-4 before:rounded-full before:bg-gray-200 md:before:top-2.5",
              "after:absolute after:top-1 after:bottom-0 after:left-4.5 after:w-px after:bg-gray-200 md:after:top-0",
            )}
            key={`achievement-${index + 1}`}
          >
            <div className="md:col-span-1">
              <h2 className="text-sm text-gray-600">
                <time className="slashed-zero" dateTime={achievement.title}>
                  {formatDate(achievement.title)}
                </time>
              </h2>
            </div>

            <div className="prose md:col-span-2 dark:prose-invert prose-h3:tracking-tight">
              {achievement.content}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
