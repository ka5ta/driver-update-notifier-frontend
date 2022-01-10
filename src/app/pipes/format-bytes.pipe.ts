import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatBytes' })
export class FormatBytes implements PipeTransform {
    transform(size: number): string {
        if (size === 0) return '0 Bytes';

        const k = 1024;
        const dm = 2 < 0 ? 0 : 2;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(size) / Math.log(k));

        if (size === 382085402)
            console.log(size);

        return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
}

//Todo https://angular.io/guide/pipes


