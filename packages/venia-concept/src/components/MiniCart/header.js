import React from 'react';
import { bool, shape, string } from 'prop-types';
import CloseIcon from 'react-feather/dist/icons/x';

import { mergeClasses } from 'src/classify';
import Icon from 'src/components/Icon';

import defaultClasses from './header.css';
import Trigger from './trigger';

const Header = props => {
    const { isEditingItem } = props;

    const classes = mergeClasses(defaultClasses, props.classes);
    const title = isEditingItem ? 'Edit Cart Item' : 'Shopping Cart';

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>{title}</h2>
            <Trigger>
                <Icon src={CloseIcon} />
            </Trigger>
        </div>
    );
};

Header.propTypes = {
    classes: shape({
        root: string,
        title: string
    }),
    isEditingItem: bool
};

export default Header;
