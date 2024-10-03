import React, { useReducer } from "react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum reached" : null,
      };
    }

    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum reached" : null,
      };
    }

    default:
      return state;
  }
}

const Demo = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px] p-10">
        <CardHeader>
          {" "}
          <CardTitle className="mx-auto">Counter Mini App</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-5">
            <div className="text-xl font-bold mx-auto">
              Count: {state.count}
            </div>
            {state.error && <div className="text-red-500">{state.error}</div>}

            <Button onClick={() => dispatch({ type: "increment" })}>
              Increment
            </Button>
            <Button onClick={() => dispatch({ type: "decrement" })}>
              Decrement
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Demo;
