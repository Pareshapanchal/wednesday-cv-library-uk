$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("result.feature");
formatter.feature({
  "line": 1,
  "name": "JobSearchTest",
  "description": "",
  "id": "jobsearchtest",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "verifyJobSearchResultUsingDifferentDataSet",
  "description": "(String jobTitle, String location, String distance, String salaryMin, String salaryMax, String salaryType, String jobType,\r\nString result).",
  "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I deleter cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 19,
      "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow"
      ],
      "line": 20,
      "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;2"
    },
    {
      "cells": [
        "Banking",
        "Kent",
        "10 miles",
        "5000",
        "7000",
        "Per month",
        "Contract",
        "Contract Banking jobs in Kent"
      ],
      "line": 21,
      "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;3"
    },
    {
      "cells": [
        "Customer Searvices",
        "Bradford",
        "2 miles",
        "300",
        "500",
        "Per week",
        "Temporary",
        "Temporary Customer Searvices jobs in Bradford"
      ],
      "line": 22,
      "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;4"
    },
    {
      "cells": [
        "Admin \u0026 Administration",
        "Edinburgh",
        "7 miles",
        "100",
        "150",
        "Per day",
        "Part Time",
        "Part Time Admin \u0026 Administration jobs in Edinburgh"
      ],
      "line": 23,
      "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;5"
    },
    {
      "cells": [
        "IT",
        "Birmingham",
        "15 miles",
        "30",
        "50",
        "Per hour",
        "Apprenticeship",
        "Apprenticeship It jobs in Birmingham"
      ],
      "line": 24,
      "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;6"
    },
    {
      "cells": [
        "Education",
        "Coventry",
        "1 mile",
        "3000000",
        "5000000",
        "Per annum",
        "Permanent",
        "Permanent Education jobs in Coventry"
      ],
      "line": 25,
      "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;7"
    },
    {
      "cells": [
        "Healthcare",
        "Cardiff",
        "100 miles",
        "30",
        "50",
        "Per month",
        "Part Time",
        "Part Time Healthcare jobs in Cardiff"
      ],
      "line": 26,
      "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10939384199,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verifyJobSearchResultUsingDifferentDataSet",
  "description": "(String jobTitle, String location, String distance, String salaryMin, String salaryMax, String salaryType, String jobType,\r\nString result).",
  "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I deleter cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Permanent Tester jobs in Harrow\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 130605100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 156161600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iDeleterCookies()"
});
formatter.result({
  "duration": 42425847099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 98369000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 173179300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 87368301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 124155699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 135688000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 151058200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 150320900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 121218100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 14091855999,
  "status": "passed"
});
formatter.after({
  "duration": 757671899,
  "status": "passed"
});
formatter.before({
  "duration": 3455687400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verifyJobSearchResultUsingDifferentDataSet",
  "description": "(String jobTitle, String location, String distance, String salaryMin, String salaryMax, String salaryType, String jobType,\r\nString result).",
  "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Banking\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I deleter cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"Kent\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"5000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"7000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Contract Banking jobs in Kent\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 118668100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iDeleterCookies()"
});
formatter.result({
  "duration": 42365251000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kent",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 109336701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 173768100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 102597399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 112031300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7000",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 132824401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 147534800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 154046100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 108109199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Banking jobs in Kent",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 9339896400,
  "status": "passed"
});
formatter.after({
  "duration": 624082400,
  "status": "passed"
});
formatter.before({
  "duration": 3482490500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verifyJobSearchResultUsingDifferentDataSet",
  "description": "(String jobTitle, String location, String distance, String salaryMin, String salaryMax, String salaryType, String jobType,\r\nString result).",
  "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Customer Searvices\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I deleter cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"Bradford\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"2 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"300\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per week\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Temporary\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Temporary Customer Searvices jobs in Bradford\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 102801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Searvices",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 184952300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iDeleterCookies()"
});
formatter.result({
  "duration": 42397302400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bradford",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 407704500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 169121300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 111151799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 129266199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 164102800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per week",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 164699100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 150826100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 117038000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary Customer Searvices jobs in Bradford",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 6873507701,
  "status": "passed"
});
formatter.after({
  "duration": 721724400,
  "status": "passed"
});
formatter.before({
  "duration": 3582085101,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verifyJobSearchResultUsingDifferentDataSet",
  "description": "(String jobTitle, String location, String distance, String salaryMin, String salaryMax, String salaryType, String jobType,\r\nString result).",
  "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Admin \u0026 Administration\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I deleter cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"Edinburgh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"7 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"100\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"150\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per day\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Part Time\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Part Time Admin \u0026 Administration jobs in Edinburgh\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin \u0026 Administration",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 181794701,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iDeleterCookies()"
});
formatter.result({
  "duration": 42409701900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edinburgh",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 375625700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 139638500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 97850800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 168558200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 93080400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 117135800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 152797400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 147999300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time Admin \u0026 Administration jobs in Edinburgh",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 18108957000,
  "status": "passed"
});
formatter.after({
  "duration": 685624900,
  "status": "passed"
});
formatter.before({
  "duration": 3289323000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verifyJobSearchResultUsingDifferentDataSet",
  "description": "(String jobTitle, String location, String distance, String salaryMin, String salaryMax, String salaryType, String jobType,\r\nString result).",
  "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"IT\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I deleter cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"Birmingham\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"30\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"50\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per hour\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Apprenticeship\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Apprenticeship It jobs in Birmingham\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IT",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 130438700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iDeleterCookies()"
});
formatter.result({
  "duration": 42384789500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Birmingham",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 407708400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 102017500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 98545900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 124068900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 113119000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per hour",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 156329200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apprenticeship",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 165706700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 136318900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apprenticeship It jobs in Birmingham",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 7545909300,
  "status": "passed"
});
formatter.after({
  "duration": 679923300,
  "status": "passed"
});
formatter.before({
  "duration": 2970182000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verifyJobSearchResultUsingDifferentDataSet",
  "description": "(String jobTitle, String location, String distance, String salaryMin, String salaryMax, String salaryType, String jobType,\r\nString result).",
  "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Education\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I deleter cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"Coventry\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"1 mile\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"3000000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"5000000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Permanent Education jobs in Coventry\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 75300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Education",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 138673100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iDeleterCookies()"
});
formatter.result({
  "duration": 42346289100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coventry",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 345457100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 mile",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 158765200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 110519600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000000",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 141952800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000000",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 144873500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 151464300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 142196200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 126771600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Education jobs in Coventry",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 6552262800,
  "status": "passed"
});
formatter.after({
  "duration": 661145100,
  "status": "passed"
});
formatter.before({
  "duration": 3691901600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verifyJobSearchResultUsingDifferentDataSet",
  "description": "(String jobTitle, String location, String distance, String salaryMin, String salaryMax, String salaryType, String jobType,\r\nString result).",
  "id": "jobsearchtest;verifyjobsearchresultusingdifferentdataset;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Healthcare\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I deleter cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Location \"Cardiff\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"100 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"30\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"50\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select jobType \"Part Time\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Part Time Healthcare jobs in Cardiff\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 57200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Healthcare",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 153263200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iDeleterCookies()"
});
formatter.result({
  "duration": 42342557000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cardiff",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 353749700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 186513800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 101378800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 193456900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 85765800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 157873000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 152481800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 124492300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time Healthcare jobs in Cardiff",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 2496131600,
  "status": "passed"
});
formatter.after({
  "duration": 697671500,
  "status": "passed"
});
});