import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function EffectHooksAPI() {
  const [employees, setEmployees] = useState([]);
  const [randNumber, setNumber] = useState(10);

  useEffect(() => {
    console.log("calling use effect");
    fetch("https://launchlibrary.net/1.2/launch/next/10")
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          setEmployees(data.launches.slice(0, 5));
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  }, []);

  useEffect(() => {
    console.log("use effect" + randNumber);
    return () => {
      console.log("unmounting");
    };
  }, [randNumber]);

  return (
    <Card>
      <CardContent>
        Employee's :
        <ul>
          {employees.map((empData, id) => {
            return <li key={id}>{empData.name}</li>;
          })}
        </ul>
        Random Number: {randNumber}
      </CardContent>
    </Card>
  );
}
