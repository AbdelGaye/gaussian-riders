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
        // driver = new ChromeDriver();

    }

    @Given("^the User uses Chrome or Firefox")
    public void givenIndex() {
        //Set implicit wait of 10 seconds and launch google
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.get("http://cs.mcgill.ca/~fglozm/gaussian-riders/index.html");
    }

    @And("^the User wants to access the index page")
    public void andIndex() { }

    @When("^the User browses to the index page")
    public void whenIndex() {
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.get("http://cs.mcgill.ca/~fglozm/gaussian-riders/administrator-view#");
    }

    @Then("^the index page is generated")
    public void thenIndex() { }

    @Given("^the wants to use the Administrator View wih Chrome or Firefox")
    public void givenAdmin() {
        //Set implicit wait of 10 seconds and launch google
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.get("http://cs.mcgill.ca/~fglozm/gaussian-riders/index.html");
    }

    @When("^the User clicks on the Administrator View button from the index page")
    public void whenAdmin() {
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.get("http://cs.mcgill.ca/~fglozm/gaussian-riders/administrator-view#");
    }

    @Then("^the administrator view page is generated")
    public void thenAdmin() { }


    // Close the web driver safely
    @After
    public void closeBrowser () {
        driver.close();
        driver.quit();
    }

}
