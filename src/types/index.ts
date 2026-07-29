export interface ScreenInfo {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  dimensions: string;
  features: string[];
  image: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  change: string;
  description: string;
}

export interface DisciplineItem {
  id: string;
  title: string;
  subtitle: string;
  code: string;
  description: string;
  iconName: string;
  specifications: string[];
}

export interface PlannerStep {
  stepNumber: number;
  title: string;
  subtitle: string;
}

export interface ProjectScopeOption {
  id: string;
  label: string;
  estimateDays: number;
  baseCost: number;
  description: string;
}
