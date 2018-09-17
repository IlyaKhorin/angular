import { ICourseListItem } from "./icourse-list-item";
import { Author } from "./author";

export class CourseListItem implements ICourseListItem {

    constructor(
        public id: number,
        public name: string,
        public date: Date,
        public length: number,
        public description: string,
        public isTopRated: boolean,
        public authors: Author[]
    ) { }
}
