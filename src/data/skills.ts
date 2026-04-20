export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  color: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Language",
    color: "#7F52FF",
    items: [
      { name: "Kotlin", level: 95 },
      { name: "Java", level: 85 },
      { name: "Dart", level: 75 },
    ],
  },
  {
    title: "Framework",
    color: "#3DDC84",
    items: [
      { name: "Android", level: 95 },
      { name: "Flutter", level: 75 },
      { name: "Jetpack Compose", level: 80 },
    ],
  },
  {
    title: "Architecture",
    color: "#4285F4",
    items: [
      { name: "Clean Architecture", level: 90 },
      { name: "MVVM", level: 90 },
      { name: "Multi-Module", level: 85 },
      { name: "Feature-First", level: 80 },
    ],
  },
  {
    title: "Core Tech",
    color: "#FF6B6B",
    items: [
      { name: "Coroutines / Flow", level: 90 },
      { name: "Retrofit / OkHttp", level: 90 },
      { name: "Room / DataStore", level: 85 },
      { name: "Hilt / Dagger", level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "#FFCA28",
    items: [
      { name: "Firebase", level: 85 },
      { name: "Git", level: 85 },
      { name: "CI/CD", level: 75 },
      { name: "Figma", level: 80 },
    ],
  },
  {
    title: "Collaboration",
    color: "#4ECDC4",
    items: [
      { name: "Jira", level: 85 },
      { name: "Slack", level: 90 },
      { name: "Notion", level: 85 },
      { name: "Claude Code", level: 70 },
    ],
  },
];
