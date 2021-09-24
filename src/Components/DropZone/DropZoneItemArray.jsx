import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DropZoneItem from "./DropZoneItem";
const DropZoneItemArray = (props) => {
  const [dropZoneItems, setDropZoneItems] = useState([]);

  useEffect(() => {
    if (props.inputItems && props.inputItems !== []) {
      setDropZoneItems(props.inputItems);
    }
  }, [props.inputItems]);
  return (
    <div style={estilosDropZoneItemArray.container}>
      <br />
      <Grid
         container
         direction="row"
         justify="space-around"
         alignItems="flex-start"
        spacing={8}
      >
        {dropZoneItems.map((dz_item) => (
          <Grid item>
            <DropZoneItem content={dz_item} />
          </Grid>
        ))}
      </Grid>
      <br />
    </div>
  );
};

export default DropZoneItemArray;
const estilosDropZoneItemArray = {
  container: {
    maxHeight: 350,
    "overflow-x": "hidden",
    border: "3px solid #cecece",
    borderRadius: 20,
    margin:"1%",
  },
};
