import React from "react"
import { ProfileCard } from "../ui/profile-card"

export function ProfileCardExample() {
  const handleFollowClick = () => {
    console.log("Follow button clicked!")
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Profile Card Examples
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Default Sophie Bennett Card */}
          <ProfileCard
            title="Sophie Bennett"
            description="Product Designer who focuses on simplicity & usability."
            img="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
            kind="default"
            followers={312}
            following={48}
            verified={true}
            onFollowClick={handleFollowClick}
          />

          {/* Primary variant */}
          <ProfileCard
            title="Alex Chen"
            description="Frontend Developer passionate about creating beautiful user experiences."
            img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
            kind="primary"
            followers={1205}
            following={89}
            verified={true}
            onFollowClick={handleFollowClick}
          />

          {/* Secondary variant */}
          <ProfileCard
            title="Maria Rodriguez"
            description="Creative Director with 10+ years of experience in brand design."
            img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
            kind="secondary"
            followers={2847}
            following={156}
            verified={true}
            onFollowClick={handleFollowClick}
          />

          {/* Success variant */}
          <ProfileCard
            title="David Kim"
            description="Full-stack engineer building scalable web applications."
            img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
            kind="success"
            followers={756}
            following={234}
            verified={false}
            onFollowClick={handleFollowClick}
          />

          {/* Warning variant */}
          <ProfileCard
            title="Emily Johnson"
            description="UX Researcher helping teams make data-driven design decisions."
            img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
            kind="warning"
            followers={432}
            following={67}
            verified={true}
            onFollowClick={handleFollowClick}
          />

          {/* Small size variant */}
          <ProfileCard
            title="James Wilson"
            description="Mobile app developer creating innovative solutions."
            img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
            kind="default"
            size="sm"
            followers={198}
            following={45}
            verified={true}
            onFollowClick={handleFollowClick}
          />
        </div>

        {/* Usage example code */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Usage Example
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`import { ProfileCard } from "../ui/profile-card"

function MyComponent() {
  const handleFollowClick = () => {
    console.log("Follow button clicked!")
  }

  return (
    <ProfileCard
      title="Sophie Bennett"
      description="Product Designer who focuses on simplicity & usability."
      img="path/to/your/image.jpg"
      kind="default" // "default" | "primary" | "secondary" | "success" | "warning"
      size="default" // "sm" | "default" | "lg"
      followers={312}
      following={48}
      verified={true}
      onFollowClick={handleFollowClick}
    />
  )
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCardExample
