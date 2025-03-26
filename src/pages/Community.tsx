import React from 'react';
import { MessageSquare, Users, Award } from 'lucide-react';

function Community() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Farmer Community</h1>
        <p className="mt-2 text-gray-600">Connect, share experiences, and learn from other farmers</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <MessageSquare className="h-8 w-8 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-800">Discussion Forum</h2>
          </div>
          <div className="space-y-4">
            {/* Sample forum posts */}
            <ForumPost
              title="Best practices for organic farming"
              author="John Smith"
              replies={12}
              time="2h ago"
            />
            <ForumPost
              title="Dealing with soil erosion"
              author="Maria Garcia"
              replies={8}
              time="5h ago"
            />
            <ForumPost
              title="Water conservation techniques"
              author="David Chen"
              replies={15}
              time="1d ago"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Users className="h-8 w-8 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">Active Members</h2>
          </div>
          <div className="space-y-4">
            {/* Sample active members */}
            <Member
              name="John Smith"
              role="Organic Farmer"
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            />
            <Member
              name="Maria Garcia"
              role="Agricultural Expert"
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            />
            <Member
              name="David Chen"
              role="Sustainable Farming"
              avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Award className="h-8 w-8 text-yellow-600" />
            <h2 className="text-xl font-semibold text-gray-800">Top Contributors</h2>
          </div>
          <div className="space-y-4">
            {/* Sample top contributors */}
            <Contributor
              name="Sarah Johnson"
              points={1250}
              badge="Expert"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            />
            <Contributor
              name="Michael Brown"
              points={980}
              badge="Veteran"
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            />
            <Contributor
              name="Lisa Wong"
              points={750}
              badge="Rising Star"
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ForumPost({ title, author, replies, time }: {
  title: string;
  author: string;
  replies: number;
  time: string;
}) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h3 className="text-lg font-medium text-gray-800 hover:text-green-600 cursor-pointer">
        {title}
      </h3>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <span>{author}</span>
        <span className="mx-2">•</span>
        <span>{replies} replies</span>
        <span className="mx-2">•</span>
        <span>{time}</span>
      </div>
    </div>
  );
}

function Member({ name, role, avatar }: {
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
      <div>
        <h3 className="text-sm font-medium text-gray-800">{name}</h3>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
}

function Contributor({ name, points, badge, avatar }: {
  name: string;
  points: number;
  badge: string;
  avatar: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
      <div>
        <h3 className="text-sm font-medium text-gray-800">{name}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
            {badge}
          </span>
          <span className="text-xs text-gray-500">{points} points</span>
        </div>
      </div>
    </div>
  );
}

export default Community;