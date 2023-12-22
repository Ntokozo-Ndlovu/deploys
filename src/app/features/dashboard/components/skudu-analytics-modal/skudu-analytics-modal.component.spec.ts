import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuduAnalyticsModalComponent } from './skudu-analytics-modal.component';

describe('SkuduAnalyticsModalComponent', () => {
    let component: SkuduAnalyticsModalComponent;
    let fixture: ComponentFixture<SkuduAnalyticsModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SkuduAnalyticsModalComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SkuduAnalyticsModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
