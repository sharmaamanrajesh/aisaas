// components/ActionCard.tsx
interface ActionCardProps {
  title: string;
  icon: string;
}

export default function ActionCard({ title, icon }: ActionCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center shadow-md">
      <div className="text-3xl mb-4">{icon}</div>
      <div className="text-center font-semibold">{title}</div>
    </div>
  );
}
