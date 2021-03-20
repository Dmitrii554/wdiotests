import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';


describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('speldima@inbox.ru');
        LoginPage.setPassword('181075zxcvb');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});


