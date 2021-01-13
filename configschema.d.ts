/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Configschema {
  language: "en" | "ja";
  twitch: {
    enabled: boolean;
    clientID: string;
    clientSecret: string;
    redirectURI: string;
    additionalScopes?: string[] | null;
    channelName?: string;
    streamTitle: string;
    streamDefaultGame: string;
    ffzIntegration?: boolean;
    ffzUseRepeater?: boolean;
    ffzBlacklist?: string[] | null;
  };
  schedule: {
    defaultURL: string;
    ignoreGamesWhileImporting?: string[] | null;
    disableSpeedrunComLookup: boolean;
    customData?:
      | {
          name: string;
          key: string;
          ignoreMarkdown?: boolean;
        }[]
      | null;
  };
  oengus: {
    defaultMarathon: string;
    useJapanese: boolean;
    disableSpeedrunComLookup: boolean;
  };
  checklist: {
    enabled: boolean;
    items?: string[] | null;
    forceCheckBeforeStartTimer: boolean;
  };
}
