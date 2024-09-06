import { CanDeactivateFn } from "@angular/router";
import { UserPreviewComponent } from "../pages/user-preview/user-preview.component";

export const userPreviewGuard: CanDeactivateFn<UserPreviewComponent> = (component) => {
    return component.isDirty 
        ? confirm('Wirklich? Mannnnnn!')
        : true;
}
