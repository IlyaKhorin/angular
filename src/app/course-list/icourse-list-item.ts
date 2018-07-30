import { CourseDomain } from "./course-domain.enum";

export interface ICourseListItem {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    domain: CourseDomain;
    starred: boolean;
}
