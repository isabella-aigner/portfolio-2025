// Common interfaces
export interface Link {
  title: string
  url: string
  icon: string
}

export interface Detail {
  title: string
  content: string
}

export interface Skill {
  name: string
  icon: string
  code: string
  background?: string
  items?: string[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  tags: string[]
  skills: string[]
  year: string
  role: string
  client: string
  details: Detail[]
  gallery?: string[]
  audio?: {
    src: string
    title: string
  }
  video?: {
    src: string
    poster: string
  }
  links: Link[]
}

export interface HobbyItem {
  title: string
  icon: string
  description: string
}

export interface EducationItem {
  period: string
  title: string
  subtitle: string
  description: string
}

export interface ExperienceItem {
  period: string
  title: string
  company: string
  description: string
}