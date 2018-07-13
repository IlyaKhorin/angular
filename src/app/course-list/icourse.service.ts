import { ICourseListItem } from "./icourse-list-item";

export interface ICourseService{
    getCourseItems(): ICourseListItem[];
}