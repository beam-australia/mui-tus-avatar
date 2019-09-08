import React from "react";
import { storiesOf } from "@storybook/react";
import App from "./components/App";
import Avatar from "../src";

storiesOf("Avatar", module)
  .add("No props", () => (
    <App>
      <Avatar />
    </App>
  ))
  .add("Rounded", () => (
    <App>
      <Avatar rounded />
    </App>
  ))
  .add("Sizes", () => (
    <App>
      <p>Extra small (xs)</p>
      <Avatar size="xs" />
      <p>Small(sm)</p>
      <Avatar size="sm" />
      <p>Medium (md)</p>
      <Avatar size="md" />
      <p>Large (lg)</p>
      <Avatar size="lg" />
      <p>Extra large (xl)</p>
      <Avatar size="xl" />
      <p>Null size (auto)</p>
      <Avatar size={null} />
    </App>
  ))
  .add("Custom size", () => (
    <App>
      <p>Width only (330)</p>
      <Avatar
        width={330}
        src="https://images.unsplash.com/photo-1506578367198-7551ddb03281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      />
      <p>Height only (330)</p>
      <Avatar
        height={330}
        src="https://images.unsplash.com/photo-1546538994-4f15d0aa966f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
      />
      <p>Width and Height (150x350)</p>
      <Avatar
        height={150}
        width={350}
        src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=65"
      />
    </App>
  ))
  .add("Default src", () => (
    <App>
      <Avatar
        src=""
        defaultSrc="https://api.adorable.io/avatars/285/default@src.com"
      />
    </App>
  ));

storiesOf("Updating", module)
  .add("No upload", () => (
    <App>
      <Avatar />
    </App>
  ))
  .add("Upload enabled", () => (
    <App>
      <Avatar uploadable />
    </App>
  ));

storiesOf("Cropping", module)
  .add("Default aspect (1:1)", () => (
    <App>
      <Avatar uploadable croppable />
    </App>
  ))
  .add("Custom aspect (16:9)", () => (
    <App>
      <Avatar uploadable croppable aspect={16 / 9} />
    </App>
  ))
  .add("Free from (no aspect)", () => (
    <App>
      <Avatar uploadable croppable aspect={null} />
    </App>
  ));

storiesOf("Use cases", module)
  .add("Avatar", () => (
    <App>
      <p>Uploadable, croppable, avatar ready!</p>
      <Avatar
        width={300}
        height={300}
        src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        uploadable
        croppable
        rounded
      />
    </App>
  ))
  .add("Logo", () => (
    <App>
      <p>Uploadable, croppable, logo ready!</p>
      <Avatar
        width={300}
        src="https://cdn.dribbble.com/users/3159810/screenshots/7108929/media/1ff0dd860e72b2339600ce4105a9f2c1.jpg"
        uploadable
      />
    </App>
  ));
