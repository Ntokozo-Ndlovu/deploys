import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { InvalidPDFException, PagesLoadedEvent } from 'ngx-extended-pdf-viewer';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-document-viewer',
    templateUrl: './document-viewer.component.html',
    styleUrls: ['./document-viewer.component.scss'],
})
export class DocumentViewerComponent implements OnInit {
    pdfUrl: string;
    pdfViewerReady = false;
    pdfPageCount: number;

    constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}

    ngOnInit(): void {
        this.route.params.pipe(take(1)).subscribe(({ name }) => {
            name ? (this.pdfUrl = `./assets/files/${name}`) : this.handleClose();
        });
    }

    handlePDFLoadFailEvent(exception: InvalidPDFException): void {
        if (exception.name === 'InvalidPDFException') {
            window.open(this.pdfUrl);
            this.handleClose();
        }
    }

    handlePDFLoadingEvent(event: PagesLoadedEvent): void {
        this.pdfPageCount = event.pagesCount;
        this.pdfViewerReady = event.pagesCount > 0;
    }

    handleClose(): void {
        this.location.back();
    }
}
