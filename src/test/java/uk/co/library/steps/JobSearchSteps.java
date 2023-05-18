package uk.co.library.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import uk.co.library.pages.HomePage;

public class JobSearchSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {        }
    @When("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String jobtitle)  {
        new HomePage().enterJobTitle(jobtitle);
    }

    @And("^I deleter cookies$")
    public void iDeleterCookies()throws InterruptedException {

        new HomePage().clickOnAcceptAllCookies();
    }

    @And("^I enter Location \"([^\"]*)\"$")
    public void iEnterLocation(String location)  {
        new HomePage().enterLocation(location);
    }
    @And("^I select distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance)  {
        new HomePage().selectDistance(distance);
    }

    @And("^I click on moreSearchOptionsLink$")
    public void iClickOnMoreSearchOptionsLink() {
        new HomePage().clickOnMoreSearchOptionLink();
    }
    @And("^I enter salaryMin \"([^\"]*)\"$")
    public void iEnterSalaryMin(String salaryMin)  {
        new HomePage().enterMinSalary(salaryMin);
    }
    @And("^I enter salaryMax \"([^\"]*)\"$")
    public void iEnterSalaryMax(String salaryMax)  {
        new HomePage().enterMaxSalary(salaryMax);
    }
    @And("^I select salaryType \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType)  {
        new HomePage().selectSalaryType(salaryType);
    }
    @And("^I select jobType \"([^\"]*)\"$")
    public void iSelectJobType(String jobType)  {
        new HomePage().selectJobType(jobType);
    }
    @And("^I click on 'Find Jobs' button$")
    public void iClickOnFindJobsButton() {
        new HomePage().clickOnFindJobsButton();
    }
    @Then("^I verify the result \"([^\"]*)\"$")
    public void iVerifyTheResult(String result)  {
        Assert.assertEquals(new HomePage().getResult(),result,"Result is not matching");
    }

}
