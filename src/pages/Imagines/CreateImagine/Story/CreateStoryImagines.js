import React from "react";

import Tab from "@mui/material/Tab";
import { AppBar, Box, Paper, Tabs } from "@mui/material";
import Card from "./Card";
import Header from "./Header";

let maxTabIndex = 0;
let currentTablIndex = 0;
export default function CreateStoryImagines(props) {
  // Handle Tab Button Click
  const [tabId, setTabId] = React.useState(0);
  const handleTabChange = (event, newTabId) => {
    if (newTabId === "tabProperties") {
      handleAddTab();
    } else {
      currentTablIndex = newTabId;
      setTabId(newTabId);
    }
  };

  // Handle Add Tab Button
  const [tabs, setAddTab] = React.useState([]);
  const handleAddTab = () => {
    maxTabIndex = maxTabIndex + 1;
    setAddTab([
      ...tabs,
      <Tab label={`Story Part ${maxTabIndex}`} key={maxTabIndex} />,
    ]);
    handleTabsContent();
  };

  // Handle Add Tab Content
  const [tabsContent, setTabsContent] = React.useState([
    <TabPanel tabId={tabId}>
      <Card />
    </TabPanel>,
  ]);
  const handleTabsContent = () => {
    setTabsContent([
      <TabPanel tabId={tabId}>
        {tabId} <Card />
      </TabPanel>,
    ]);
  };

  return (
    <Paper style={{ width: "100%" }}>
      <Header />
      <AppBar position="static" color="inherit" sx={{ width: "100%" }}>
        <Tabs
          value={tabId}
          onChange={handleTabChange}
          allowScrollButtonsMobile
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Story Part 0" />
          {tabs.map((child) => child)}
          <Tab
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
            }
            value="tabProperties"
          />
        </Tabs>
      </AppBar>
      <Box padding={2}>{tabsContent.map((child) => child)}</Box>
    </Paper>
  );
}

function TabPanel(props) {
  const { children, tabId } = props;
  return (
    <Box
      value={maxTabIndex}
      index={maxTabIndex}
      hidden={tabId !== currentTablIndex}
      key={maxTabIndex}
    >
      {children}
    </Box>
  );
}
