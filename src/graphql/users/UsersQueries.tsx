import {gql} from "@apollo/client";

export const GET_USER_PROFILE = gql`
    query GET_USER_PROFILE {
        users_users {
            first_name
            last_name
            email
        }
    }
`;