export type FeaturedData = {
  id: number;
  title: string;
  description: string;
  icon: string;
}[];


export type SingleFeaturedData = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export interface SingleFeatureData {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export type FeatureData = SingleFeatureData[];

export interface SingleStepData {
  id: number;
  title: string;
  description: string;
}

export type StepData = SingleStepData[];
