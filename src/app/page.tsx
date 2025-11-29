import { formatDate, getAchievements } from "@/lib/utils";

export default async function Page() {
  const achievements = await getAchievements();

  return (
    <div className="mx-auto max-w-3xl p-4">
      <ol className="">
        {achievements.map((achievement, index) => (
          <li className="relative flex gap-3" key={`achievement-${index + 1}`}>
            <div className="flex flex-col items-center pt-1 md:pt-1.5">
              <div className="size-4 shrink-0 rounded-full bg-violet-500" />
              <div className="h-full w-0.5 bg-violet-100" />
            </div>

            <div className="grid grid-cols-1 gap-3 pb-6 max-md:pt-0.5 md:w-full md:grid-cols-3">
              <div className="md:col-span-1 md:pt-1">
                <h2 className="text-sm text-gray-600">
                  <time className="slashed-zero" dateTime={achievement.title}>
                    {formatDate(achievement.title)}
                  </time>
                </h2>
              </div>

              <div className="prose md:col-span-2 dark:prose-invert prose-h3:tracking-tight">
                {achievement.content}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
