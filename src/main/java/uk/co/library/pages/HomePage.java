package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.library.utilities.Utility;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    public HomePage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(id="keywords")
    WebElement jobTitle;
    @CacheLookup
    @FindBy(id="location")
    WebElement location;
    @CacheLookup
    @FindBy(id="distance")
    WebElement distanceDropDown;
    @CacheLookup
    @FindBy(id="toggle-hp-search")
    WebElement moreSearchOptionsLink;
    @CacheLookup
    @FindBy(id="salarymin")
    WebElement salaryMin;
    @CacheLookup
    @FindBy(id="salarymax")
    WebElement salaryMax;
    @CacheLookup
    @FindBy(id="salarytype")
    WebElement salaryTypeDropDown;
    @CacheLookup
    @FindBy(xpath = "//body[1]/main[1]/div[1]/section[1]/div[1]/form[1]/div[1]/div[3]/div[1]/div[4]/select[1]")
    WebElement jobTypeDropDown;
    @CacheLookup
    @FindBy(id="hp-search-btn")
    WebElement findJobsBtn;
    @CacheLookup
    @FindBy(id= "save")
    WebElement acceptAllcookies;
    @CacheLookup
    @FindBy(xpath = "//body[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[1]/h1[1]")
    WebElement resultText;
    public void enterJobTitle(String jobtitle){
        log.info("Enter Job Title  :  "+jobtitle);
        sendTextToElement(jobTitle,jobtitle);
    }
    public void enterLocation(String location1){
        log.info("Enter Location  :  "+location1);
        sendTextToElement(location,location1);
    }
    public void selectDistance(String distance){
        log.info("Select Distance  :  "+distance);
        selectByVisibleTextFromDropDown(distanceDropDown,distance);
    }
    public void clickOnMoreSearchOptionLink(){
        log.info("Click on More search options");
        clickOnElement(moreSearchOptionsLink);
    }
    public void enterMinSalary(String minSalary){
        log.info("Enter minimum salary in Salary Min Field   :  "+minSalary);
        sendTextToElement(salaryMin,minSalary);
    }
    public void enterMaxSalary(String maxSalary){
        log.info("Enter maximum salary in Salary Max Field  :  "+maxSalary);
        sendTextToElement(salaryMax,maxSalary);
    }
    public void selectSalaryType(String sType){
        log.info("Select Salary Type  :  "+sType);
        selectByVisibleTextFromDropDown(salaryTypeDropDown,sType);
    }

    public void selectJobType(String jobType){
        log.info("Select Job Type  : "+jobType);
        selectByVisibleTextFromDropDown(jobTypeDropDown,jobType);
    }
    public void clickOnFindJobsButton(){
        log.info("Click on Find Jobs"+findJobsBtn.toString());
        clickOnElement(findJobsBtn);
    }
    public void clickOnAcceptAllCookies()throws InterruptedException{
        log.info("Click on AcceptAll"+acceptAllcookies.toString());

        driver.switchTo().frame("gdpr-consent-notice");
        Thread.sleep(2000);
        clickOnElement(acceptAllcookies);
        driver.switchTo().defaultContent();
    }
    public String getResult(){
        log.info("Get Result");
        return getTextFromElement(resultText);
    }

}
