export interface SkillBar {
  name: string;
  level: number;
}

export interface SkillCircle {
  label: string;
  value: number;
}

export const skillBars: SkillBar[] = [
  { name: "Kotlin", level: 95 },
  { name: "Java", level: 85 },
  { name: "Flutter / Dart", level: 75 },
  { name: "Clean Architecture", level: 90 },
  { name: "MVVM + Jetpack", level: 90 },
  { name: "Retrofit / OkHttp", level: 90 },
  { name: "Git / CI·CD", level: 85 },
];

export const skillCircles: SkillCircle[] = [
  { label: "Android\nNative", value: 95 },
  { label: "Architecture\nDesign", value: 90 },
  { label: "Cross\nPlatform", value: 75 },
  { label: "Network\n& API", value: 90 },
  { label: "Database\n& Storage", value: 85 },
  { label: "DevOps\n& Tools", value: 85 },
];
