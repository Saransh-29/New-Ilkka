export interface Product {
    id: string;
    name: string;
    category: string;
    tag: string;
    form?: string;
    description: string;
    composition: string;
    indication: string;
    color: string;
    image?: string;
  }
  
  export interface JobPost {
    id: string;
    title: string;
    department: string;
    location: string;
    type: 'Full-Time' | 'Internship' | 'Contract';
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    color: string;
  }
  
  export interface TeamMember {
    name: string;
    role: string;
    color: string;
    initial: string;
  }
  
  export interface TimelineItem {
    year: string;
    title: string;
    description: string;
  }