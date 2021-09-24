import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0% 2% 1% 2%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const AcordeonItems = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { endPoints } = props;
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // console.log("endPoints[0].request.body.raw: ", JSON.parse(endPoints[0].request.body.raw));
  return (
    <div className={classes.root}>
      {endPoints &&
        endPoints.map((endPoint, index) => (
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography className={classes.heading}>
                {`${endPoint.request.method} : ${endPoint.name}`}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {`${endPoint.request.url.raw}`}
              </Typography>
            </AccordionSummary>
            <div style={{ alignItems: "center" }}>
              <Typography className={classes.secondaryHeading}>
                {`   ${endPoint.request.url.raw}`}
              </Typography>
            </div>
            <AccordionDetails>
              <div
                style={{
                  color: "white",
                  width: "100%",
                  minHeight: "30vh",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "46%", backgroundColor: "#1C272B" }}>
                  <h2>Request body:</h2>
                  <br />
                  {endPoint.request.body && <p>{endPoint.request.body.raw}</p>}
                </div>
                <div style={{ width: "46%", backgroundColor: "#1C272B" }}>
                  <h2>Response body:</h2>
                  <br />
                  {endPoint.response &&
                    endPoint.response.map((response) => (
                      <>
                        <p>{response.body}</p>
                        <br />
                      </>
                    ))}
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};

export default AcordeonItems;
