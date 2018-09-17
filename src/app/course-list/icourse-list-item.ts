import { CourseDomain } from "./course-domain.enum";
import { Author } from "./author";

export interface ICourseListItem {
    id: number;
    name: string;
    date: Date;
    length: number;
    description: string;
    isTopRated: boolean;
    authors: Author[];
}
