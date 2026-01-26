import {Locator, Page} from '@playwright/test'
export class CheckoutTwoPage {

private readonly page: Page;
private readonly cancelButton: Locator;
private readonly finishButton: Locator;


constructor(page: Page){
    this.page = page;
    this.cancelButton= page.locator('[data-test="cancel"]');
    this.finishButton = page.locator('[data-test="finish"]');
}
    async clickFinishButton(): Promise<void> {
        await this.finishButton.click();
    }
}