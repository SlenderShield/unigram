import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function ServiceCard({ id, image, title, desc }) {
  return (
    <Link to={`/service/${id}`} >
      <Card className="mt-6 w-72 h-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={image}
            alt="card-image"
          />
        </CardHeader>
        <CardBody >
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            {desc}
          </Typography>
        </CardBody>
      </Card>
    </Link >
  );
}
export default ServiceCard;