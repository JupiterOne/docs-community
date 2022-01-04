import { PATH_OF_DIRECTORY_TO_WATCH } from "../utils/constants";
import { filterDiffs } from "./utils";
describe("Utils", () => {
  describe("filterDiffs", () => {
    it("orders by path length and removes directories not in knowledgeBase", async () => {
      const exampleDiffs = [
        `${PATH_OF_DIRECTORY_TO_WATCH}/getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md`,
        `${PATH_OF_DIRECTORY_TO_WATCH}/getting-started-admin/compliance-reporting/soc2-with-jupiterone.md`,
        `${PATH_OF_DIRECTORY_TO_WATCH}/getting-started-admin/jupiterone-query-language-copy.md`,
        `${PATH_OF_DIRECTORY_TO_WATCH}/getting-started-admin/jupiterone-query-language.md`,
        `procedures/Release/files.md`,
      ];

      const actual = filterDiffs(exampleDiffs);

      const expected: string[] = [
        "getting-started-admin/jupiterone-query-language-copy.md",
        "getting-started-admin/jupiterone-query-language.md",
        "getting-started-admin/compliance-reporting/soc2-with-jupiterone-copy.md",
        "getting-started-admin/compliance-reporting/soc2-with-jupiterone.md",
      ];
      expect(actual).toEqual(expected);
    });
  });
});
