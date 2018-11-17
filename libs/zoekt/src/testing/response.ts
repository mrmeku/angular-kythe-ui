import {ZoektSearchResponse} from '../lib/zoekt.declarations';

export const response: ZoektSearchResponse = {
  "Files" : [ {
    "Repo" : "kythe",
    "Branches" : [ "master" ],
    "FileName" :
        "kythe/go/extractors/cmd/bazel/bazel_go_extractor/bazel_go_extractor.go",
    "Lines" : [
      {
        "LineNumber" : 68,
        "Line" : "\tvnameRuleFile := flag.Arg(2)",
        "Matches" : [ {"Start" : 1, "End" : 14} ]
      },
      {
        "LineNumber" : 81,
        "Line" : "\trules, err := bazel.LoadRules(vnameRuleFile)",
        "Matches" : [ {"Start" : 31, "End" : 44} ]
      }
    ]
  } ],
  "Error" : null
};
