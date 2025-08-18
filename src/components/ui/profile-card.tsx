import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, Plus, Users, Camera } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

const profileCardVariants = cva(
  "relative bg-white dark:bg-gray-900 rounded-3xl shadow-lg border border-gray-200/50 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-xl",
  {
    variants: {
      size: {
        default: "w-full max-w-sm p-8",
        sm: "w-full max-w-xs p-6",
        lg: "w-full max-w-md p-10",
      },
      kind: {
        default: "bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800",
        primary: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950",
        secondary: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950",
        success: "bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950",
        warning: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950",
      },
    },
    defaultVariants: {
      size: "default",
      kind: "default",
    },
  }
)

const kindColors = {
  default: {
    badge: "bg-green-500",
    button: "bg-gray-900 hover:bg-gray-800 text-white",
  },
  primary: {
    badge: "bg-blue-500",
    button: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  secondary: {
    badge: "bg-purple-500",
    button: "bg-purple-600 hover:bg-purple-700 text-white",
  },
  success: {
    badge: "bg-emerald-500",
    button: "bg-emerald-600 hover:bg-emerald-700 text-white",
  },
  warning: {
    badge: "bg-amber-500",
    button: "bg-amber-600 hover:bg-amber-700 text-white",
  },
}

interface ProfileCardProps extends VariantProps<typeof profileCardVariants> {
  title: string
  description: string
  img: string
  kind?: keyof typeof kindColors
  followers?: number
  following?: number
  verified?: boolean
  onFollowClick?: () => void
  className?: string
}

function ProfileCard({
  title,
  description,
  img,
  kind = "default",
  size,
  followers = 312,
  following = 48,
  verified = true,
  onFollowClick,
  className,
  ...props
}: ProfileCardProps) {
  const colors = kindColors[kind]

  return (
    <div
      className={cn(profileCardVariants({ size, kind, className }))}
      {...props}
    >
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Verification Badge */}
          {verified && (
            <div className={cn(
              "absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center",
              colors.badge
            )}>
              <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
          )}
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-3">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="text-center mb-8">
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-center gap-8 mb-8">
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <Users className="w-4 h-4" />
          <span className="font-medium text-lg">{followers}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <Camera className="w-4 h-4" />
          <span className="font-medium text-lg">{following}</span>
        </div>
      </div>

      {/* Follow Button */}
      <div className="flex justify-center">
        <Button
          onClick={onFollowClick}
          className={cn(
            "rounded-full px-8 py-2.5 font-medium transition-all duration-200",
            colors.button,
            "hover:scale-105 active:scale-95"
          )}
        >
          <span>Follow</span>
          <Plus className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}

export { ProfileCard, type ProfileCardProps }
