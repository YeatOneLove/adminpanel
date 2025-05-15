import { Typography } from "@mui/material";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import { IBreadCrumbs } from "./interfaces";

const Breadcrumbs = ({ breadcrumb }: IBreadCrumbs): React.ReactElement => {
  return (
    <MuiBreadcrumbs separator="卐" aria-label="breadcrumb" sx={{ mb: 3 }}>
      <Typography variant="caption"> </Typography>
      <Typography variant="caption">{breadcrumb}</Typography>
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
