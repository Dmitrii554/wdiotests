import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }
    get loginValidationError () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]'); }


    setLogin (email) {
        this.inputUsername.setValue(email);
    }

    setPassword (password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton () {
        this.buttonSubmit.click();
    }

    open () {
        return super.open('/');
    }

    emptyLoginInput() {
        this.clearInput(this.inputUsername);
    }


    loginRequiredError() {
        expect(this.loginValidationError).toBeDisabled();
        expect(this.loginValidationError.getText()).toEqual('Required');
    }
}

export default new LoginPage();
