import { formatDate, getAchievements } from "@/lib/utils";

export default async function Page() {
  const achievements = await getAchievements();

  return (
    <div>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-10 h-24 bg-linear-to-b from-white mask-b-from-0% backdrop-blur-sm will-change-transform"
        aria-hidden
      />
      <main className="mx-auto max-w-3xl px-4 pt-16">
        <h1 className="max-w-md text-3xl font-semibold tracking-tight md:text-4xl">
          <span className="text-violet-500">OT7 Pingpongs&apos;</span> Achievements Timeline
        </h1>

        <ol className="mt-8 md:mt-12">
          {achievements.map((achievement, index) => (
            <li className="relative flex gap-3" key={`achievement-${index + 1}`}>
              <div className="flex flex-col items-center pt-1 md:pt-1.5">
                <div className="size-4 shrink-0 rounded-full bg-violet-500" />
                <div className="-mb-1 h-full w-0.5 bg-violet-100 md:-mb-1.5" />
              </div>

              <div className="grid grid-cols-1 gap-3 pb-6 max-md:pt-0.5 md:w-full md:grid-cols-3 md:pb-12">
                <div className="md:col-span-1 md:pt-1">
                  <h2 className="text-sm text-gray-600">
                    <time dateTime={achievement.title}>{formatDate(achievement.title)}</time>
                  </h2>
                </div>

                <div className="prose md:col-span-2 dark:prose-invert prose-h3:tracking-tight">
                  {achievement.content}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </main>
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 h-24 bg-linear-to-t from-white mask-t-from-0% backdrop-blur-sm will-change-transform"
        aria-hidden
      />
    </div>
  );
}
