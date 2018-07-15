import { ICourseListItem } from "./icourse-list-item";
import { CourseDomain } from "./course-domain.enum";

export class CourseListItem implements ICourseListItem{
    
    constructor(
        public id: number, 
        public title: string,
        public creationDate: Date,
        public duration: number,
        public description: string,
        public domain: CourseDomain,
        public starred: boolean
    ){}
}
