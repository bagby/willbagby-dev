export interface ResumeData {
  imagebaseurl:      string;
  name:              string;
  role:              string;
  linkedinId:        string;
  skypeid?:          string;
  roleDescription:   string;
  socialLinks:       SocialLink[];
  aboutme:           string;
  address:           string;
  website:           string;
  education:         Education[];
  work:              Work[];
  skills:            Skill[];
  pastSkills?:       Skill[];
  portfolio:         Portfolio[];
  testimonials:      Testimonial[];
}

export interface Education {
  UniversityName: string;
  specialization: string;
  MonthOfPassing: string;
  YearOfPassing:  string;
  Achievements?:   string;
}

export interface Portfolio {
  name:        string;
  description: string;
  imgurl:      string;
}

export interface Skill {
  text: string;
  value: number;
}

export interface SocialLink {
  name:      string;
  url:       string;
  className: string;
}

export interface Testimonial {
  description: string;
  name:        string;
}

export interface Work {
  CompanyName:    string;
  specialization: string;
  StartDate:      string;
  EndDate:        string;
  Achievements:   string;
}