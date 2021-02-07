/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type RunDataArray = {
  game?: string;
  gameTwitch?: string;
  system?: string;
  region?: string;
  release?: string;
  category?: string;
  estimate?: string;
  estimateS?: number;
  setupTime?: string;
  setupTimeS?: number;
  scheduled?: string;
  scheduledS?: number;
  teams: {
    name?: string;
    id: string;
    players: {
      name: string;
      id: string;
      teamID: string;
      country?: string;
      social: {
        twitch?: string;
      };
      externalID: string;
    }[];
  }[];
  customData: {
    [k: string]: string;
  };
  id: string;
  externalID: string;
}[];
