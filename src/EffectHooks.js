import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

export default function EffectHooks() {
  const [randNumber, setNumber] = useState(10);

  useEffect(() => {
    console.log("use effect");
    return () => {
      console.log("unmounting");
    };
  });

  return (
    <Card>
      <CardContent>
        Random Number: {randNumber}
        <p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setNumber(Math.floor(Math.random() * 10));
            }}
          >
            Change Name
          </Button>
        </p>
      </CardContent>
    </Card>
  );
}
