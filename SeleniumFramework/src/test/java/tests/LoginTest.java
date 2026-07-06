package tests;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import pages.LoginPage;
import java.time.Duration;

public class LoginTest {

    private WebDriver driver;
    private LoginPage loginPage;
    private WebDriverWait wait;

    @BeforeTest
    public void setup() {
        try {
            WebDriverManager.chromedriver().setup();
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--start-maximized");
            options.addArguments("--incognito");
            driver = new ChromeDriver(options);
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
            wait = new WebDriverWait(driver, Duration.ofSeconds(15));
            loginPage = new LoginPage(driver);
        } catch (Exception e) {
            Assert.fail("Failed to initialize WebDriver: " + e.getMessage());
        }
    }

    @AfterTest
    public void teardown() {
        try {
            if (driver != null) {
                driver.quit();
            }
        } catch (Exception e) {
            System.err.println("Failed to quit WebDriver: " + e.getMessage());
        }
    }

    @Test(priority = 1)
    public void testValidLogin() {
        try {
            loginPage.navigateToLoginPage();

            loginPage.doLogin("validuser@example.com", "ValidPassword123");

            wait.withTimeout(Duration.ofSeconds(10))
                .pollingEvery(Duration.ofMillis(500))
                .until(d -> !d.getCurrentUrl().contains("login"));

            boolean isLoggedIn = !driver.getCurrentUrl().contains("login");
            Assert.assertTrue(isLoggedIn, "Login failed: URL still contains 'login' after valid credentials");
        } catch (Exception e) {
            Assert.fail("testValidLogin failed: " + e.getMessage());
        }
    }

    @Test(priority = 2)
    public void testInvalidLoginWithWrongCredentials() {
        try {
            loginPage.navigateToLoginPage();

            loginPage.doLogin("invaliduser@example.com", "WrongPassword456");

            boolean errorDisplayed = loginPage.isErrorMessageDisplayed();
            Assert.assertTrue(errorDisplayed, "Error message not displayed for invalid credentials");

            String errorText = loginPage.getErrorMessage();
            Assert.assertNotNull(errorText, "Error message text is null");
            Assert.assertFalse(errorText.isEmpty(), "Error message text is empty");
        } catch (Exception e) {
            Assert.fail("testInvalidLoginWithWrongCredentials failed: " + e.getMessage());
        }
    }

    @Test(priority = 3)
    public void testLoginWithEmptyUsername() {
        try {
            loginPage.navigateToLoginPage();

            loginPage.enterPassword("SomePassword789");
            loginPage.clickLogin();

            boolean urlRemainedOnLogin = driver.getCurrentUrl().contains("login");
            boolean errorDisplayed = loginPage.isErrorMessageDisplayed();

            Assert.assertTrue(urlRemainedOnLogin || errorDisplayed,
                "Page did not stay on login or show error when username was empty");
        } catch (Exception e) {
            Assert.fail("testLoginWithEmptyUsername failed: " + e.getMessage());
        }
    }

    @Test(priority = 4)
    public void testRememberMeCheckbox() {
        try {
            loginPage.navigateToLoginPage();

            Assert.assertFalse(loginPage.isRememberMeSelected(),
                "Remember Me checkbox should be unchecked by default");

            loginPage.toggleRememberMe();
            Assert.assertTrue(loginPage.isRememberMeSelected(),
                "Remember Me checkbox should be checked after clicking");

            loginPage.toggleRememberMe();
            Assert.assertFalse(loginPage.isRememberMeSelected(),
                "Remember Me checkbox should be unchecked after clicking again");
        } catch (Exception e) {
            Assert.fail("testRememberMeCheckbox failed: " + e.getMessage());
        }
    }

    @Test(priority = 5)
    public void testForgotPasswordLinkVisibility() {
        try {
            loginPage.navigateToLoginPage();

            boolean isLinkDisplayed = loginPage.isForgotPasswordLinkDisplayed();
            Assert.assertTrue(isLinkDisplayed, "Forgot Password link should be visible on login page");
        } catch (Exception e) {
            Assert.fail("testForgotPasswordLinkVisibility failed: " + e.getMessage());
        }
    }

    @Test(priority = 6)
    public void testLoginWithEmptyPassword() {
        try {
            loginPage.navigateToLoginPage();

            loginPage.enterUsername("user@example.com");
            loginPage.clickLogin();

            boolean errorDisplayed = loginPage.isErrorMessageDisplayed();
            Assert.assertTrue(errorDisplayed,
                "Error message should be displayed when password is empty");
        } catch (Exception e) {
            Assert.fail("testLoginWithEmptyPassword failed: " + e.getMessage());
        }
    }
}
