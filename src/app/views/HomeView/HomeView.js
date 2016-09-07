import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classes from './HomeView.scss';
import ArrowIcon from 'components/ArrowIcon';
import Logo from 'components/Logo';
import TextBlock from 'components/TextBlock';

export class HomeView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <div
                    className={classes.view}
                >
                    <div className={classes['logo-container']}>
                        <Logo />
                    </div>
                    <TextBlock headline="Scan Your Receipt">
                        to start the express pickup
                    </TextBlock>
                    <div className={classes.arrow}>
                        <ArrowIcon box={true} size="4x"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(HomeView);
