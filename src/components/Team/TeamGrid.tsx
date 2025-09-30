import TeamCard from "./TeamCard";
import type { TeamMember } from "./TeamCard";

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {members.map((m) => (
        <TeamCard key={m.id} m={m} />
      ))}
    </div>
  );
}