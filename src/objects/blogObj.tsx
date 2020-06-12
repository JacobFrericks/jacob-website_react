export class BlogObj {
    id: any;
    coverImage: string;
    title: string;
    date: string;
    description: string;

    constructor(obj: any) {
        this.id = obj.id;
        this.coverImage = obj.cover_image;
        this.title = obj.title;
        this.date = this.convertDate(obj.published_timestamp);
        this.description = obj.description;
    }

    convertDate(date: string) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        let newDate = new Date(date);
        let month = monthNames[newDate.getMonth()];
        let day = String(newDate.getDate()).padStart(2, '0');
        let year = newDate.getFullYear();

        return month + " " + day + ", " + year;
    }
}