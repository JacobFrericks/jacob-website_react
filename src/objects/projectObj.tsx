export class ProjectObj {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    language: string;
    link: string;
    images: any[];

    constructor(obj: any) {
        this.id = obj.id;
        this.title = obj.title;
        this.subtitle = obj.subtitle;
        this.description = obj.description;
        this.language = obj.language;
        this.link = obj.link;
        this.images = obj.images;
    }
}