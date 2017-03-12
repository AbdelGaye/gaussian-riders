import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.And;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Created by ptchomakov on 2017-03-04.
 */

public class cucumberJava {

    protected WebDriver driver;

    // Safely open the webdrive before the tests begin
    // Note, fixed delays are only used to allow the video/user to see the interactions
    @Before
    public void setup() {
        System.setProperty("webdriver.gecko.driver","C:\\temp\\geckodriver.exe");
        driver = new FirefoxDriver();

    }

    // Normal Flow
    @Given("^customer is on the Home Page$")
    public void givenNormalFlow () {
        //Set implicit wait of 10 seconds and launch google
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.get("http://localhost:8080/index.html");
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.get("http://localhost:8080/administrator_view.html#");
    }


    // Close the web driver safely
    @After
    public void closeBrowser () {
        driver.close();
        driver.quit();
    }

}
