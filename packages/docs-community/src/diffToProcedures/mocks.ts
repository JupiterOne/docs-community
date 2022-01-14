export const expectedSortedChanges = [
  {
    parentID: null,
    knowledgeBaseID: 1,
    name: "Getting Started and Admin",
    fileName: "getting-started_and-admin",
    description: "",
    knowledgeCategoryID: null,
    path: "getting-started_and-admin",
    childrenPath: "getting-started_and-admin/jupiterOne-query-language_(J1QL)-copy.md",
    procedureType: "Category",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "jupiterOne-query-language_(J1QL)-copy.md",
    name: "Jupiterone Query Language Copy",
    body: "FILE_DOES_NOT_EXIST",
    path: "getting-started_and-admin/jupiterOne-query-language_(J1QL)-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: "Article",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "jupiterOne-query-language_(J1QL).md",
    name: "Jupiterone Query Language",
    body: "FILE_DOES_NOT_EXIST",
    path: "getting-started_and-admin/jupiterOne-query-language_(J1QL).md",
    format: "markdown",
    locale: "en",
    procedureType: "Article",
  },
  {
    parentID: null,
    knowledgeBaseID: 1,
    name: "Compliance Reporting",
    fileName: "compliance-reporting",
    description: "",
    knowledgeCategoryID: null,
    path: "getting-started_and-admin/compliance-reporting",
    childrenPath:
      "getting-started_and-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    procedureType: "Category",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "soc2-with-jupiterone-copy.md",
    name: "Soc2 With Jupiterone Copy",
    body: "FILE_DOES_NOT_EXIST",
    path: "getting-started_and-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: "Article",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "soc2-with-jupiterone.md",
    name: "Soc2 With Jupiterone",
    body: "FILE_DOES_NOT_EXIST",
    path: "getting-started_and-admin/compliance-reporting/soc2-with-jupiterone.md",
    format: "markdown",
    locale: "en",
    procedureType: "Article",
  },
];

export const expectHandleNestedKnowledgeCategoryChanges = [
  {
    parentID: null,
    knowledgeBaseID: 1,
    name: "Getting Started and Admin",
    fileName: "getting-started_and-admin",
    description: "",
    knowledgeCategoryID: null,
    path: "getting-started_and-admin",
    childrenPath:
      "getting-started_and-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    procedureType: "Category",
  },
  {
    parentID: null,
    knowledgeBaseID: 1,
    name: "Compliance Reporting",
    fileName: "compliance-reporting",
    description: "",
    knowledgeCategoryID: null,
    path: "getting-started_and-admin/compliance-reporting",
    childrenPath:
      "getting-started_and-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    procedureType: "Category",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "soc2-with-jupiterone-copy.md",
    name: "Soc2 With Jupiterone Copy",
    body: "FILE_DOES_NOT_EXIST",
    path: "getting-started_and-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: "Article",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "soc2-with-jupiterone.md",
    name: "Soc2 With Jupiterone",
    body: "FILE_DOES_NOT_EXIST",
    path: "getting-started_and-admin/compliance-reporting/soc2-with-jupiterone.md",
    format: "markdown",
    locale: "en",
    procedureType: "Article",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "jupiterOne-query-language_(J1QL)-copy.md",
    name: "Jupiterone Query Language Copy",
    body: "FILE_DOES_NOT_EXIST",
    path: "getting-started_and-admin/jupiterOne-query-language_(J1QL)-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: "Article",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "jupiterOne-query-language_(J1QL).md",
    name: "Jupiterone Query Language",
    body: "FILE_DOES_NOT_EXIST",
    path: "getting-started_and-admin/jupiterOne-query-language_(J1QL).md",
    format: "markdown",
    locale: "en",
    procedureType: "Article",
  },
  {
    childrenPath: "rock-and-roll/rocks.md",
    description: "",
    fileName: "rock-and-roll",
    knowledgeBaseID: 1,
    knowledgeCategoryID: null,
    name: "Rock And Roll",
    parentID: null,
    path: "rock-and-roll",
    procedureType: "Category",
  },
  {
    articleID: null,
    body: "FILE_DOES_NOT_EXIST",
    fileName: "rocks.md",
    format: "markdown",
    knowledgeCategoryID: null,
    locale: "en",
    name: "Rocks",
    path: "rock-and-roll/rocks.md",
    procedureType: "Article",
  },
];
