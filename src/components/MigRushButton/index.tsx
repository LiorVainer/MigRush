import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

import classes from './mig-rush-button.module.scss'

export interface PrimaryButtonProps {
    text?: string
    fontSize?: number
    faIconProps?: FontAwesomeIconProps
}

export const MigRushButton: React.VFC<PrimaryButtonProps> = ({
    text,
    fontSize,
    faIconProps,
}) => {
    return (
        <button className={classes.primaryButton} style={{ fontSize }}>
            {text && <p>{text}</p>}
            {faIconProps && <FontAwesomeIcon {...faIconProps} />}
        </button>
    )
}
