import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ConsumedEventList } from "./consumedEvent/ConsumedEventList";
import { ConsumedEventCreate } from "./consumedEvent/ConsumedEventCreate";
import { ConsumedEventEdit } from "./consumedEvent/ConsumedEventEdit";
import { ConsumedEventShow } from "./consumedEvent/ConsumedEventShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Consumer Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ConsumedEvent"
          list={ConsumedEventList}
          edit={ConsumedEventEdit}
          create={ConsumedEventCreate}
          show={ConsumedEventShow}
        />
      </Admin>
    </div>
  );
};

export default App;
