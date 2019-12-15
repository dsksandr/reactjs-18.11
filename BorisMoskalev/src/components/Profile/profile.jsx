import React, {Component} from 'react';

import {TextField} from '@material-ui/core';

export class Profile extends Component {
    render() {
        return (
            <div>
                <TextField label="First Name" name="proFName"/>
                <TextField label="Last Name" name="proLName"/>

            </div>
        );
    }
}