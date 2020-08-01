import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import UsingEffectHook from "./EffectHooks";
import EffectHooksAPI from "./EffectHooksAPI";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <UsingEffectHook />
        <EffectHooksAPI />
      </Container>
    </React.Fragment>
  );
}
