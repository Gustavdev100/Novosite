
export interface Course {
  id: string;
  title: string;
  focus: string;
  content: string[];
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar: string;
}

export interface Benefit {
  title: string;
  description: string;
  metric?: string;
}
