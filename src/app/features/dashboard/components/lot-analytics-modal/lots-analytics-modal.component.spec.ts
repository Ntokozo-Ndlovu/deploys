import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotsAnalyticsModalComponent } from './lots-analytics-modal.component';

describe('LotsAnalyticsModalComponent', () => {
    let component: LotsAnalyticsModalComponent;
    let fixture: ComponentFixture<LotsAnalyticsModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LotsAnalyticsModalComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LotsAnalyticsModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
