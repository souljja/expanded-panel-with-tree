import React, { useState } from "react";
import { Header, Button } from "./header.styles";

export const HeaderComponent = React.memo(props => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    props.onOpen();
    setOpen(!open);
  };

  return (
    <Header open={open}>
      <Button onClick={handleToggle}>></Button>
    </Header>
  );
});
