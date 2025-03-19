export interface ProjectItem { 
    id: string,
    title: string,
    subtitle: string,
    description: string,
    image: string,
    tags: string[],
    filterTags: string[],
    year: string,
    role: string,
    client: string,
    details?: ProjectDetail[],
    gallery?: string[],
    galleryGrid?: string,
    audio?: AudioDetail[],
    video?: VideoDetail[],
    links?: ProjectLink[]
}

export interface ProjectDetail {
    title: string,
    content: string
}

export interface ProjectLink {
    title: string,
    url: string,
    icon: string,
    type: string
}

export interface AudioDetail {
    src: string,
    title: string
}

export interface VideoDetail {
    src: string,
    pointer: string
}