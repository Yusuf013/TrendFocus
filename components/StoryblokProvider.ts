"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Feature from "./Feature/Feature";
import ourValues from "./ourValues/ourValues";
import OurTeam_caroussel from "./OurTeam-caroussel/OurTeam-caroussel";

const components = {
  page: Page,
  feature: Feature,
  ourValues: ourValues,
  OurTeam_caroussel: OurTeam_caroussel,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: components as SbReactComponentsMap,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

console.log(process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN);
