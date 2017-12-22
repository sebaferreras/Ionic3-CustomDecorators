// Angular
import { AppModule } from "../app.module";

// Ionic
import { MenuController } from "ionic-angular";

export function DisableSideMenu() {

    return function (constructor) {
        const originalDidEnter = constructor.prototype.ionViewDidEnter;
        const originalDidLeave = constructor.prototype.ionViewDidLeave;
        

        constructor.prototype.ionViewDidEnter = function () {

            const menuCtrl = AppModule.injector.get(MenuController);

            // Disable the side menu when entering in the page
            menuCtrl.enable(false);

            console.log('Disabling side menu...');

            // Call the ionViewDidEnter event defined in the page
            originalDidEnter && typeof originalDidEnter === 'function' && originalDidEnter.apply(this, arguments);
        };

        constructor.prototype.ionViewDidLeave = function () {

            const menuCtrl = AppModule.injector.get(MenuController);

            // Enable the side menu when leaving the page
            menuCtrl.enable(true);

            console.log('Enabling side menu...');

            // Call the ionViewDidEnter event defined in the page
            originalDidLeave && typeof originalDidLeave === 'function' && originalDidLeave.apply(this, arguments);
        };
    }

}