import {
  FLAG_FOR_DELETE,
  ProcedureTypeEnum,
  VanillaArticle,
  VanillaKnowledgeCategory,
} from "../utils";

export const matchingVanillaKnowledgeArticle = {
  name: "Soc2 With Jupiterone Copy",
  knowledgeCategoryID: 22,
  articleID: 43, // used in path
} as VanillaArticle;

export const vanillaKnowledgeArticle = {
  name: "Soc2 With Jupiterone",
  knowledgeCategoryID: 33,
  articleID: 2, // used in path
} as VanillaArticle;
export const vanillaArticleWithInfo = {
  knowledgeCategoryID: 22,
  articleID: 11,
  fileName: "jupiterone-query-language-copy.md",
  name: "Jupiterone Query Language Copy",
  body: "",
  path: "getting-started-admin/jupiterone-query-language-copy.md",
  format: "markdown",
  locale: "en",
  procedureType: ProcedureTypeEnum.Article,
} as VanillaArticle;

export const procedureArticle = {
  knowledgeCategoryID: null,
  articleID: null,
  fileName: "soc2-with-jupiterone-copy.md",
  name: "Soc2 With Jupiterone Copy",
  body: "",
  path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
  format: "markdown",
  locale: "en",
  procedureType: ProcedureTypeEnum.Article,
} as VanillaArticle;
export const vanillaKnowledgeCategory = {
  parentID: 8,
  knowledgeBaseID: 1,
  name: "Compliance Reporting",
  fileName: "compliance-reporting",
  description: "",
  knowledgeCategoryID: 23,
  path: "getting-started-admin/compliance-reporting",
  childrenPath:
    "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
  procedureType: ProcedureTypeEnum.Category,
} as VanillaKnowledgeCategory;

export const childVanillaKnowledgeCategory = {
  parentID: 23,
  knowledgeBaseID: 1,
  name: "Other",
  fileName: "other",
  description: "",
  knowledgeCategoryID: 283,
  path: "getting-started-admin/compliance-reporting/other",
  childrenPath:
    "getting-started-admin/compliance-reporting/other/soc2-with-jupiterone-copy.md",
  procedureType: ProcedureTypeEnum.Category,
} as VanillaKnowledgeCategory;

export const procedureKnowledgeCategory = {
  parentID: null,
  knowledgeBaseID: 1,
  name: "Soc2 Reporting",
  fileName: "soc2-reporting",
  description: "",
  knowledgeCategoryID: null,
  path: "getting-started-admin/soc2-reporting",
  childrenPath:
    "getting-started-admin/soc2-reporting/soc2-with-jupiterone-copy.md",
  procedureType: ProcedureTypeEnum.Category,
};
export const matchingProcedureKnowledgeCategory = {
  parentID: null,
  knowledgeBaseID: 1,
  name: "Compliance Reporting",
  fileName: "compliance-reporting",
  description: "",
  knowledgeCategoryID: null,
  path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
  childrenPath: "compliance-reporting",
  procedureType: ProcedureTypeEnum.Category,
};

export const proceduresMock = [
  {
    parentID: null,
    knowledgeBaseID: 1,
    name: "Getting Started Admin",
    fileName: "getting-started-admin",
    description: "",
    knowledgeCategoryID: null,
    path: "getting-started-admin/jupiterone-query-language-copy.md",
    childrenPath: "getting-started-admin",
    procedureType: "Category",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "jupiterone-query-language-copy.md",
    name: "Jupiterone Query Language Copy",
    body: "",
    path: "getting-started-admin/jupiterone-query-language-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "jupiterone-query-language.md",
    name: "Jupiterone Query Language",
    body: "",
    path: "getting-started-admin/jupiterone-query-language.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  {
    parentID: null,
    knowledgeBaseID: 1,
    name: "Compliance Reporting",
    fileName: "compliance-reporting",
    description: "",
    knowledgeCategoryID: null,
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    childrenPath: "compliance-reporting",
    procedureType: "Category",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "soc2-with-jupiterone-copy.md",
    name: "Soc2 With Jupiterone Copy",
    body: "",
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "soc2-with-jupiterone.md",
    name: "Soc2 With Jupiterone",
    body: "",
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
] as (VanillaArticle | VanillaKnowledgeCategory)[];
// for all new
export const PROCEDURES = [
  {
    //post
    parentID: null,
    knowledgeBaseID: 1,
    name: "Getting Started Admin",
    fileName: "getting-started-admin",
    description: "",
    knowledgeCategoryID: null,
    path: "getting-started-admin/jupiterone-query-language-copy.md",
    childrenPath: "getting-started-admin",
    procedureType: "Category",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "jupiterone-query-language-copy.md",
    name: "Jupiterone Query Language Copy",
    body: "",
    path: "getting-started-admin/jupiterone-query-language-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "jupiterone-query-language.md",
    name: "Jupiterone Query Language",
    body: "",
    path: "getting-started-admin/jupiterone-query-language.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  {
    parentID: null,
    knowledgeBaseID: 1,
    name: "Compliance Reporting",
    fileName: "compliance-reporting",
    description: "",
    knowledgeCategoryID: null,
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    childrenPath: "compliance-reporting",
    procedureType: "Category",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "soc2-with-jupiterone-copy.md",
    name: "Soc2 With Jupiterone Copy",
    body: "",
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "soc2-with-jupiterone.md",
    name: "Soc2 With Jupiterone",
    body: "",
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
] as (VanillaArticle | VanillaKnowledgeCategory)[];
//knowledgeCategoies and articles with correct parents - for all new
export const SHAPEWEWANT = [
  {
    parentID: 1,
    knowledgeBaseID: 1,
    name: "Getting Started Admin",
    fileName: "getting-started-admin",
    description: "",
    knowledgeCategoryID: 22,
    path: "getting-started-admin/jupiterone-query-language-copy.md",
    childrenPath: "getting-started-admin",
    procedureType: "Category",
  },
  {
    knowledgeCategoryID: 22,
    articleID: 11,
    fileName: "jupiterone-query-language-copy.md",
    name: "Jupiterone Query Language Copy",
    body: "Im markdown. LOOK AT ME.",
    path: "getting-started-admin/jupiterone-query-language-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  {
    knowledgeCategoryID: 22,
    articleID: 12,
    fileName: "jupiterone-query-language.md",
    name: "Jupiterone Query Language",
    body: "Im markdown. LOOK AT ME.",
    path: "getting-started-admin/jupiterone-query-language.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  {
    parentID: 22,
    knowledgeBaseID: 1,
    name: "Compliance Reporting",
    fileName: "compliance-reporting",
    description: "",
    knowledgeCategoryID: 33,
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    childrenPath: "compliance-reporting",
    procedureType: "Category",
  },
  {
    knowledgeCategoryID: 33,
    articleID: 21,
    fileName: "soc2-with-jupiterone-copy.md",
    name: "Soc2 With Jupiterone Copy",
    body: "Im markdown. LOOK AT ME.",
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  {
    knowledgeCategoryID: 33,
    articleID: 22,
    fileName: "soc2-with-jupiterone.md",
    name: "Soc2 With Jupiterone",
    body: "Im markdown. LOOK AT ME.",
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
];

// for delete article
export const PROCEDURESWithOneDeleteArticleAndCreates = [
  {
    parentID: 1,
    knowledgeBaseID: 1,
    name: "Getting Started Admin",
    fileName: "getting-started-admin",
    description: "",
    knowledgeCategoryID: 22,
    path: "getting-started-admin/jupiterone-query-language-copy.md",
    childrenPath: "getting-started-admin",
    procedureType: "Category",
  },
  //deleting this one
  {
    knowledgeCategoryID: 22,
    articleID: 11,
    fileName: "jupiterone-query-language-copy.md",
    name: "Jupiterone Query Language Copy",
    body: "FILE_DOES_NOT_EXIST",
    path: "getting-started-admin/jupiterone-query-language-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  {
    knowledgeCategoryID: 22,
    articleID: 12,
    fileName: "jupiterone-query-language.md",
    name: "Jupiterone Query Language",
    body: "",
    path: "getting-started-admin/jupiterone-query-language.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  // adding these
  {
    parentID: null,
    knowledgeBaseID: 1,
    name: "Compliance Reporting",
    fileName: "compliance-reporting",
    description: "",
    knowledgeCategoryID: null,
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    childrenPath: "compliance-reporting",
    procedureType: "Category",
  },
  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "soc2-with-jupiterone-copy.md",
    name: "Soc2 With Jupiterone Copy",
    body: "",
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },

  {
    knowledgeCategoryID: null,
    articleID: null,
    fileName: "soc2-with-jupiterone.md",
    name: "Soc2 With Jupiterone",
    body: "",
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
] as (VanillaArticle | VanillaKnowledgeCategory)[];

export const expectedDeleteANDCreatesPROCEDURES = [
  {
    parentID: 1,
    knowledgeBaseID: 1,
    name: "Getting Started Admin",
    fileName: "getting-started-admin",
    description: "",
    knowledgeCategoryID: 22,
    path: "getting-started-admin/jupiterone-query-language-copy.md",
    childrenPath: "getting-started-admin",
    procedureType: "Category",
  },
  //deleting this one
  {
    knowledgeCategoryID: 22,
    articleID: 11,
    fileName: "jupiterone-query-language-copy.md",
    name: "Jupiterone Query Language Copy",
    body: "FILE_DOES_NOT_EXIST",
    path: "getting-started-admin/jupiterone-query-language-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  {
    knowledgeCategoryID: 22,
    articleID: 12,
    fileName: "jupiterone-query-language.md",
    name: "Jupiterone Query Language",
    body: "Im markdown. LOOK AT ME.",
    path: "getting-started-admin/jupiterone-query-language.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  // adding these
  {
    parentID: 22,
    knowledgeBaseID: 1,
    name: "Compliance Reporting",
    fileName: "compliance-reporting",
    description: "",
    knowledgeCategoryID: 33,
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    childrenPath: "compliance-reporting",
    procedureType: "Category",
    foreignID: undefined,
    sort: undefined,
    sortChildren: undefined,
    url: undefined,
  },
  {
    knowledgeCategoryID: 33,
    articleID: 21,
    fileName: "soc2-with-jupiterone-copy.md",
    name: "Soc2 With Jupiterone Copy",
    body: "Im markdown. LOOK AT ME.",
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },

  {
    knowledgeCategoryID: 33,
    articleID: 22,
    fileName: "soc2-with-jupiterone.md",
    name: "Soc2 With Jupiterone",
    body: "Im markdown. LOOK AT ME.",
    path: "getting-started-admin/compliance-reporting/soc2-with-jupiterone.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
] as (VanillaArticle | VanillaKnowledgeCategory)[];

export const PROCEDURESWithKCategoriesToDelete = [
  {
    parentID: 1,
    knowledgeBaseID: 1,
    name: "Getting Started Admin",
    fileName: "getting-started-admin",
    description: "",
    knowledgeCategoryID: 22,
    path: "getting-started-admin/jupiterone-query-language-copy.md",
    childrenPath: "getting-started-admin",
    procedureType: "Category",
  },

  {
    knowledgeCategoryID: 22,
    articleID: 12,
    fileName: "jupiterone-query-language.md",
    name: "Jupiterone Query Language",
    body: "",
    path: "getting-started-admin/jupiterone-query-language.md",
    format: "markdown",
    locale: "en",
    procedureType: ProcedureTypeEnum.Article,
  },
  // kCategory with deleteFlag
  // kCategory IN another Category
  {
    parentID: 22,
    knowledgeBaseID: 1,
    name: "Other Reporting",
    fileName: "other-reporting",
    description: FLAG_FOR_DELETE,
    knowledgeCategoryID: 324,
    path: "getting-started-admin/other-reporting/soc2-with-jupiterone-copy.md",
    childrenPath: "other-reporting",
    procedureType: "Category",
  },
  // kCategory with deleteFlag
  // kCategory IN another Category in another
  {
    parentID: 324,
    knowledgeBaseID: 1,
    name: "Other Sub Category Reporting",
    fileName: "other-sub-category-reporting",
    description: FLAG_FOR_DELETE,
    knowledgeCategoryID: 542,
    path: "getting-started-admin/other-reporting/other-sub-category-reporting/soc2-with-jupiterone-copy.md",
    childrenPath: "other-sub-category-reporting",
    procedureType: "Category",
  },
  // kCategory with deleteFlag
  // kCategory IN another Category
  {
    parentID: 22,
    knowledgeBaseID: 1,
    name: "Other Other Reporting",
    fileName: "other-other-reporting",
    description: FLAG_FOR_DELETE,
    knowledgeCategoryID: 998,
    path: "getting-started-admin/other-other-reporting/soc2-with-jupiterone-copy.md",
    childrenPath: "other-other-reporting",
    procedureType: "Category",
  },
] as (VanillaArticle | VanillaKnowledgeCategory)[];

export const PROCEDURESKCategoriesDELETED = [
  {
    parentID: 1,
    knowledgeBaseID: 1,
    name: "Getting Started Admin",
    fileName: "getting-started-admin",
    description: "",
    knowledgeCategoryID: 22,
    path: "getting-started-admin/jupiterone-query-language-copy.md",
    childrenPath: "getting-started-admin",
    procedureType: "Category",
  },
  // kCategory with deleteFlag
  // kCategory IN another Category
  {
    parentID: 22,
    knowledgeBaseID: 1,
    name: "Other Reporting",
    fileName: "other-reporting",
    description: "been deleted",
    knowledgeCategoryID: 324,
    path: "getting-started-admin/other-reporting/soc2-with-jupiterone-copy.md",
    childrenPath: "other-reporting",
    procedureType: "Category",
  },
  // kCategory with deleteFlag
  // kCategory IN another Category in another
  {
    parentID: 324,
    knowledgeBaseID: 1,
    name: "Other Sub Category Reporting",
    fileName: "other-sub-category-reporting",
    description: "been deleted",
    knowledgeCategoryID: 542,
    path: "getting-started-admin/other-reporting/other-sub-category-reporting/soc2-with-jupiterone-copy.md",
    childrenPath: "other-sub-category-reporting",
    procedureType: "Category",
  },
  // kCategory with deleteFlag
  // kCategory IN another Category
  {
    parentID: 22,
    knowledgeBaseID: 1,
    name: "Other Other Reporting",
    fileName: "other-other-reporting",
    description: "been deleted",
    knowledgeCategoryID: 998,
    path: "getting-started-admin/other-other-reporting/soc2-with-jupiterone-copy.md",
    childrenPath: "other-other-reporting",
    procedureType: "Category",
  },
] as VanillaKnowledgeCategory[];

export const createKCategory = ({
  parentID,
  knowledgeBaseID,
  name,
  fileName,
  description,
  knowledgeCategoryID,
  path,
  childrenPath,
}: {
  parentID?: number | null;
  knowledgeBaseID?: number;
  name?: string;
  fileName?: string;
  description?: string;
  knowledgeCategoryID?: number | null;
  path?: string;
  childrenPath?: string;
}): VanillaKnowledgeCategory => ({
  parentID: parentID || null,
  knowledgeBaseID: knowledgeBaseID || 1,
  name: name || "Other Sub Category Reporting",
  fileName: fileName || "other-sub-category-reporting",
  description: description || FLAG_FOR_DELETE,
  knowledgeCategoryID: 542,
  path: "getting-started-admin/other-reporting/other-sub-category-reporting/soc2-with-jupiterone-copy.md",
  childrenPath: "other-sub-category-reporting",
  procedureType: ProcedureTypeEnum.Category,
});
