import { ICourseListItem } from "./icourse-list-item";
import { CourseDomain } from "./course-domain.enum";

export class CourseListItem implements ICourseListItem {

    constructor(
        public id: number,
        public name: string,
        public date: Date,
        public length: number,
        public description: string,
        public domain: CourseDomain,
        public isTopRated: boolean
    ) { }
}
