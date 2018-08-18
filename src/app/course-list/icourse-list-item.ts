import { CourseDomain } from "./course-domain.enum";

export interface ICourseListItem {
    id: number;
    name: string;
    date: Date;
    length: number;
    description: string;
    domain: CourseDomain;
    isTopRated: boolean;
}
