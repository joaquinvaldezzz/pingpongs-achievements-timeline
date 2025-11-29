import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import type { AvatarProps } from "./ui/avatar";

import Ahmad from "../app/avatars/ahmad.jpg";
import Alliyah from "../app/avatars/alliyah.jpg";
import Jessa from "../app/avatars/jessa.jpg";
import Jhujane from "../app/avatars/jhujane.jpg";
import Joaquin from "../app/avatars/joaquin.jpg";
import Razel from "../app/avatars/razel.jpg";
import Tal from "../app/avatars/tal.jpg";
import { Avatar } from "./ui/avatar";

type PersonName = "ahmad" | "alliyah" | "jessa" | "jhujane" | "joaquin" | "razel" | "tal";

const PEOPLE_MAP: Record<PersonName, { image: string; initials: string; name: string }> = {
  ahmad: { image: Ahmad.src, initials: "AP", name: "Ahmad Panday, RCE" },
  alliyah: { image: Alliyah.src, initials: "AL", name: "Alliyah Daphne Lao, CHRA, RPm" },
  jessa: { image: Jessa.src, initials: "JE", name: "Jessamea Cañada" },
  jhujane: { image: Jhujane.src, initials: "JH", name: "Jhujane Pante, RN" },
  joaquin: { image: Joaquin.src, initials: "JO", name: "John Joaquin Valdez" },
  razel: { image: Razel.src, initials: "RA", name: "Rirginia Razel Sabado, RN" },
  tal: { image: Tal.src, initials: "TA", name: "Christal Sofia Malbago" },
};

interface ProfilesProps {
  people: PersonName[];
}

export function Profile({ people, size = "2xl", className = "" }: AvatarProps & ProfilesProps) {
  return (
    <div className={cn("flex items-center -space-x-4", className)}>
      {people.map((person) => {
        const data = PEOPLE_MAP[person];
        return (
          <Tooltip delay={0} key={person}>
            <TooltipTrigger>
              <Avatar
                className="not-prose ring-2 ring-white dark:ring-zinc-900"
                src={data.image}
                alt={data.name}
                size={size}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </TooltipTrigger>

            <TooltipContent>
              <p>{data.name}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
