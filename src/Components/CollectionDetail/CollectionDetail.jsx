import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import AcordeonItems from "./AcordeonItems";
import ListaDatosFile from "./ListaDatosFile";
import ListaVariables from "./ListaVariables";

class CollectionDetail extends Component {
  render() {
    const { contentCurrentFile } = this.props;
    // const { info, item, variable } = contentCurrentFile;
    return (
      <div>
        {contentCurrentFile && (
          <>
            <Grid container spacing={3}>
              <Grid item md={6}>
                {" "}
                <div style={{ margin: "1% 0" }}>
                  <ListaDatosFile infoContent={contentCurrentFile.info} />
                </div>
              </Grid>
              <Grid item md={6}>
                <div style={{ margin: "1% 0" }}>
                  <ListaVariables
                    variables={contentCurrentFile.variable || []}
                  />
                </div>
              </Grid>
            </Grid>

            <Typography variant="h4" gutterBottom>
              End Points:
            </Typography>
            {contentCurrentFile.item.map((itemCollection) => (
              <>
                <Typography variant="h5" gutterBottom style={{color: "#FF6C37"}}>
                  {`${itemCollection.name} ${(!itemCollection.item || itemCollection.item.length===0)?"  =>   Aun no hay servicios":""}`}
                </Typography>
                <AcordeonItems endPoints={itemCollection.item} />
              </>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default CollectionDetail;
