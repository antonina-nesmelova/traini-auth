import React, { Component } from 'react'
import { withRouter } from 'react-router'
import gql from 'graphql-tag'
import {Query} from "@apollo/react-components";

export const USER_QUERY = gql`
    {
        me {
            name
            email
        }   
    }
`

class Account extends Component {

    render() {
        return (
            <Query query={USER_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const me = data.me

                    return (
                        <div>
                            {me.name}
                            {me.email}
                        </div>
                    )
                }
                }
            </Query>
        )
    }
}

export default withRouter(Account)