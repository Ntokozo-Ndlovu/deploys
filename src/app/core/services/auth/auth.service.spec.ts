import { AppModule } from '../../../app.module';

import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    let spy: jasmine.Spy;
    let authService: AuthService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();
        authService = TestBed.get(AuthService);
    });
    afterEach(() => (spy = null));

    it('should be created', () => {
        expect(authService).toBeTruthy();
    });
});
