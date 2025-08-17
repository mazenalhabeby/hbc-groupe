// components/FeatureCard.tsx
import {ReactNode} from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 max-w-xs">
      <div className="text-red-500 text-6xl">{icon}</div>
      <div>
        <h4 className="text-blue-950 font-extrabold text-xl leading-tight">
          {title}
        </h4>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  )
}
