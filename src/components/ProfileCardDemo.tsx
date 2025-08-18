import React from "react";
import { ProfileCard } from "./ui/profile-card";

export function ProfileCardDemo() {
  const handleFollowClick = (name: string) => {
    alert(`Following ${name}!`);
  };

  const profileData = [
    {
      title: "Sophie Bennett",
      description: "Product Designer who focuses on simplicity & usability.",
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      kind: "default" as const,
      followers: 312,
      following: 48,
      verified: true,
    },
    {
      title: "Alex Chen",
      description:
        "Frontend Developer passionate about creating beautiful user experiences.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      kind: "primary" as const,
      followers: 1205,
      following: 89,
      verified: true,
    },
    {
      title: "Maria Rodriguez",
      description:
        "Creative Director with 10+ years of experience in brand design.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      kind: "secondary" as const,
      followers: 2847,
      following: 156,
      verified: true,
    },
    {
      title: "David Kim",
      description: "Full-stack engineer building scalable web applications.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      kind: "success" as const,
      followers: 756,
      following: 234,
      verified: false,
    },
    {
      title: "Emily Johnson",
      description:
        "UX Researcher helping teams make data-driven design decisions.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      kind: "warning" as const,
      followers: 432,
      following: 67,
      verified: true,
    },
    {
      title: "James Wilson",
      description: "Mobile app developer creating innovative solutions.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      kind: "default" as const,
      size: "sm" as const,
      followers: 198,
      following: 45,
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Profile Card Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A modern, customizable profile card component with multiple variants
            and sizes. Replicating the design from your reference with
            configurable props.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {profileData.map((profile, index) => (
            <ProfileCard
              key={index}
              title={profile.title}
              description={profile.description}
              img={profile.img}
              kind={profile.kind}
              size={profile.size}
              followers={profile.followers}
              following={profile.following}
              verified={profile.verified}
              onFollowClick={() => handleFollowClick(profile.title)}
            />
          ))}
        </div>

        {/* Documentation */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Component API
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  Required Props
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                      title: string
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      The name or title to display
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                      description: string
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      Bio or description text
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                      img: string
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      Profile image URL
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  Optional Props
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <code className="text-sm font-mono text-green-600 dark:text-green-400">
                      kind?: "default" | "primary" | "secondary" | "success" |
                      "warning"
                    </code>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <code className="text-sm font-mono text-green-600 dark:text-green-400">
                      size?: "sm" | "default" | "lg"
                    </code>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <code className="text-sm font-mono text-green-600 dark:text-green-400">
                      followers?: number, following?: number
                    </code>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <code className="text-sm font-mono text-green-600 dark:text-green-400">
                      verified?: boolean, onFollowClick?: function
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Basic Usage
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <div className="text-green-400 text-sm font-mono">
                  <div className="text-purple-400">import</div>{" "}
                  {"{ ProfileCard }"}{" "}
                  <div className="text-purple-400">from</div>{" "}
                  <div className="text-yellow-400">"./ui/profile-card"</div>
                  <br />
                  <br />
                  <div className="text-purple-400">function</div>{" "}
                  <div className="text-blue-400">MyComponent</div>() {"{"}
                  <br />
                  &nbsp;&nbsp;<div className="text-purple-400">return</div> (
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
                  <div className="text-red-400">ProfileCard</div>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="text-green-300">title</div>=
                  <div className="text-yellow-400">"Sophie Bennett"</div>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="text-green-300">description</div>=
                  <div className="text-yellow-400">"Product Designer..."</div>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="text-green-300">img</div>=
                  <div className="text-yellow-400">
                    "https://example.com/profile.jpg"
                  </div>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="text-green-300">kind</div>=
                  <div className="text-yellow-400">"default"</div>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="text-green-300">onFollowClick</div>={"{"}
                  <div className="text-purple-400">() =&gt;</div> console.log(
                  <div className="text-yellow-400">"Follow clicked!"</div>){"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
                  <br />
                  &nbsp;&nbsp;)
                  <br />
                  {"}"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCardDemo;
