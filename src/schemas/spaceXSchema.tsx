import { gql } from "@apollo/client";

const EXCHANGE_LAUNCHES = gql`
  {
    launches {
      rocket {
        rocket_name
      }
      launch_date_utc
      details
      links {
        video_link
      }
    }
  }
`;

export default EXCHANGE_LAUNCHES